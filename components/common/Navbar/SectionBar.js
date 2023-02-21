import { useState } from "react";
import { Icon, regions, sections } from "@/constants";
import { createHeader } from "@/utils/network";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/navigation";
import { useCompactTheme, useSession } from "@/utils/context";
import { fetcher } from "@/utils/helper";
import CustomIcon from "@/utils/icon-mapping";
import { Select } from "@mantine/core";

export default function SectionBar({}) {
   const swiperRef = useRef(null);
   const [session] = useSession();
   const [refresh, setRefresh] = useState(0);
   const { data, error } = useSWR(`/subs/?refresh=${refresh}`, fetcher);
   return (
      <div className="px-[120px] py-[20px] bg-[#35a7e90d] flex items-center text-darkgray">
         <ThemeSwitchButton />
         {/* Divider */}
         <div className="bg-lightgray h-[38px] w-[1px] ml-[25px]"></div>
         {/* Region selector */}
         <RegionSelector />
         {/* Scrollable sections buttons */}
         <Swiper
            className="mySwiper"
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
            draggable={false}
            slidesPerView={"auto"}
         >
            {sections.map((section) => (
               <SwiperSlide
                  style={{ width: "fit-content", paddingRight: "40px" }}
                  key={section.title}
               >
                  <SectionButton
                     key={section.title}
                     imgSrc={section.icon}
                     name={section.title}
                     link={section.link}
                     slug={section.slug}
                     setRefresh={setRefresh}
                     refresh={refresh}
                     isFavourite={data?.user_favourites?.includes(section.slug)}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
         {/* Right Arrow to scroll the buttons */}
         <button
            className="absolute right-[120px] z-10"
            onClick={() => swiperRef.current?.slideNext()}
         >
            <img src="icons/right-arrow.svg" alt="" />
         </button>
      </div>
   );
}

function RegionSelector({}) {
   return (
      <div className="cursor-pointer flex flex-col mr-[45px] ml-[20px]">
         <CustomIcon
            name={"location"}
            color={"#B3B3B3"}
            className="mx-auto w-full flex justify-center"
         />
         <Select
            placeholder="Select Region"
            data={regions}
            styles={{
               item: {
                  fontSize: "12px",
               },
            }}
            className="region-selector ml-[8px]"
            rightSection={
               <CustomIcon
                  name={"dropdown"}
                  dontReplaceColor
                  className="top-[3px] relative"
               />
            }
         />
      </div>
   );
}

function SectionButton({
   imgSrc,
   name,
   link,
   slug,
   isFavourite = false,
   setRefresh,
   refresh,
}) {
   async function handleCategoryClick() {
      const res = await fetch(`/api/subs/favourite/`, {
         method: "POST",
         headers: createHeader(),
         body: JSON.stringify({
            category_slug: slug,
            category_title: name,
            category_url: link,
            email: "roshin@mobiux.in",
         }),
      });
      if (res.status === 200) {
         setRefresh(refresh + 1);
         const data = await res.json();
      }
   }

   return (
      <div
         className="cursor-pointer h-full flex items-center justify-center flex-col"
         onClick={() => handleCategoryClick()}
      >
         <CustomIcon
            name={imgSrc}
            alt={name}
            className="h-[16px]"
            color={"#B3B3B3"}
         />
         <span
            className={`mr-[8px] mt-[12px] whitespace-nowrap ${
               isFavourite ? "text-blue" : ""
            }`}
         >
            {name}
         </span>
      </div>
   );
}

function ThemeSwitchButton() {
   const [compactTheme, setCompactTheme] = useCompactTheme();
   return (
      <div className="theme-switch-btn flex items-center flex-col">
         <div>
            <label className="relative inline-flex items-center cursor-pointer">
               <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={compactTheme}
                  onChange={() => setCompactTheme(!compactTheme)}
               />
               <div className="w-[30px] h-[16px] bg-gray rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:rounded-full after:h-[12px] after:w-[12px] after:transition-all peer-checked:bg-blue"></div>
            </label>
         </div>
         <p className="w-full whitespace-nowrap">
            {compactTheme ? "Compact" : "Easy reading"}
         </p>
      </div>
   );
}
