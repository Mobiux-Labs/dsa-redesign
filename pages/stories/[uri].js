import Layout from "@/components/common/Layout/Layout";
import { getUserSession } from "@/utils/user";
import { separateSlugId, getTimeAgo } from "@/utils/helper";
import { getFullStoryData, getLastReadStories } from "@/utils/api-calls";
import { redirectTo404 } from "@/constants";
import LeaderboardAd from "@/components/common/Ads/Leaderboard";
import CategoryBadge from "@/components/common/Content/CategoryBadge";
import Image from "next/image";
import RelatedStories from "@/components/story/Related";
import HorizontalSection from "@/components/home/HorizontalSection";
import AuthorInfo from "@/components/story/AuthorInfo";
import ShareIcons from "@/components/story/ShareIcons";
import FromFavourites from "@/components/story/FromFavourites";
import PopularReads from "@/components/story/PopularReads";
import { useEffect } from "react";
import { addTablePressFeatures } from "@/utils/misc";

export default function StoryPage(props) {
   console.table(props.storyData);
   const story = props.storyData;
   const hasRelatedStories = story?.related_stories?.length > 0;

   useEffect(() => {
      addTablePressFeatures();
   }, []);

   return (
      <Layout session={props.session} withLeaderBoardAd={false}>
         <div className="w-[800px] mx-auto">
            {/* Advertisement */}
            <div className="mt-[10px] mb-[40px]">
               <LeaderboardAd withoutPadding />
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
            />
            {/* Content */}
            <div
               className="font-serif font-medium text-content leading-[28px]"
               dangerouslySetInnerHTML={{ __html: story?.content }}
            />
            <hr className="my-[80px] border-t-1 border-gray" />
            {/* Related stories */}
            {hasRelatedStories ? (
               <RelatedStories stories={story?.related_stories} />
            ) : null}
            {/* Advertisement */}
            <div className="mt-[80px]">
               <LeaderboardAd withoutPadding />
            </div>
         </div>
         {/* Favourites and popular reads */}
         <div className="flex  px-[120px] my-[100px]">
            <FromFavourites stories={story?.trending} />
            <PopularReads stories={story?.trending} />
         </div>
         {/* Last read */}
         {props.lastReadStories?.lenght > 0 ? (
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
   const { uri } = context.query;
   const session = await getUserSession(context.req);
   const [slug, id] = separateSlugId(uri);

   const storyData = await getFullStoryData(context.req, id, uri);
   if (!storyData) return redirectTo404;

   const lastReadStories = await getLastReadStories(context.req);

   return {
      props: {
         uri,
         storyData,
         session,
         lastReadStories,
      },
   };
}
