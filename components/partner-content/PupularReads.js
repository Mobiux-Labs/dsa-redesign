import StoryCard from "../common/Content/StoryCard";

export default function PopularPartnerContentStories({ stories }) {
   return (
      <div>
         <h2 className="text-heading text-3xl font-bold leading-[55px] mb-[45px]">
            Popular Reads
         </h2>
         <div className="grid grid-cols-2 gap-[30px]">
            {stories?.slice(0, 4)?.map((story, index) => (
               <StoryCard
                  story={story}
                  key={index}
                  partnerLogo={story?.partner_logo}
               />
            ))}
         </div>
      </div>
   );
}
