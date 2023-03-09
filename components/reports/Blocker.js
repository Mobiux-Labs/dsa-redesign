import Link from "next/link";
import { useModal, useSession } from "@/utils/context";
import { checkoutReportPurchase } from "@/utils/checkout";
import { createCheckoutSessionForReportPurchase } from "@/utils/api-calls";

export default function ReportBlocker({ report }) {
   const [modal, setModal] = useModal();
   const [session] = useSession();

   const handleBuyButtonClick = () => {
      if (session?.loggedIn) createCheckoutSessionForReportPurchase(report);
      else setModal("login");
   };

   return (
      <div
         className="text-center pt-[260px] pb-[33px] bg-blue relative top-[-110px] flex flex-col items-center justify-end
      "
         style={{
            background:
               "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 16.15%, #FFFFFF 45.31%, #FFFFFF 100%)",
         }}
      >
         <h3 className="text-darkblue text-3xl font-bold leading-[55px] mb-[15px]">
            Continue reading this report with a DSA Professional subscription
         </h3>
         <div className="flex items-center gap-[20px] mb-[10px]">
            <Link href="/plans/" className="bg-blue text-white font-outfit px-[15px] py-[10px] rounded-sm">
               Subscribe
            </Link>
            <button
               className="bg-white text-blue px-[15px] py-[10px] rounded-sm font-outfit border-[2px] border-blue"
               onClick={() => handleBuyButtonClick()}
            >
               Buy this report for $150 only
            </button>
         </div>
         {!session?.loggedIn && (
            <p className="mt-[10px] font-serif text-content">
               Already a subscriber?{" "}
               <span className="text-blue cursor-pointer" onClick={() => setModal("login")}>
                  Login
               </span>
            </p>
         )}
         <p className="font-serif mt-[5px] text-base text-content">
            Contact us for corporate subscriptions at{" "}
            <a href="mailto:subs@dealstreetasia.com" className="text-blue underline">
               subs@dealstreetasia.com
            </a>
         </p>
      </div>
   );
}
