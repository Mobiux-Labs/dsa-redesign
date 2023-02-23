import { Tabs } from "@mantine/core";
import { useState } from "react";
import PlanCard from "./PlanCard";

export default function PricingTable({ data }) {
   const [activeTab, setActiveTab] = useState("1 year");
   let tabStyle = {
      tab: {
         fontFamily: "montserrat",
         color: "#C8C8C8",
         fontWeight: 600,
         lineHeight: "30px",
         borderWidth: "4px",
         marginRight: "50px",
         border: "none",
         "&[data-active]": {
            color: "#35a7df",
            borderBottom: "4px solid #35a7df",
         },
      },
   };

   return (
      <div className="mt-[30px]">
         <Tabs value={activeTab} onTabChange={setActiveTab} styles={tabStyle}>
            <Tabs.List className="border-0">
               {Object.keys(data).map((key) => (
                  <Tabs.Tab value={key} key={key}>
                     {key}
                  </Tabs.Tab>
               ))}
            </Tabs.List>
            <div className="mt-[50px]">
               {Object.keys(data).map((key) => (
                  <Tabs.Panel value={key} key={key}>
                     <div className="grid grid-cols-2 gap-[40px]">
                        <PlanCard plan={data[key]?.professional} />
                        <PlanCard plan={data[key]?.basic} basic />
                     </div>
                  </Tabs.Panel>
               ))}
            </div>
         </Tabs>
      </div>
   );
}
