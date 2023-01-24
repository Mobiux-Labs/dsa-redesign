import { useCompactTheme } from "@/utils/context";
import MainStoryCard from "../common/Content/MainStoryCard";
import StoryCard from "../common/Content/StoryCard";

export default function HomePageSection({ title, stories, rightSection }) {
   return (
      <div className="grid grid-cols-4">
         {/* Left section with the top stories */}
         <LeftSection headlines={stories} title={title} />
         {rightSection}
      </div>
   );
}

function LeftSection({ headlines, title }) {
   const [compactTheme] = useCompactTheme();
   const mainStory = headlines[0];
   return (
      <div className="col-span-3 border-1 border-solid border-r-[1px] border-lightgray ">
         <h2
            className={`text-heading font-bold text-3xl col-span-4 mb-[45px] ${
               compactTheme ? "mb-[25px]" : ""
            }`}
         >
            {title}
         </h2>
         <div className="grid col-span-3 grid-cols-2 pr-[20px] h-fit">
            <MainStoryCard story={mainStory} />
            {/* 3 rows of 2 columns */}
            <div
               className={`grid grid-cols-2 gap-x-20 col-span-2 ${
                  compactTheme ? "gap-y-20 mt-20" : "gap-y-40 mt-40"
               }`}
            >
               {
                  // Skip the first story since it's already displayed in the main story card
                  headlines.slice(1, compactTheme ? 5 : 3).map((story) => (
                     <StoryCard story={story} />
                  ))
               }
            </div>
            <a
               href=""
               className="mt-[40px] text-blue font-medium flex items-center gap-[10px]"
            >
               See More
               <span>
                  <img src="icons/arrow.svg" alt="" />
               </span>
            </a>
         </div>
      </div>
   );
}
