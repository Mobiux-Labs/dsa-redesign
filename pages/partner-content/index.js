import Layout from "@/components/common/Layout/Layout";
import CarouselBanner from "@/components/home/CarouselBanner";
import PartnerContentHeadlines from "@/components/partner-content/Headlines";
import {
   getLastReadStories,
   getPartnerContentStories,
   getTrendingStories,
} from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import LoadMorePartnerContentStoriesSection from "@/components/partner-content/LoadMore";
import FromFavourites from "@/components/story/FromFavourites";
import PopularReads from "@/components/story/PopularReads";
import HorizontalSection from "@/components/home/HorizontalSection";
import PopularPartnerContentStories from "@/components/partner-content/PupularReads";
import YouMightLike from "@/components/partner-content/MightLike";

export default function PartnerContentPage(props) {
   return (
      <Layout session={props.session}>
         <div className="px-[120px]">
            {/* Title and desc */}
            <div className="mb-[50px]">
               <h1 className="text-heading text-3xl font-bold leading-[55px]">
                  Partner Content
               </h1>
               <p className="text-content text-lg leading-[28px] font-serif">
                  A short description of the partner content page.
               </p>
            </div>
            {/* Top headlines */}
            <PartnerContentHeadlines stories={props.stories} />
            <CarouselBanner />
            <LoadMorePartnerContentStoriesSection
               title={"Partner Content"}
               storiesList={props.stories.slice(9, 18)}
               category={"partner-content"}
               slug={"partner-content"}
            />
            {/* Favourites and popular reads */}
            <div className="flex mt-[100px] mb-[22px]">
               <div className="border-r-[1px] border-gray pr-[20px]">
                  <PopularPartnerContentStories stories={props.stories} />
               </div>
               <div>
                  <YouMightLike stories={props.stories} />
               </div>
            </div>
         </div>
         {/* Last read */}
         {props?.lastReadStories?.length > 0 ? (
            <HorizontalSection
               stories={props?.lastReadStories}
               title="Last Read"
               background={false}
            />
         ) : null}
      </Layout>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const stories = await getPartnerContentStories(context.req, 1, 18);
   const lastReadStories = await getLastReadStories(context.req);
   const trendingStories = await getTrendingStories(context.req);
   return {
      props: { session, stories, lastReadStories, trending: trendingStories },
   };
}
