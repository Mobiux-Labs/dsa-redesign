import { formatPrice } from "@/utils/helper";
import Link from "next/link";
import { proPlanDetails, basicPlanDetails } from "@/constants";
import CustomIcon from "@/utils/icon-mapping";

export default function PlanCard({ plan, basic }) {
   let btnColor = basic ? "bg-blue" : "bg-[#9754CB]";
   let planDetails = basic ? basicPlanDetails : proPlanDetails;
   return (
      <div className="shadow-plancard rounded-md overflow-hidden">
         {/* top section */}
         <div className="px-[30px] flex justify-between bg-bluebadgebg pt-[24px] pb-[19px]">
            <div>
               <p className="text-heading font-semibold text-sm uppercase">
                  {basic ? "Basic" : "Professional"}
               </p>
               <p className="text-darkblue font-bold text-3xl leading-[55px] mt-[7px]">
                  {formatPrice(plan?.price)}
               </p>
            </div>
            <Link
               href=""
               className={`p-[15px] text-white ${btnColor} text-base h-fit rounded-md font-semibold mt-[17px]`}
            >
               Subscribe
            </Link>
         </div>
         {/* bottom section */}
         <div className="px-[30px] py-[20px] font-serif">
            <ul>
               {planDetails.map((detail, index) => (
                  <li
                     key={index}
                     className="flex items-center mb-[20px] plan-details text-lg text-content"
                  >
                     <CustomIcon
                        name={"checkMark"}
                        dontReplaceColor
                        className="mr-[10px]"
                     />{" "}
                     <span dangerouslySetInnerHTML={{ __html: detail }}></span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
