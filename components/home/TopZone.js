import Image from "next/image";
import Sidebar from "../common/Ads/Sidebar";
import CategoryBadge from "../common/Content/CategoryBadge";
import MainStoryCard from "../common/Content/MainStoryCard";
import StoryCard from "../common/Content/StoryCard";

export default function TopZone({ headlines }) {
  return (
    <div className="grid grid-cols-4">
      {/* Left section with the top stories */}
      <LeftSection headlines={headlines.headlines} />
      {/* Right section with justin/trending stories and sidebar */}
      <RightSection justin={headlines.just_in} trending={headlines.trending} />
    </div>
  );
}

function LeftSection({ headlines }) {
  const mainStory = headlines[0];
  return (
    <div className="grid col-span-3 grid-cols-2 border-1 border-solid border-r-[1px] border-lightgray pr-[20px] h-fit">
      <MainStoryCard story={mainStory} />

      {/* 3 rows of 2 columns */}
      <div className="grid grid-cols-2 gap-x-[49px] gap-y-[40px] col-span-2 pr-[50px] mt-[40px]">
        {
          // Skip the first story since it's already displayed in the main story card
          headlines.slice(1, 7).map((story) => (
            <StoryCard story={story} />
          ))
        }
      </div>
    </div>
  );
}

function RightSection({ justin, trending }) {
  return (
    <div className="pl-[21px]">
      {/* Title */}
      <div className="flex gap-[20px] items-baseline">
        <p className="text-heading text-3xl font-bold">Just In</p>
        <p className="text-gray font-bold">Trending</p>
      </div>
      <div className="mt-[25px]">
        {/* Stories x 3 */}
        {justin.slice(0, 3).map((story) => (
          <div className="mb-[37px]">
            <StoryCard story={story} />
          </div>
        ))}
        {/* Sidebar ad */}
        <div className="mt-[37px]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
