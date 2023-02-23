import { formatPrice } from "@/utils/helper";
import { Radio, TextInput } from "@mantine/core";
import Link from "next/link";

export default function BulkSubscription({ data }) {
   console.table(data);
   return (
      <div className="mt-[60px]">
         <h2 className="text-center text-heading font-bold text-3xl leading-[55px] mb-[30px]">
            Bulk Subscription
         </h2>
         {/* pricing data card */}
         <div className="shadow-plancard p-[30px] pb-[39px]">
            <p className="text-heading font-semibold text-base">Select type</p>
            <div className="flex justify-between items-center">
               <div className="flex mt-[17px] gap-[80px]">
                  {Object.keys(data).map((key) => (
                     <Selector plan={data[key]} />
                  ))}
               </div>
               <LicenceInput />
            </div>
         </div>
      </div>
   );
}

function Selector({ plan }) {
   return (
      <div className="flex gap-[15px]">
         <Radio
            className="mt-[14px] bulk-radio"
            styles={{
               icon: { opacity: 0, display: "none" },
            }}
         />
         <div>
            <p className="text-darkblue font-bold text-3xl leading-[55px]">
               {formatPrice(plan?.price)}{" "}
               <span className="text-sm font-normal text-heading">
                  {" "}
                  / Licence
               </span>
            </p>
            <p className="text-heading font-semibold text-sm uppercase mt-[7px]">
               {plan.users} Users
            </p>
         </div>
      </div>
   );
}

function LicenceInput() {
   return (
      <div>
         <p className="text-heading font-semibold text-base mb-[20px]">
            Number of Licenses
         </p>
         <div className="flex items-center gap-[55px]">
            <TextInput
               placeholder="Enter number of licenses"
               className="licence-input"
               type={"number"}
            />
            <Link
               href=""
               className="text-white text-base font-semibold py-[11px] px-[30px] bg-blue rounded-md"
            >
               Get it
            </Link>
         </div>
      </div>
   );
}
