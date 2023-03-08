import Layout from "@/components/common/Layout/Layout";
import { getUserSession } from "@/utils/user";
import { loader, separateSlugId, trimUrl } from "@/utils/helper";
import { getFullStoryData, getLastReadStories, setStoryViews } from "@/utils/api-calls";
import { advertLocations, baseUrl, redirectTo404 } from "@/constants";
import CategoryBadge from "@/components/common/Content/CategoryBadge";
import Image from "next/image";
import RelatedStories from "@/components/story/Related";
import HorizontalSection from "@/components/home/HorizontalSection";
import AuthorInfo from "@/components/story/AuthorInfo";
import ShareIcons from "@/components/story/ShareIcons";
import FromFavourites from "@/components/story/FromFavourites";
import PopularReads from "@/components/story/PopularReads";
import { useEffect, useState } from "react";
import {
   addTablePressFeatures,
   getContentRestrictions,
   getMiniContent,
   validateGiftKey,
} from "@/utils/article-helpers";
import Blocker from "@/components/story/Blocker";
import Advert from "@/components/common/Ads/Advert";
import ArticleSEO from "@/components/common/SEO/ArticleSEO";
import ArticleJsonLdComponent from "@/components/common/SEO/ArticleJsonLd";
import BreadcrumbJsonLdComponent from "@/components/common/SEO/BreadcrumbJsonLd";
import { useRouter } from "next/router";
import { EditArticleButton } from "@/components/common/Buttons";
import Tags from "@/components/story/Tags";
import TaggedNewsletterForm from "@/components/story/TaggedNewsletterForm";
import { recordStoryDataToGTM, recordUserDataToGTM } from "@/utils/analytics";
import CustomIcon from "@/utils/icon-mapping";
import GiftModal from "@/components/story/GiftModal";

export default function StoryPage(props) {
   const story = props.storyData;
   const hasRelatedStories = story?.related_stories?.length > 0;
   const restriction = props.contentRestrictions;
   const router = useRouter();
   let loggedIntoWP = props?.session?.loggedIntoWP;
   let pageUrl = baseUrl + router.asPath;
   let editedBy = story?.edited_by;
   let tags = story?.tags;
   let taggedNewsletter = story?.tagged_newsletter;
   let showGiftOption = props.session?.loggedIn && props.session?.subscribed && !props.showBlocker && story?.premium;

   const isSubscribedToTaggedNewsletter = () => {
      if (!taggedNewsletter || taggedNewsletter == "") return true;
      let subscribedNewsletters = props?.session?.subscribedNewsletters;
      if (!subscribedNewsletters) return false;
      return subscribedNewsletters.includes(taggedNewsletter);
   };

   useEffect(() => {
      addTablePressFeatures();
      setStoryViews(props.uri, story.premium, story.research);
      recordStoryDataToGTM(story);
      recordUserDataToGTM(props?.session);
   }, []);

   return (
      <Layout session={props.session} withLeaderBoardAd={false}>
         <ArticleSEO article={story} />
         <ArticleJsonLdComponent article={story} />
         <BreadcrumbJsonLdComponent pageUrl={pageUrl} title={story?.post_title} />
         <div className="w-[800px] mx-auto max-lg:w-[85%]">
            {/* Advertisement */}
            <div className="mt-[10px] mb-[40px]">
               <Advert withoutPadding adLocation={advertLocations.bottom_article.name} />
            </div>
            <CategoryBadge category={story?.category} />
            <h1 className="text-heading font-bold text-3xl leading-[55px] mt-[5px]">{story?.post_title}</h1>
            {/* Author info and the share icons */}
            <div className="flex max-md:flex-col max-md:mb-[10px] justify-between py-[20px] items-center sticky bg-white top-[80px] z-[500]">
               <AuthorInfo story={story} />
               <ShareIcons story={story} bookmarked={props?.session?.bookmarked} />
            </div>
            {/* Excerpt */}
            <p className="font-serif font-medium leading-[28px] text-content">{story?.post_excerpt}</p>
            {/* Image */}
            <Image
               className="my-[30px] h-[488px] max-lg:h-[258px] w-full object-cover rounded-md"
               src={story?.image_url}
               width={1000}
               height={488}
               loader={loader}
            />
            {/* Newsletter form if the story is tagged under any newsletter and the user is not subscribed to particular newsletter */}
            {isSubscribedToTaggedNewsletter() ? null : <TaggedNewsletterForm taggedNewsletter={taggedNewsletter} />}
            {/* Content */}
            <div
               className="font-serif text-content text-lg leading-[28px] article-content"
               dangerouslySetInnerHTML={{ __html: story?.post_content }}
            />
            {/* Blocker if applicable */}
            {props.showBlocker ? <Blocker /> : null}
            {/* Edited by and tags */}
            {editedBy ? <EditedBy editors={editedBy} /> : null}
            {tags ? <Tags tags={tags} className="mt-[25px]" /> : null}
            {/* Gift option */}
            {showGiftOption ? <GiftOption story={story} /> : null}
            <hr className="my-[80px] border-t-1 border-gray" />
            {/* Related stories */}
            {hasRelatedStories ? <RelatedStories stories={story?.related_stories} /> : null}
            {/* Advertisement */}
            <div className="mt-[80px]">
               <Advert withoutPadding adLocation={advertLocations.bottom_article.name} />
            </div>
         </div>

         {/* if there is a message to show */}
         {restriction?.message ? (
            <div className="bg-bluebadgebg font-serif text-lg leading-[28px] text-black py-[16px] sticky bottom-0 mt-[20px] animate-delayed-slide-top opacity-0">
               <p className="text-center">{restriction?.message}</p>
            </div>
         ) : null}
         {/* Favourites and popular reads */}
         <div className="flex  max-lg:mt-[60px] max-lg:flex-col max-lg:px-[30px] max-lg:my-[30px] px-[120px] my-[100px]">
            <FromFavourites stories={story?.trending} />
            <PopularReads stories={story?.trending} />
         </div>

         {/* Last read */}
         {props.lastReadStories?.length > 0 ? (
            <HorizontalSection stories={props.lastReadStories} title="Last Read" background={false} />
         ) : null}

         {/* Edit button for WP editors */}
         {loggedIntoWP ? <EditArticleButton articleId={story?.id} /> : null}
      </Layout>
   );
}

function EditedBy({ editors }) {
   return (
      <p className="font-serif text-lg text-content leading-[28px]">
         Edited by:{" "}
         {editors.map((editor, index) => {
            return (
               <a key={index} href={trimUrl(editor?.link)} className="text-darkblue font-bold">
                  {editor.name}
                  {index != editors.length - 1 ? ", " : ""}
               </a>
            );
         })}
      </p>
   );
}

function GiftOption({ story }) {
   const [showModal, setShowModal] = useState(false);
   return (
      <div>
         <div className="flex items-center gap-[15px] mt-[35px]" onClick={() => setShowModal(true)}>
            <CustomIcon name={"share"} color={"#1C70B6"} />
            <button className="text-lg text-darkblue font-serif leading-[28px]">Gift this article</button>
         </div>
         <GiftModal story={story} showModal={showModal} setShowModal={setShowModal} />
      </div>
   );
}

export async function getServerSideProps(context) {
   const { uri } = context.query;
   const session = await getUserSession(context.req);
   const [slug, id] = separateSlugId(uri);
   const { giftKey } = context.query;

   const storyData = await getFullStoryData(context.req, id, uri);
   if (!storyData) return redirectTo404;
   const lastReadStories = await getLastReadStories(context.req);
   let contentRestrictions = await getContentRestrictions(storyData, session, context.req);

   // If the content is restricted due to any reason but there is a gift key, then validate it
   if (contentRestrictions.restricted && giftKey) {
      const validGiftKey = await validateGiftKey(giftKey, storyData.id, context.req);
      if (validGiftKey) contentRestrictions.restricted = false;
   }

   if (contentRestrictions.restricted) storyData.post_content = getMiniContent(storyData.post_content);
   storyData.post_content = `<article>${storyData.post_content}</article>`;
   let showBlocker = contentRestrictions.restricted;

   return {
      props: {
         uri,
         storyData,
         session,
         lastReadStories,
         contentRestrictions,
         showBlocker,
      },
   };
}
