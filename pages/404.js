import Layout from "@/components/common/Layout/Layout";
import { getUserSession } from "@/utils/user";
import { useSession } from "@/utils/context";
import { useEffect, useState } from "react";
import { getTrendingStories } from "@/utils/api-calls";
import StoryCard from "@/components/common/Content/StoryCard";

export default function Custom404(props) {
   const [session, setSession] = useSession();
   const [trendingStories, setTrendingStories] = useState([]);

   async function fetchUserSession() {
      const session = await getUserSession();
      return session;
   }
   async function fetchTrendingStories() {
      let stories = await getTrendingStories();
      return stories;
   }

   useEffect(async () => {
      setSession(await fetchUserSession());
      setTrendingStories(await fetchTrendingStories());
   }, []);

   return (
      <Layout showSectionBar={false}>
         <h1 className="text-darkblue font-bold text-4xl text-center">
            Oops, we couldn't find that page
         </h1>
         <p className="mt-30 text-center font-serif text-heading text-lg">
            Don't let that stop you from reading some of our popular stories.
         </p>
         {/* Story Grid */}
         <div className="mx-[320px] grid grid-cols-2 gap-40 mt-[80px]">
            {trendingStories.length > 0
               ? trendingStories?.map((story, index) => (
                    <div key={index}>
                       <StoryCard story={story} />
                    </div>
                 ))
               : ""}
         </div>
      </Layout>
   );
}
