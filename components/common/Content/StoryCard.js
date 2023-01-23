import { getTimeAgo } from "@/utils/helper";
import Image from "next/image";
import CategoryBadge from "./CategoryBadge";

export default function StoryCard({
   story,
   withImage = false,
   withExcerpt = true,
   imageSize = "md",
   partnerLogo,
}) {
   const authors = story?.authors;
   const timeToRead = story?.time_to_read;
   /*
    Image size
    full: 177px height, 270px width
    md: 130px height, 213px width
    sm: 90px height, 147px width
  */
   const heightSizes = {
      full: 177,
      md: 130,
      sm: 90,
   };
   const widthSizes = {
      full: 270,
      md: 213,
      sm: 147,
   };

   return (
      <div className="content flex flex-col justify-between h-fit">
         {/* Image */}
         {withImage ? (
            <div className="mb-[15px]">
               <Image
                  src={story?.image_url}
                  alt={story?.post_title}
                  height={heightSizes[imageSize]}
                  width={widthSizes[imageSize]}
                  className="rounded-md"
               />
            </div>
         ) : null}
         <div>
            <CategoryBadge logo={partnerLogo} category={story?.category} />
            <h2 className="text-heading font-bold text-2xl my-[5px]">
               {story?.post_title}
            </h2>
            {withExcerpt ? (
               <p className="font-serif text-lg text-content">
                  {story?.post_excerpt}
               </p>
            ) : null}
         </div>
         {/* Bottom info Author, time ago and minutes read */}
         <div className="text-sm text-smalltext mt-[5px]">
            <p>
               <span className="text-capitalize">
                  {authors[0]?.data?.display_name}
               </span>{" "}
               | <span>{getTimeAgo(story?.post_date)}</span> |{" "}
               <span>
                  {timeToRead} {timeToRead == 1 ? "min" : "mins"} read
               </span>
            </p>
         </div>
      </div>
   );
}
