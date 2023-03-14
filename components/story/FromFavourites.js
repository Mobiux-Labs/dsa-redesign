import StoryCard from "../common/Content/StoryCard";

export default function FromFavourites({ stories }) {
   let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
   let imagePosition = windowWidth > 1200 || windowWidth < 576 ? "top" : "left";
   return (
      <div className="border-r-[1px] border-lightgray pr-[27px] w-[110%] max-lg:w-[100%] max-lg:border-none max-lg:pr-[0px]">
         <h3 className="text-heading text-3xl font-bold mb-[57px]">From your favourite topics</h3>
         {/* Map 5 stories */}
         <div className="flex flex-col gap-[60px] leading-[35px]">
            {stories.slice(0, 5).map((story, index) => (
               <div key={index}>
                  <StoryCard
                     story={story}
                     withImage
                     imagePosition={imagePosition}
                     customImageHeight={120}
                     customImageWidth={160}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
