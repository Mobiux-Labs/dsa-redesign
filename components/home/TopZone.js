import { useCompactTheme } from "@/utils/context";
import MainStoryCard from "../common/Content/MainStoryCard";
import StoryCard from "../common/Content/StoryCard";
import { useState } from "react";
import Advert from "../common/Ads/Advert";
import { advertLocations } from "@/constants";

export default function TopZone({ stories }) {
   return (
      <div className="grid grid-cols-4">
         {/* Left section with the top stories */}
         <LeftSection headlines={stories.stories} />
         {/* Right section with justin/trending stories and sidebar */}
         <RightSection justin={stories.just_in} trending={stories.trending} />
      </div>
   );
}

function LeftSection({ headlines }) {
   const [compactTheme] = useCompactTheme();
   const mainStory = headlines[0];
   return (
      <div className="grid col-span-3 grid-cols-2 border-1 border-solid border-r-[1px] border-lightgray pr-[20px] h-fit">
         <div className="col-span-2">
            <MainStoryCard story={mainStory} />
         </div>

         {/* 3 rows of 2 columns */}
         <div
            className={`grid col-span-2 pr-[50px] ${
               compactTheme
                  ? "gap-x-13 gap-y-20 mt-20 grid-cols-3"
                  : "gap-x-50 gap-y-40 mt-40 grid-cols-2"
            }`}
         >
            {
               // Skip the first story since it's already displayed in the main story card
               headlines.slice(1, compactTheme ? 10 : 7).map((story, index) => (
                  <StoryCard story={story} key={index} />
               ))
            }
         </div>
      </div>
   );
}

function RightSection({ justin, trending }) {
   const [selectedTab, setSelectedTab] = useState("justin");
   const [isAnimating, setIsAnimating] = useState(false);

   function startAnimation() {
      setIsAnimating(true);
      setTimeout(() => {
         setIsAnimating(false);
      }, 400);
   }

   function getSelectedTabStories() {
      if (selectedTab == "justin") return justin;
      return trending;
   }

   function changeTab() {
      if (selectedTab == "justin") setSelectedTab("trending");
      else setSelectedTab("justin");
      startAnimation();
   }

   let selectedTabHeadingStyles =
      "text-heading text-3xl font-bold cursor-pointer transition-all duration-200 ease";
   let unselectedTabHeadingStyles =
      "text-gray font-bold cursor-pointer transition-all duration-200 ease";

   return (
      <div className="pl-[21px]">
         {/* Title */}
         <div className="flex gap-[20px] items-baseline">
            <p className={selectedTabHeadingStyles} onClick={() => changeTab()}>
               {selectedTab == "justin" ? "Just In" : "Trending"}
            </p>
            <p
               className={unselectedTabHeadingStyles}
               onClick={() => changeTab()}
            >
               {selectedTab == "justin" ? "Trending" : "Just In"}
            </p>
         </div>
         <div className={`mt-[25px] ${isAnimating ? "animated_slidein" : ""}`}>
            {/* Stories x 3 */}
            {getSelectedTabStories()
               .slice(0, 3)
               .map((story, index) => (
                  <div className="mb-[37px]" key={index}>
                     <StoryCard story={story} withExcerpt={false} />
                  </div>
               ))}
            {/* Sidebar ad */}
            <div className="mt-[37px]">
               <Advert
                  adLocation={advertLocations.home_page_section_1_sidebar.name}
                  type="sidebar"
               />
            </div>
         </div>
      </div>
   );
}
