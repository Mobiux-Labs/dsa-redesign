import { useCompactTheme } from "@/utils/context";
import { SeeMoreButton } from "../common/Buttons";
import StoryCard from "../common/Content/StoryCard";

export default function VerticalSection({
   leftStories,
   rightStories,
   leftTitle,
   rightTitle,
   imageSize,
}) {
   const [compactTheme] = useCompactTheme();
   return (
      <div className="grid z-10 grid-cols-3 relative">
         {/* Headlings */}
         <div className="head text-heading text-3xl font-bold col-span-3 pb-[45px] grid grid-cols-3">
            <h2 className="col-span-2">{leftTitle}</h2>
            <h2 className="pl-[30px]">{rightTitle}</h2>
         </div>
         {/* left sections stories */}
         <Content
            leftStories={leftStories}
            rightStories={rightStories}
            imageSize={imageSize}
            compactTheme={compactTheme}
         />
         {/* divider */}
         <div className="absolute top-0 left-0 h-full w-full grid grid-cols-3">
            <div className="col-span-2 border-solid border-r-[1px] border-lightgray"></div>
         </div>
         {/* See more buttons for both the sections */}
         <div className="head text-heading text-3xl font-bold col-span-3 pb-[45px] grid grid-cols-3 mt-[40px] z-[1000]">
            <div className="col-span-2">
               <SeeMoreButton href={""} />
            </div>
            <div className="pl-[30px]">
               <SeeMoreButton href={""} />
            </div>
         </div>
      </div>
   );
}

function Content({ leftStories, rightStories, imageSize, compactTheme }) {
   function shouldHaveImage(i, row) {
      if ((i == 0 || i == 1) && row == 0) return true;
      return false;
   }
   return (
      <>
         <div
            className={`grid grid-cols-3 col-span-3 row-span-3 ${
               compactTheme
                  ? "gap-x-[40px] gap-y-[30px] mb-[30px]"
                  : "gap-x-[60px] mb-[40px]"
            }`}
         >
            {leftStories.slice(0, 2).map((story, i) => (
               <div className="h-fit" key={i}>
                  <StoryCard
                     key={story.id}
                     story={story}
                     imageSize={imageSize}
                     withImage={shouldHaveImage(i, 0)}
                  />
               </div>
            ))}
            {rightStories.slice(0, 1).map((story, i) => (
               <div className="h-fit" key={i}>
                  <StoryCard
                     key={story.id}
                     story={story}
                     imageSize={imageSize}
                     withImage={shouldHaveImage(i, 0)}
                  />
               </div>
            ))}
         </div>
         <div
            className={`grid grid-cols-3 col-span-3 row-span-3 ${
               compactTheme
                  ? "gap-x-[40px] gap-y-[30px] mb-[30px]"
                  : "gap-x-[60px] mb-[40px]"
            }`}
         >
            {leftStories.slice(2, 4).map((story, i) => (
               <div className="h-fit" key={i}>
                  <StoryCard
                     key={story.id}
                     story={story}
                     imageSize={imageSize}
                     withImage={shouldHaveImage(i, 1)}
                  />
               </div>
            ))}
            {rightStories.slice(1, 2).map((story, i) => (
               <div className="h-fit" key={i}>
                  <StoryCard
                     key={story.id}
                     story={story}
                     imageSize={imageSize}
                     withImage={shouldHaveImage(i, 1)}
                  />
               </div>
            ))}
         </div>
         <div
            className={`grid grid-cols-3 col-span-3 row-span-3 ${
               compactTheme
                  ? "gap-x-[40px] gap-y-[30px] mb-[30px]"
                  : "gap-x-[60px] mb-[40px]"
            }`}
         >
            {leftStories.slice(4, 6).map((story, i) => (
               <div className="h-fit" key={i}>
                  <StoryCard
                     key={story.id}
                     story={story}
                     imageSize={imageSize}
                     withImage={shouldHaveImage(i, 2)}
                  />
               </div>
            ))}
            {rightStories.slice(2, 3).map((story, i) => (
               <div className="h-fit" key={i}>
                  <StoryCard
                     key={story.id}
                     story={story}
                     imageSize={imageSize}
                     withImage={shouldHaveImage(i, 2)}
                  />
               </div>
            ))}
         </div>
         {compactTheme ? (
            <div
               className={`grid grid-cols-3 col-span-3 row-span-3 ${
                  compactTheme
                     ? "gap-x-[40px] gap-y-[30px] mb-[30px]"
                     : "gap-x-[60px] mb-[40px]"
               }`}
            >
               {leftStories.slice(6, 8).map((story, i) => (
                  <div className="h-fit" key={i}>
                     <StoryCard
                        key={story.id}
                        story={story}
                        imageSize={imageSize}
                        withImage={shouldHaveImage(i, 2)}
                     />
                  </div>
               ))}
               {rightStories.slice(3, 4).map((story, i) => (
                  <div className="h-fit" key={i}>
                     <StoryCard
                        key={story.id}
                        story={story}
                        imageSize={imageSize}
                        withImage={shouldHaveImage(i, 2)}
                     />
                  </div>
               ))}
            </div>
         ) : null}
      </>
   );
}
