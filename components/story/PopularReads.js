import { trimUrl } from "@/utils/helper";
import Link from "next/link";

export default function PopularReads({ stories }) {
   return (
      <div className="pl-[30px]  max-md:px-[0px] max-md:mt-[60px] max-lg:pl-0">
         <h3 className="text-heading text-3xl font-bold mb-[45px]">Popular Reads</h3>
         <div className="flex flex-col">
            {stories.slice(0, 6).map((story, index) => (
               <div
                  key={index}
                  className={`text-heading text-2xl font-bold ${
                     index == 0 ? "pb-[43px]" : index == 5 ? "pt-[43px]" : "py-[43px]"
                  } leading-[35px] ${index != 5 ? "border-b-[1px] border-lightgray" : ""} `}
               >
                  <Link href={trimUrl(story?.post_url)}>
                     <div className="cursor-pointer flex gap-[20px]">
                        <p>{index + 1}</p>
                        <h3 dangerouslySetInnerHTML={{ __html: story?.post_title }} />
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}
