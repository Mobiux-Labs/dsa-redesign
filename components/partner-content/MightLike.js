import { trimUrl } from "@/utils/helper";
import Link from "next/link";

export default function YouMightLike({ stories }) {
   return (
      <div className="pl-[20px]">
         <h2 className="text-heading text-3xl font-bold leading-[55px] mb-[45px]">
            You might also like
         </h2>
         <div className="">
            {stories?.slice(0, 4)?.map((story, index) => (
               <div
                  key={index}
                  className={`text-heading text-xl font-bold ${
                     index == 0
                        ? "pb-[16px]"
                        : index == 3
                        ? "pt-[16px]"
                        : "py-[16px]"
                  } leading-[30px] ${
                     index != 3 ? "border-b-[1px] border-lightgray" : ""
                  } `}
               >
                  <Link href={trimUrl(story?.post_url)}>
                     <div className="cursor-pointer flex gap-[20px]">
                        <p>{index + 1}</p>
                        <h3
                           dangerouslySetInnerHTML={{
                              __html: story?.post_title,
                           }}
                        />
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}
