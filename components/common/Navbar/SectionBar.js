import { useState } from "react";
import { regions, sections } from "@/constants";
import { createHeader } from "@/utils/network";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useCompactTheme, useSession } from "@/utils/context";
import CustomIcon from "@/utils/icon-mapping";
import { Select } from "@mantine/core";
import { useRouter } from "next/router";
import { getUserSession } from "@/utils/user";

export default function SectionBar({ }) {
   const swiperRef = useRef(null);
   const [session, setSession] = useSession();
   const [refresh, setRefresh] = useState(0);

   async function fetchUserSessionAgain() {
      const res = await getUserSession();
      setSession(res);
   }

   useEffect(() => {
      fetchUserSessionAgain();
   }, []);

   return (
      <>
         <div className="px-[120px] max-lg:hidden py-[20px] bg-[#35a7e90d] flex items-center text-darkgray">
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
               {sections.map((section, index) => (
                  <SwiperSlide style={{ width: "fit-content", paddingRight: "40px" }} key={index}>
                     <SectionButton
                        key={section.title}
                        imgSrc={section.icon}
                        name={section.title}
                        link={section.link}
                        slug={section.slug}
                        isFavourite={session?.userFavourites?.includes(section.slug)}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
            {/* Right Arrow to scroll the buttons */}
            <div className="w-[120px] h-[52px] flex items-center justify-start">
               <button className="ml-[25px] z-10" onClick={() => swiperRef.current?.slideNext()}>
                  <CustomIcon name={"swipeController"} color={"fff"} className="rotate-180" />
               </button>
            </div>
         </div>
         <div className="lg:hidden pl-[10px] py-[10px] bg-[#35a7e90d] flex items-center text-darkgray">
            <Swiper
               className="mySwiper"
               modules={[Navigation]}
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
               draggable={false}
               slidesPerView={"auto"}
            >
                <SwiperSlide style={{ width: "fit-content", paddingRight: "10px" }} key={1}>
                  <ThemeSwitchButton />
               </SwiperSlide>
               <SwiperSlide style={{ width: "fit-content", paddingRight: "10px" }} key={2}>
                  <RegionSelector />
               </SwiperSlide>
               {sections.map((section, index) => (
                  <SwiperSlide style={{ width: "fit-content", paddingRight: "10px" }} key={index+2}>
                     <SectionButton
                        key={section.title}
                        imgSrc={section.icon}
                        name={section.title}
                        link={section.link}
                        slug={section.slug}
                        isFavourite={session?.userFavourites?.includes(section.slug)}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </>

   );
}

function RegionSelector({ }) {
   const router = useRouter();
   return (
      <div className="cursor-pointer flex flex-col max-lg:mr-[20px] mr-[40px] ml-[20px]">
         <CustomIcon name={"location"} color={"#B3B3B3"} className="mx-auto w-full flex justify-center" />
         <Select
            placeholder="Select Region"
            data={regions}
            value={regions[0]}
            styles={{
               item: {
                  fontSize: "12px",
               },
            }}
            onChange={(value) => router.push(`/countries/${value}`)}
            className="region-selector ml-[8px]"
            rightSection={<CustomIcon name={"dropdown"} dontReplaceColor className="top-[3px] relative" />}
         />
      </div>
   );
}

function SectionButton({ imgSrc, name, link, slug, isFavourite = false }) {
   const router = useRouter();
   async function handleCategoryClick(link) {
      router.push(link);
   }

   return (
      <div
         className="cursor-pointer h-full flex items-center justify-center flex-col"
         onClick={() => handleCategoryClick(link)}
      >
         <CustomIcon name={imgSrc} alt={name} className="h-[16px]" color={isFavourite ? "#35a7df" : "#B3B3B3"} />
         <span className={`mr-[8px] mt-[12px] whitespace-nowrap ${isFavourite ? "text-blue" : ""}`}>{name}</span>
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
                  checked={!compactTheme}
                  onChange={() => setCompactTheme(!compactTheme)}
               />
               <div className="w-[30px] h-[16px] bg-gray rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:rounded-full after:h-[12px] after:w-[12px] after:transition-all peer-checked:bg-blue"></div>
            </label>
         </div>
         <p className="w-full whitespace-nowrap">Easy Reading</p>
      </div>
   );
}
