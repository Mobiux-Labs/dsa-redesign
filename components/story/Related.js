import StoryCard from "../common/Content/StoryCard";

export default function RelatedStories({ stories }) {
   return (
      <div>
         <h2 className="text-heading font-bold text-3xl mb-[45px]">
            Related Reads
         </h2>
         <div className="gap-[50px] flex flex-col">
            {stories?.map((story, index) => (
               <div key={index}>
                  <StoryCard key={story?.post_id} story={story} />
               </div>
            ))}
         </div>
      </div>
   );
}
