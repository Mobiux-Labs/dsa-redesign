import StoryCard from "../common/Content/StoryCard";
import Image from "next/image";
import { SeeMoreButton } from "../common/Buttons";
import { loader } from "@/utils/helper";

export default function PartnerContentHeadlines({ stories }) {
   let headline = stories[0];
   return (
      <div>
         <div className="flex gap-[30px] mb-[30px]">
            <div className="flex flex-col gap-[30px]">
               <Image
                  src={headline?.image_url}
                  width={1200}
                  height={366}
                  className="rounded-md"
                  loader={loader}
               />
               <StoryCard
                  story={headline}
                  partnerLogo={headline?.partner_logo}
               />
               <StoryCard
                  story={stories[1]}
                  partnerLogo={stories[1]?.partner_logo}
               />
            </div>
            <div className="flex flex-col gap-[30px]">
               {stories.slice(2, 6)?.map((story, index) => (
                  <StoryCard
                     story={story}
                     key={index}
                     partnerLogo={story?.partner_logo}
                  />
               ))}
            </div>
         </div>
         <SeeMoreButton />
      </div>
   );
}
