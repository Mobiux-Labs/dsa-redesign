import { getTimeAgo, loader, trimUrl } from "@/utils/helper";
import Image from "next/image";
import CategoryBadge from "./CategoryBadge";
import Link from "next/link";

export default function StoryCard({
   story,
   withImage = false,
   withExcerpt = true,
   imageSize = "md",
   partnerLogo,
   whiteText = false,
   contentStyles = {},
   imagePosition = "top",
   customImageHeight,
   customImageWidth,
   customClass = "",
   withCategory = true,
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

   const imageHeight = customImageHeight ? customImageHeight : heightSizes[imageSize];
   const imageWidth = customImageWidth ? customImageWidth : widthSizes[imageSize];

   function getExcerpt(excerpt) {
      if (excerpt?.length > 150) {
         return excerpt?.substring(0, 150) + "...";
      }
      return excerpt;
   }

   return (
      <div
         className={`content flex h-fit items-stretch w-full ${
            imagePosition == "right"
               ? "flex-row-reverse"
               : imagePosition == "left"
               ? "flex-row justify-start"
               : "flex-col justify-between"
         } ${customClass}`}
      >
         {/* Image */}
         {withImage ? (
            <Link
               href={trimUrl(story?.post_url)}
               className={` ${imagePosition == "right" ? "ml-[60px]" : imagePosition == "left" ? "mr-[20px]" : ""}`}
            >
               <div className={`${imagePosition == "right" ? "mb-[15px]" : ""} max-w-full`}>
                  <Image
                     src={story?.image_url}
                     alt={story?.post_title}
                     height={imageHeight}
                     width={imageWidth}
                     className={`rounded-md object-center object-cover ${imagePosition == "right" ? "max-w-fit" : ""}`}
                     style={{
                        height: imageHeight,
                        width: imageWidth,
                        minWidth: imageWidth,
                     }}
                     loader={loader}
                  />
               </div>
            </Link>
         ) : null}
         <div style={contentStyles} className={`${imagePosition == "top" && withImage ? "mt-[10px]" : ""}`}>
            {withCategory ? <CategoryBadge logo={partnerLogo} category={story?.category} /> : null}
            <Link href={trimUrl(story?.post_url)}>
               <h2
                  className={`${
                     whiteText ? "text-white" : "text-heading"
                  } font-bold text-2xl my-[5px] w-full leading-[35px]`}
                  dangerouslySetInnerHTML={{ __html: story?.post_title }}
               ></h2>
               {withExcerpt ? (
                  <p
                     className={`${
                        whiteText ? "text-white" : "text-content"
                     } font-serif text-lg text-content leading-[28px]`}
                     dangerouslySetInnerHTML={{
                        __html: getExcerpt(story?.post_excerpt),
                     }}
                  ></p>
               ) : null}
            </Link>

            {/* Bottom info Author, time ago and minutes read */}
            <div className={`${whiteText ? "text-white" : "text-smalltext"} text-sm mt-[5px] leading-[15px]`}>
               <p>
                  <Link href={authors[0]?.data?.url ? authors[0]?.data?.url : ""}>
                     <span className="text-capitalize hover:text-black">{authors[0]?.data?.display_name}</span>
                  </Link>{" "}
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
