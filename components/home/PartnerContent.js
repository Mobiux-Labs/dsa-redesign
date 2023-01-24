import Image from "next/image";
import StoryCard from "../common/Content/StoryCard";

export default function PartnerContent({ stories }) {
   const mainStory = stories[0];
   return (
      <div className="mt-[100px]">
         <h2 className="text-heading text-3xl font-bold mb-[45px]">
            Partner content
         </h2>
         <div className="grid grid-cols-2">
            {/* Main story on the left side */}
            <div className="mr-[60px]">
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
            {/* Other stories on the right side */}
            <div>
               {stories.slice(1).map((story) => (
                  <div key={story.post_title} className={"mb-[73px]"}>
                     <StoryCard
                        story={story}
                        partnerLogo={story?.partner_logo}
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
