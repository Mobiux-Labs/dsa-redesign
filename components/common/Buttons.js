export const SeeMoreButton = ({ href }) => {
   return (
      <a
         href={href}
         className="text-blue font-medium flex items-center gap-[10px] text-base"
      >
         See More
         <span>
            <img src="icons/arrow.svg" alt="" />
         </span>
      </a>
   );
};
