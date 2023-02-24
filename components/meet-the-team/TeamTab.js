import { Tabs } from "@mantine/core";
import { useState } from "react";
import { tabStyle } from "../pricing/PricingTable";
import { team } from "@/constants";
import Image from "next/image";
import { loader } from "@/utils/helper";
import CustomIcon from "@/utils/icon-mapping";
import MemberCard from "./MemeberCard";

export default function TeamTab() {
   const [activeTab, setActiveTab] = useState("Editorial & Research");
   return (
      <div className="w-[1200px] mt-[100px] mx-auto relative z-[10]">
         <Tabs value={activeTab} onTabChange={setActiveTab} styles={tabStyle}>
            <Tabs.List className="border-0">
               <Tabs.Tab value="Editorial & Research">
                  Editorial & Research
               </Tabs.Tab>
               <Tabs.Tab value="Operations, Sales & Marketing">
                  Operations, Sales & Marketing
               </Tabs.Tab>
            </Tabs.List>
            <div className="mt-[50px]">
               <Tabs.Panel value="Editorial & Research">
                  <div className="grid grid-cols-3 gap-x-[30px] gap-y-[60px]">
                     {team.map((member, index) =>
                        member.dept === "Editorial & Research" ? (
                           <MemberCard member={member} key={index} />
                        ) : null
                     )}
                  </div>
               </Tabs.Panel>
               <Tabs.Panel value="Operations, Sales & Marketing">
                  <div className="grid grid-cols-3 gap-x-[30px] gap-y-[60px]">
                     {team.map((member, index) =>
                        member.dept === "Operations, Sales & Marketing" ? (
                           <MemberCard member={member} key={index} />
                        ) : null
                     )}
                  </div>
               </Tabs.Panel>
            </div>
         </Tabs>
      </div>
   );
}
