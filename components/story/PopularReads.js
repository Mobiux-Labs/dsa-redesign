export default function PopularReads({ stories }) {
   return (
      <div className="px-[30px]">
         <h3 className="text-heading text-3xl font-bold mb-[45px]">
            Popular Reads
         </h3>
         <div className="flex flex-col">
            {stories.slice(0, 6).map((story, index) => (
               <div
                  key={index}
                  className={`text-heading text-2xl font-bold ${
                     index == 0
                        ? "pb-[43px]"
                        : index == 5
                        ? "pt-[43px]"
                        : "py-[43px]"
                  } leading-[35px] ${
                     index != 5 ? "border-b-[1px] border-lightgray" : ""
                  } `}
               >
                  <div className="cursor-pointer flex gap-[20px]">
                     <p>{index + 1}</p>
                     <h3
                        dangerouslySetInnerHTML={{ __html: story?.post_title }}
                     />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
