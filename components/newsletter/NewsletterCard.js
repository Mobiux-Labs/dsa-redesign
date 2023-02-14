import Link from "next/link";

export default function NewsletterCard({ newsletter, subscribed = false }) {
   let buttonText = subscribed ? "Subscribed" : "Subscribe";
   let subscribedBtnStyle = "bg-blue text-white";
   let unsubscribedBtnStyle = "bg-white text-blue border border-blue";
   return (
      <div
         style={{ boxShadow: " 0px 4px 30px rgba(184, 183, 183, 0.2)" }}
         className="bg-white p-[20px] rounded-md"
      >
         {/* Title and subscribe button */}
         <div className="flex justify-between items-end mb-[20px]">
            <h2 className="text-heading text-2xl leading-[35px] font-bold">
               {newsletter?.name}
            </h2>
            <button
               className={`px-[10px] py-[6px] font-medium rounded-sm ${
                  subscribed ? subscribedBtnStyle : unsubscribedBtnStyle
               }`}
            >
               {buttonText}
            </button>
         </div>
         {/* description */}
         <p className="text-lg text-content font-serif leading-[28px]">
            {newsletter?.description}
         </p>
         {/* view past newsletetrs */}
         <Link
            href={`/newsletters/${newsletter?.slug}`}
            className="text-blue font-semibold leading-[17px] mt-[20px] inline-block"
         >
            View Past Newsletters
         </Link>
      </div>
   );
}
