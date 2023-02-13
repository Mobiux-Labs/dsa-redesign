import { getTimeAgo } from "@/utils/helper";
import Link from "next/link";

export default function AuthorInfo({ story }) {
   return (
      <div className="text-smalltext text-sm mt-[5px] bg-white">
         <p>
            <Link href={story?.authors[0]?.data?.url}>
               <span className="text-capitalize hover:text-black">
                  {story?.authors[0]?.data?.display_name}
               </span>
            </Link>{" "}
            | <span>{getTimeAgo(story?.post_date)}</span> |{" "}
            <span>
               {story?.time_to_read} {story?.time_to_read == 1 ? "min" : "mins"}{" "}
               read
            </span>
         </p>
      </div>
   );
}
