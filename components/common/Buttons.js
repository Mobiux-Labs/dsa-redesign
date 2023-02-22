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
