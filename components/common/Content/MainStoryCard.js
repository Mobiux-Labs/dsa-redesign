import { useCompactTheme } from "@/utils/context";
import { getTimeAgo } from "@/utils/helper";
import Image from "next/image";
import { useRouter } from "next/router";
import CategoryBadge from "./CategoryBadge";

export default function MainStoryCard({ story }) {
   const authors = story?.authors;
   const timeToRead = story?.time_to_read;
   const [compactTheme] = useCompactTheme();
   const router = useRouter();
   const routerToStory = (story) => {
      router.push(`/stories/${story?.post_name}`);
   };
   return (
      <div className="col-span-2 grid grid-cols-3">
         <div className="image col-span-1 cursor-pointer">
            <Image
               src={story?.image_url}
               alt={story?.post_title}
               height={177}
               width={290}
               className="w-full rounded-md mr-[30px]"
            />
         </div>
         <div
            className={`content col-span-2 ${compactTheme ? "ml-20" : "ml-30"}`}
         >
            <div>
               <CategoryBadge category={story?.category} />
               <h2 className="text-heading font-bold text-2xl my-[5px] cursor-pointer">
                  {story?.post_title}
               </h2>
               <p className="font-serif text-lg text-content cursor-pointer">
                  {story?.post_excerpt}
               </p>
            </div>
            {/* Bottom info Author, time ago and minutes read */}
            <div className="text-sm text-smalltext mt-[5px]">
               <p>
                  <span className="text-capitalize cursor-pointer hover:text-black">
                     {authors[0]?.data?.display_name}
                  </span>{" "}
                  | <span>{getTimeAgo(story?.post_date)}</span> |{" "}
                  <span>
                     {timeToRead} {timeToRead == 1 ? "min" : "mins"} read
                  </span>
               </p>
            </div>
         </div>
      </div>
   );
}
