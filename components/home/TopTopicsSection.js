import CategoryBadge from "../common/Content/CategoryBadge";
import { sections } from "@/constants";
import Link from "next/link";

export default function TopTopicsSection({}) {
   return (
      <div className="pl-[20px] flex justify-between flex-col">
         <div>
            <h2 className="text-heading font-bold text-3xl">Top 10 Topics</h2>
            {/* Badges for topics */}
            <div className="mt-[60px]">
               {sections.slice(0, 10).map((category, index) => (
                  <div className="inline-block mr-[10px] mb-[15px]" key={index}>
                     <CategoryBadge greyed category={category} />
                  </div>
               ))}
            </div>
         </div>
         {/* Subscribe to NL banner */}
         <div>
            <h3 className="text-heading font-bold text-2xl mb-[20px]">
               We don't spam and we simplify financial literacy!
            </h3>
            <Link
               href="/plans/"
               className="bg-blue text-white py-[11px] px-[15px] rounded-md font-semibold"
            >
               Subscribe Now
            </Link>
         </div>
      </div>
   );
}
