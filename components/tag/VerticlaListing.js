import StoryCard from "../common/Content/StoryCard";
import { useState } from "react";
import { getReports, getStoriesForTag } from "@/utils/api-calls";

export default function VerticalListing({ storiesList, slug }) {
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(2);
   const [stories, setStories] = useState(storiesList);

   async function getMoreStories() {
      setLoading(true);
      let res = await getStoriesForTag(null, slug, page, 10);
      setPage(page + 1);
      setStories([...stories, ...res.stories]);
      setLoading(false);
   }
   return (
      <div className="mt-[30px]">
         {stories.map((story, index) => (
            <StoryCard
               key={index}
               story={story}
               withImage
               imagePosition="left"
               customClass="mb-[20px]"
               customImageHeight={177}
               customImageWidth={270}
               partnerLogo={story?.post_type == "partner-content" ? story?.partner_logo : null}
            />
         ))}
         <button
            className={`font-medium text-blue mt-[50px] rounded-sm border-[1.5px] border-blue border-solid block mx-auto py-[11px] px-[20px] font-outfit ${
               loading && "opacity-50"
            }`}
            onClick={getMoreStories}
            disabled={loading}
         >
            Load More Results
         </button>
      </div>
   );
}
