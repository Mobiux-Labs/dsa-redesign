import { loader } from "@/utils/helper";
import CustomIcon from "@/utils/icon-mapping";
import Image from "next/image";
import { useState } from "react";

export default function MemberCard({ member }) {
   console.log(member);
   const [isAnimating, setIsAnimating] = useState(false);

   return (
      <div className="flex flex-col items-start relative z-[100] bg-white">
         <div
            className="text-left bg-white cursor-pointer"
            onMouseEnter={() => setIsAnimating(true)}
         >
            <Image
               src={member.image_url}
               height={380}
               width={380}
               loader={loader}
               className="rounded-sm mb-[20px]"
            />
            <h3 className="text-heading text-2xl font-bold leading-[35px]">
               {member.name}
            </h3>
            <p className="text-content text-base leading-[17px] mt-[5px]">
               {member.role}
            </p>
         </div>
         {/* back side */}
         <div
            className={`absolute inset-0 bg-blue h-full w-full px-[30px] py-[20px] text-left rounded-sm`}
            style={{
               zIndex: isAnimating ? 100 : -1,
            }}
            onMouseLeave={() => setIsAnimating(false)}
         >
            <h3 className="text-white text-2xl font-bold leading-[35px]">
               {member.name}
            </h3>
            <p className="text-white text-base leading-[17px] mt-[5px]">
               {member.role}
            </p>
            <div className="flex icons mt-[30px] gap-[15px]">
               <a href={member.linkedin_url}>
                  <CustomIcon
                     name={"linkedin"}
                     color="#fff"
                     className="cursor-pointer"
                  />
               </a>
               <a href={member.twitter_url}>
                  <CustomIcon
                     name={"twitter"}
                     color="#fff"
                     className="cursor-pointer"
                  />
               </a>
               <a href={`mailto:${member.email}`}>
                  <CustomIcon
                     name={"emailOutline"}
                     color="#fff"
                     className="cursor-pointer"
                  />
               </a>
            </div>
            <p className="mt-[25px] text-white font-serif text-lg leading-[28px]">
               {member.bio}
            </p>
         </div>
      </div>
   );
}
