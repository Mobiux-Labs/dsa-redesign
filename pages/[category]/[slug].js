import Layout from "@/components/common/Layout/Layout";
import {
   followCategory,
   getCategoryStories,
   getLastReadStories,
} from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import { categoryDesciptions } from "@/constants";
import TopZone from "@/components/home/TopZone";
import CarouselBanner from "@/components/home/CarouselBanner";
import LoadMoreStoriesSection from "@/components/common/Sections/LoadMoreStories";
import HorizontalSection from "@/components/home/HorizontalSection";
import { getCategoryTitle } from "@/utils/helper";
import { useState } from "react";
import { FollowButton } from "@/components/common/Buttons";
import { useRouter } from "next/router";
import { useSession } from "@/utils/context";

export default function CategoryPage(props) {
   const stories = props.data;
   const title = props.title;
   const storiesList = props.data?.stories?.slice(9, 18);
   const router = useRouter();
   const [session, setSession] = useSession();
   const [isFollowing, setIsFollowing] = useState(props?.isFollowing);
   const [isFollowingLoading, setIsFollowingLoading] = useState(false);

   const updateSession = async () => {
      let session = await getUserSession();
      setSession(session);
   };

   const handleFollow = async () => {
      setIsFollowingLoading(true);
      let link = router.asPath;
      if (!props.session?.loggedIn) return;
      await followCategory(
         props.slug,
         props.category,
         link,
         props.session?.email
      );
      updateSession();
      setIsFollowing(!isFollowing);
      setIsFollowingLoading(false);
   };

   return (
      <Layout session={props.session}>
         <section className="px-[120px]">
            <div className="flex items-center gap-[15px]">
               <h1 className="text-heading font-bold text-3xl leading-[55px]">
                  {title}
               </h1>
               <FollowButton
                  onClick={() => handleFollow()}
                  isFollowing={isFollowing}
                  isFollowLoading={isFollowingLoading}
               />
            </div>
            <p className="text-smalltext text-md font-serif">
               {categoryDesciptions[props.slug]}
            </p>
            <div className="mt-[66px]">
               <TopZone stories={stories} />
            </div>
            <CarouselBanner />
         </section>
         <LoadMoreStoriesSection
            title={title}
            storiesList={storiesList}
            category={props.category}
            slug={props.slug}
         />
         {/* Popular reads and you might also like */}
         <div className="mt-[100px]"></div>
         <HorizontalSection title={"Venture capital"} stories={storiesList} />
         {/* Last Read section */}
         <HorizontalSection
            title={"Last Read"}
            stories={props.lastReadStories}
            background={false}
         />
      </Layout>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const { category, slug } = context.query;
   const data = await getCategoryStories(category, slug, context.req, 18);
   const lastReadStories = await getLastReadStories(context.req);
   const title = getCategoryTitle(slug, category);
   let isFollowing = session?.userFavourites.includes(slug);
   return {
      props: {
         category,
         slug,
         session,
         data,
         lastReadStories,
         title,
         isFollowing,
      },
   };
}
