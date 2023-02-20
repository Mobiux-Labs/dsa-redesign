import StoryCard from "../common/Content/StoryCard";
import { useState } from "react";
import {
   getCategoryStories,
   getPartnerContentStories,
} from "@/utils/api-calls";

export default function LoadMorePartnerContentStoriesSection({
   title,
   storiesList,
   category,
   slug,
}) {
   const [stories, setStories] = useState(storiesList);
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(3);

   async function getMoreStories() {
      setLoading(true);
      const res = await getPartnerContentStories(null, page, 9);
      setPage(page + 1);
      setStories([...stories, ...res]);
      setLoading(false);
   }

   return (
      <section className="mt-[100px]">
         <h2 className="text-heading font-bold text-3xl leading-[55px]">
            More on {title}
         </h2>
         {/* Grid of stories */}
         <div className="grid grid-cols-3 gap-[30px] mt-[45px]">
            {stories?.map((story, index) => (
               <div key={index}>
                  <StoryCard story={story} partnerLogo={story?.partner_logo} />
               </div>
            ))}
         </div>
         {/* Load more button */}
         <button
            className={`font-medium text-blue mt-[50px] rounded-sm border-[1.5px] border-blue border-solid block mx-auto py-[11px] px-[20px] text-base ${
               loading && "opacity-50"
            }`}
            onClick={getMoreStories}
            disabled={loading}
         >
            See More
         </button>
      </section>
   );
}
