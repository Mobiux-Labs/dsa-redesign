import { useCompactTheme } from "@/utils/context";
import { SeeMoreButton } from "../common/Buttons";
import MainStoryCard from "../common/Content/MainStoryCard";
import StoryCard from "../common/Content/StoryCard";

export default function HomePageSection({ title, stories, rightSection, url }) {
   const [compactTheme] = useCompactTheme();
   return (
      <div
         className={`grid grid-cols-3 ${
            rightSection ? "grid-cols-4" : "grid-cols-3"
         }`}
      >
         {/* Left section with the top stories */}
         <LeftSection
            headlines={stories}
            title={title}
            showBorder={rightSection}
            hasRightSection={rightSection}
            url={url}
         />
         {rightSection}
      </div>
   );
}

function LeftSection({ headlines, title, showBorder, hasRightSection, url }) {
   const [compactTheme] = useCompactTheme();
   const mainStory = headlines[0];
   return (
      <div
         className={`col-span-3 ${
            showBorder
               ? "border-1 border-solid border-r-[1px] border-lightgray"
               : ""
         }`}
      >
         <h2
            className={`text-heading font-bold text-3xl col-span-4 mb-[45px] ${
               compactTheme ? "mb-[25px]" : ""
            }`}
         >
            {title}
         </h2>
         <div className="pr-[20px] h-fit col-span-3">
            {/* 3 rows of 2 columns */}
            <div
               className={`col-span-3 grid gap-x-20 ${
                  compactTheme ? "gap-y-20 mt-20" : "gap-y-40 mt-40"
               } ${hasRightSection ? "grid-cols-2" : "grid-cols-3"}`}
            >
               <div className="col-span-2">
                  <MainStoryCard story={mainStory} />
               </div>
               {
                  // Skip the first story since it's already displayed in the main story card
                  headlines
                     .slice(
                        1,
                        compactTheme
                           ? hasRightSection
                              ? 5
                              : 8
                           : hasRightSection
                           ? 3
                           : 5
                     )
                     .map((story, index) => (
                        <StoryCard story={story} key={index} />
                     ))
               }
            </div>
            <div className="mt-30">
               <SeeMoreButton href={url} />
            </div>
         </div>
      </div>
   );
}
