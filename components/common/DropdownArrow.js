import CustomIcon from "@/utils/icon-mapping";

export default function DropdownArrowIcon({ className, color = "#B3B3B3" }) {
   console.log("color", color);
   return (
      <CustomIcon
         color={color}
         name="lineArrowDown"
         className={`${className} ml-[18px]`}
         dontReplaceColor
      />
   );
}
