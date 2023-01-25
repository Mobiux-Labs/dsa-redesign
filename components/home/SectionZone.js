import { useCompactTheme } from "@/utils/context";
import { SeeMoreButton } from "../common/Buttons";
import MainStoryCard from "../common/Content/MainStoryCard";
import StoryCard from "../common/Content/StoryCard";

export default function HomePageSection({ title, stories, rightSection }) {
   const [compactTheme] = useCompactTheme();
   return (
      <div className="grid grid-cols-3">
         {/* Left section with the top stories */}
         <LeftSection
            headlines={stories}
            title={title}
            showBorder={rightSection}
         />
         {rightSection}
         {/* {
            // If not right section is passed, then we show the last 2 stories on the right
            !rightSection && (
               <div
                  className={`grid grid-cols-1 gap-x-20 col-span-1 ${
                     compactTheme ? "gap-y-20 mt-20" : "gap-y-40 mt-40"
                  }`}
               >
                  {
                     // Skip the first story since it's already displayed in the main story card
                     stories
                        .slice(
                           compactTheme ? 5 : 3,
                           compactTheme ? 5 + 3 : 3 + 2
                        )
                        .map((story) => (
                           <StoryCard story={story} />
                        ))
                  }
               </div>
            )
         } */}
      </div>
   );
}

function LeftSection({ headlines, title, showBorder }) {
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
               className={`col-span-3 grid grid-cols-3 gap-x-20 ${
                  compactTheme ? "gap-y-20 mt-20" : "gap-y-40 mt-40"
               }`}
            >
               <div className="col-span-2">
                  <MainStoryCard story={mainStory} />
               </div>
               {
                  // Skip the first story since it's already displayed in the main story card
                  headlines.slice(1, compactTheme ? 8 : 5).map((story) => (
                     <StoryCard story={story} />
                  ))
               }
            </div>
            <div className="mt-30">
               <SeeMoreButton />
            </div>
         </div>
      </div>
   );
}
