import Image from "next/image";
import { trimUrl, loader } from "@/utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef } from "react";
import { aboutUsFeatures, careerFeatures } from "@/constants";
import FeatureCard from "../about-us/FeatureCard";
import CustomIcon from "@/utils/icon-mapping";
import CareerFeatureCard from "./CareerFeatureCard";

export default function CareerCarousel() {
   const swiperRef = useRef(null);
   return (
      <div className="bg-white relative h-[400px] mb-[400px]">
         <h2 className="text-heading text-4xl font-bold text-left ml-[120px]">
            Empowering and Dynamic Team Culture
         </h2>
         <Swiper
            className="mySwiper"
            modules={[Navigation]}
            style={{ paddingLeft: "120px", position: "relative", top: "100px" }}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
            draggable={false}
            slidesPerView={"auto"}
         >
            {careerFeatures.map((feature, index) => (
               <SwiperSlide key={index} style={{ width: "fit-content" }}>
                  <CareerFeatureCard
                     feature={feature}
                     shiftDown={index % 2 != 0}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="flex gap-[12px] absolute right-[120px] top-[0px]">
            <button onClick={() => swiperRef.current?.slidePrev()}>
               <CustomIcon name={"swipeController"} color={"#1C70B6"} />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
               <CustomIcon
                  name={"swipeController"}
                  color={"#1C70B6"}
                  className="transform rotate-180"
               />
            </button>
         </div>
      </div>
   );
}
