import CustomIcon from "@/utils/icon-mapping";
import Link from "next/link";

export const SeeMoreButton = ({ href = "" }) => {
   return (
      <Link
         href={href}
         className="text-blue font-medium flex items-center gap-[10px] text-base cursor-pointer see-more-btn w-fit"
      >
         See More
         <span className="transition duration-300">
            <CustomIcon name="arrow" dontReplaceColor />
         </span>
      </Link>
   );
};

export const FollowButton = ({ className = "", onClick, isFollowing, isFollowLoading }) => {
   let buttonText = isFollowing ? "Following" : "Follow +";
   return (
      <div>
         <button
            className={`cursor-pointer follow-btn  px-[8px] py-[5px] font-semibold text-base text-blue border-[2px] border-blue rounded-md leading-[17px] ${className} ${
               isFollowing ? `bg-blue text-white border-blue flex items-center gap-[10px]` : ""
            }} ${isFollowLoading ? "opacity-50 pointer-events-none cursor-pointer" : ""}}`}
            onClick={onClick}
            disabled={isFollowLoading}
         >
            {buttonText}
            {isFollowing ? <CustomIcon name={"checkMark"} color={"#fff"} className="ml-[10px]" /> : ""}
         </button>
      </div>
   );
};

export const EditArticleButton = ({ articleId }) => {
   return (
      <Link href={`/wp-admin/post.php?post=${articleId}&action=edit`}>
         <div className="cursor-pointer fixed bottom-[20px] right-[20px] bg-content z-[10000] text-white px-[10px] py-[5px] rounded-sm text-base font-medium font-outfit ">
            <CustomIcon name="edit" dontReplaceColor />
            <span>Edit Article</span>
         </div>
      </Link>
   );
};
