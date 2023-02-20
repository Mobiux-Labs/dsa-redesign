import CustomIcon from "@/utils/icon-mapping";

export default function DropdownArrowIcon({ className }) {
   return (
      <CustomIcon
         color={"#B3B3B3"}
         name="lineArrowDown"
         className={`${className} ml-[18px]`}
         dontReplaceColor
      />
   );
}
