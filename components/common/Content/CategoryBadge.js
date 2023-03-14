import Link from "next/link";

export default function CategoryBadge({ category, greyed = false, logo }) {
   return greyed ? (
      <div
         className="uppercase text-sm text-darkgray px-[5px] py-[3px] rounded-md w-fit bg-graybadgebg cursor-pointer"
         dangerouslySetInnerHTML={{ __html: category?.title }}
      ></div>
   ) : (
      <Link
         href={category?.uri || ""}
         className="uppercase cursor-pointer text-sm text-blue px-[5px] py-[3px] rounded-md w-fit bg-bluebadgebg flex items-center gap-[5px] hover:bg-[#bddbf9] max-sm:text-xs"
      >
         {logo ? (
            <span>
               <img src={logo} height={12} width={42} alt="" className="object-contain max-h-[12px]" />
            </span>
         ) : null}
         <span dangerouslySetInnerHTML={{ __html: category?.name }}></span>
      </Link>
   );
}
