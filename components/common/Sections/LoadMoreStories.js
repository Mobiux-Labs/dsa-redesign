import StoryCard from "../Content/StoryCard";

export default function LoadMoreStoriesSection({ title, storiesList }) {
   return (
      <section className="mt-[100px] px-[120px]">
         <h2 className="text-heading font-bold text-3xl leading-[55px]">
            More on {title}
         </h2>
         {/* Grid of stories */}
         <div className="grid grid-cols-3 gap-[30px] mt-[45px]">
            {storiesList?.map((story) => (
               <div key={story.id}>
                  <StoryCard story={story} />
               </div>
            ))}
         </div>
         {/* Load more button */}
         <button className="font-medium text-blue mt-[50px] rounded-sm border-[1.5px] border-blue border-solid block mx-auto py-[11px] px-[20px]">
            See More
         </button>
      </section>
   );
}
