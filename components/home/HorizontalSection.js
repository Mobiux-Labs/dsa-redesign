import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import StoryCard from "../common/Content/StoryCard";
import Image from "next/image";
import { useCompactTheme } from "@/utils/context";

export default function HorizontalSection({
   stories,
   title,
   imageOnEveryStory = false,
}) {
   const swiperRef = useRef(null);
   const [compactTheme] = useCompactTheme();
   useEffect(() => {}, []);
   return (
      <div
         className={`bg-blue relative ${
            compactTheme ? "pt-60 pb-80" : "pt-[88px] pb-[116px]"
         }`}
      >
         <h2 className=" px-[120px] mb-[45px] text-3xl font-bold text-white capitalize">
            {title}{" "}
         </h2>
         {/* Stories track */}
         <Swiper
            className="mySwiper"
            modules={[Navigation]}
            style={{ paddingLeft: "120px" }}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
            draggable={false}
            slidesPerView={"auto"}
         >
            {stories?.map((story, index) => (
               <SwiperSlide key={index} style={{ width: "fit-content" }}>
                  <div className="flex mr-[60px]">
                     {imageOnEveryStory || index === 0 ? (
                        <div className="mr-[20px]">
                           <img
                              src={story?.image_url}
                              alt=""
                              className="rounded-md h-[116px] w-[180px] max-w-fit object-cover"
                           />
                        </div>
                     ) : null}
                     <div className="w-[350px]">
                        <StoryCard
                           contentStyles={{
                              width: "350px",
                           }}
                           story={story}
                           withExcerpt={false}
                           whiteText
                        />
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         {/* Controller */}
         <div className="flex gap-[12px] absolute right-[120px] top-[100px]">
            <button onClick={() => swiperRef.current?.slidePrev()}>
               <img src="/icons/swipe-controller.svg" alt="Prev" />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
               <img
                  src="/icons/swipe-controller.svg"
                  className="transform rotate-180"
                  alt="Prev"
               />
            </button>
         </div>
      </div>
   );
}
