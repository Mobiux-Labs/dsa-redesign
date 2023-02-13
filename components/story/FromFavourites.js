import StoryCard from "../common/Content/StoryCard";

export default function FromFavourites({ stories }) {
   return (
      <div className="border-r-[1px] border-lightgray pr-[27px] w-[110%]">
         <h3 className="text-heading text-3xl font-bold mb-[57px]">
            From your favourite topics
         </h3>
         {/* Map 5 stories */}
         <div className="flex flex-col gap-[60px] leading-[35px]">
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
