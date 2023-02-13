import StoryCard from "../common/Content/StoryCard";

export default function FromFavourites({ stories }) {
   return (
      <div className="border-r-[1px] border-gray pr-[27px]">
         <h3 className="text-heading text-3xl font-bold mb-[57px]">
            From your favourite topics
         </h3>
         {/* Map 5 stories */}
         <div className="flex flex-col gap-[60px]">
            {stories.slice(0, 5).map((story, index) => (
               <div key={index}>
                  <StoryCard
                     story={story}
                     withImage
                     imagePosition="right"
                     customImageHeight={120}
                     customImageWidth={160}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
