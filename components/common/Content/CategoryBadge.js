export default function CategoryBadge({ category, greyed = false, logo }) {
   return greyed ? (
      <div className="uppercase text-sm text-darkgray px-[5px] py-[3px] rounded-md w-fit bg-graybadgebg">
         {category.title}
      </div>
   ) : (
      <div className="uppercase text-sm text-blue px-[5px] py-[3px] rounded-md w-fit bg-bluebadgebg flex items-center gap-[5px]">
         {logo ? (
            <span>
               <img
                  src={logo}
                  height={12}
                  width={42}
                  alt=""
                  className="object-contain"
               />
            </span>
         ) : null}
         {category.name}
      </div>
   );
}
