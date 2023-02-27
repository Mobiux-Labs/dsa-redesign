import { Tabs } from "@mantine/core";
import { useState } from "react";
import { tabStyle } from "../pricing/PricingTable";
import { team } from "@/constants";
import Image from "next/image";
import { loader } from "@/utils/helper";
import CustomIcon from "@/utils/icon-mapping";
import MemberCard from "./MemeberCard";

export default function TeamTab({ data }) {
   let teams = data.teams;
   let memebers = data.team_members;
   console.log(memebers);
   const [activeTab, setActiveTab] = useState(teams[0]);
   return (
      <div className="w-[1200px] mt-[100px] mx-auto relative z-[10]">
         <Tabs value={activeTab} onTabChange={setActiveTab} styles={tabStyle}>
            <Tabs.List className="border-0">
               {teams.map((team, index) => (
                  <Tabs.Tab value={team} key={index}>
                     {team}
                  </Tabs.Tab>
               ))}
            </Tabs.List>
            <div className="mt-[50px]">
               {teams.map((team, index) => (
                  <Tabs.Panel value={team} key={index}>
                     <div className="grid grid-cols-3 gap-x-[30px] gap-y-[60px]">
                        {memebers.map((member, index) =>
                           member.team.name === team ? (
                              <MemberCard member={member} key={index} />
                           ) : null
                        )}
                     </div>
                  </Tabs.Panel>
               ))}
            </div>
         </Tabs>
      </div>
   );
}
