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
import CustomIcon from "@/utils/icon-mapping";

export default function HorizontalSection({
   stories,
   title,
   imageOnEveryStory = false,
   background = true,
}) {
   const swiperRef = useRef(null);
   const [compactTheme] = useCompactTheme();
   useEffect(() => {}, []);
   return (
      <div
         className={`${background ? "bg-blue" : "bg-white"} relative ${
            compactTheme ? "pt-60 pb-80" : "pt-[88px] pb-[116px]"
         }`}
      >
         <h2
            className={`px-[120px] mb-[45px] text-3xl font-bold ${
               background ? "text-white" : "text-heading"
            } capitalize`}
         >
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
                           whiteText={background ? true : false}
                        />
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         {/* Controller */}
         <div className="flex gap-[12px] absolute right-[120px] top-[100px]">
            <button onClick={() => swiperRef.current?.slidePrev()}>
               <CustomIcon
                  name={"swipeController"}
                  color={background ? "#fff" : "#35A7DF"}
               />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
               <CustomIcon
                  name={"swipeController"}
                  color={background ? "#fff" : "#35A7DF"}
                  className="transform rotate-180"
               />
            </button>
         </div>
      </div>
   );
}
