import StoryCard from "../common/Content/StoryCard";

export default function VerticalSection({
   stories,
   title,
   index,
   imageSize,
   numberOfStories = 3,
}) {
   function shouldHaveImage(i) {
      if ((index === 1 || index === 2) && i === 0) {
         return true;
      }
      return index === 0;
   }

   return (
      <div
         className={`border-1 border-solid border-r-[1px] border-lightgray h-full flex flex-col justify-between ${
            index === 0
               ? "pr-[30px]"
               : index === 1
               ? "px-[30px]"
               : "pl-[30px] border-none"
         }`}
      >
         <div>
            <h2 className="text-heading font-bold text-3xl">{title}</h2>
            {/* Stories */}
            <div className="mt-[25px] h-full">
               {stories.slice(0, numberOfStories).map((story, index) => (
                  <div className="mt-[50px]">
                     <StoryCard
                        story={story}
                        key={index}
                        withImage={shouldHaveImage(index)}
                        imageSize={imageSize}
                     />
                  </div>
               ))}
            </div>
         </div>
         <a
            href=""
            className="mt-[40px] text-blue font-medium flex items-center gap-[10px]"
         >
            See More
            <span>
               <img src={"icons/arrow.svg"} alt="" />
            </span>
         </a>
      </div>
   );
}
