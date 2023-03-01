import Layout from "@/components/common/Layout/Layout";
import { getPartnerContentStory, getLastReadStories } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import CategoryBadge from "@/components/common/Content/CategoryBadge";
import AuthorInfo from "@/components/story/AuthorInfo";
import ShareIcons from "@/components/story/ShareIcons";
import FromFavourites from "@/components/story/FromFavourites";
import PopularReads from "@/components/story/PopularReads";
import HorizontalSection from "@/components/home/HorizontalSection";
import Image from "next/image";
import RelatedStories from "@/components/story/Related";
import { advertLocations, redirectTo404 } from "@/constants";
import { loader } from "@/utils/helper";
import Advert from "@/components/common/Ads/Advert";
import ArticleSEO from "@/components/common/SEO/ArticleSEO";
import ArticleJsonLdComponent from "@/components/common/SEO/ArticleJsonLd";

export default function PartnerContentStory(props) {
   const { story } = props;
   let hasRelatedStories = story?.related_stories?.length > 0;
   return (
      <Layout session={props.session} withLeaderBoardAd={false}>
         <ArticleSEO article={story} />
         <ArticleJsonLdComponent article={story} />
         <div className="w-[800px] mx-auto">
            {/* Advertisement */}
            <div className="mt-[10px] mb-[40px]">
               <Advert
                  adLocation={advertLocations.bottom_article.name}
                  withoutPadding
               />
            </div>
            <CategoryBadge category={story?.category} />
            <h1 className="text-heading font-bold text-3xl leading-[55px] mt-[5px]">
               {story?.post_title}
            </h1>
            {/* Author info and the share icons */}
            <div className="flex justify-between py-[20px] items-center sticky bg-white top-[80px]">
               <AuthorInfo story={story} />
               <ShareIcons story={story} />
            </div>
            {/* Excerpt */}
            <p className="font-serif font-medium leading-[28px] text-content">
               {story?.post_excerpt}
            </p>
            {/* Image */}
            <Image
               className="my-[30px] h-[488px] w-full object-cover rounded-md"
               src={story?.image_url}
               width={1000}
               height={488}
               loader={loader}
            />
            {/* Content */}
            <div
               className="font-serif text-content text-lg leading-[28px] article-content"
               dangerouslySetInnerHTML={{ __html: story?.post_content }}
            />
            {/* Blocker if applicable */}
            {props.showBlocker ? <Blocker /> : null}
            <hr className="my-[80px] border-t-1 border-gray" />
            {/* Related stories */}
            {hasRelatedStories ? (
               <RelatedStories stories={story?.related_stories} />
            ) : null}
            {/* Advertisement */}
            <div className="mt-[80px]">
               <Advert
                  adLocation={advertLocations.bottom_article.name}
                  withoutPadding
               />
            </div>
         </div>
         {/* Favourites and popular reads */}
         <div className="flex  px-[120px] my-[100px]">
            <FromFavourites stories={story?.trending} />
            <PopularReads stories={story?.trending} />
         </div>

         {/* Last read */}
         {props.lastReadStories?.length > 0 ? (
            <HorizontalSection
               stories={props.lastReadStories}
               title="Last Read"
               background={false}
            />
         ) : null}
      </Layout>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const story = await getPartnerContentStory(context.req, context.params.slug);
   if (!story) return redirectTo404;
   story.post_content = `<article>${story.post_content}</article>`;
   const lastReadStories = await getLastReadStories(context.req);
   return { props: { session, story, lastReadStories } };
}
