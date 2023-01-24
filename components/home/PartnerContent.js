import { useCompactTheme } from "@/utils/context";
import Image from "next/image";
import { SeeMoreButton } from "../common/Buttons";
import StoryCard from "../common/Content/StoryCard";

export default function PartnerContent({ stories }) {
   const mainStory = stories[0];
   const [compactTheme] = useCompactTheme();
   return (
      <div className="mt-[100px]">
         <h2 className="text-heading text-3xl font-bold mb-[45px]">
            Partner content
         </h2>
         {/* Stories */}
         <div className="grid grid-cols-2">
            {/* Main story on the left side */}
            <div className={`${compactTheme ? "mr-30" : "mr-60"}`}>
               <div>
                  <div className="w-full h-[411px] relative mb-[33px]">
                     <Image
                        src={mainStory?.image_url}
                        layout={"fill"}
                        objectFit={"cover"}
                        className={"mb-[33px] rounded-md"}
                     />
                  </div>
                  <StoryCard
                     story={mainStory}
                     partnerLogo={mainStory?.partner_logo}
                  />
               </div>
               {compactTheme ? (
                  <div className="mt-30">
                     <StoryCard
                        story={stories[5]}
                        partnerLogo={mainStory?.partner_logo}
                     />
                  </div>
               ) : null}
            </div>
            {/* Other stories on the right side */}
            <div>
               {stories.slice(1, compactTheme ? 5 : 4).map((story) => (
                  <div
                     key={story.post_title}
                     className={`${compactTheme ? "mb-30" : "mb-[40px]"}`}
                  >
                     <StoryCard
                        story={story}
                        partnerLogo={story?.partner_logo}
                     />
                  </div>
               ))}
            </div>
         </div>
         {/* See more button */}
         <SeeMoreButton />
      </div>
   );
}
