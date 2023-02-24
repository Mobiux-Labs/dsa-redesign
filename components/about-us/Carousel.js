import Image from "next/image";
import { trimUrl, loader } from "@/utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef } from "react";
import { aboutUsFeatures } from "@/constants";
import FeatureCard from "./FeatureCard";
import CustomIcon from "@/utils/icon-mapping";

export default function AboutUsFeaturesCarousel() {
   const swiperRef = useRef(null);
   return (
      <div className="bg-darkblue relative pt-[60px] mt-[100px] h-[400px] mb-[400px]">
         <h2 className="text-white text-4xl font-bold text-left ml-[120px]">
            What sets us apart
         </h2>
         <Image
            src={trimUrl(
               "https://dealstreetwebsite.s3.ap-southeast-1.amazonaws.com/uploads/Website/about-us-page-img-2.png"
            )}
            width={600}
            height={400}
            loader={loader}
            className="absolute top-0 right-0"
         />
         <Swiper
            className="mySwiper"
            modules={[Navigation]}
            style={{ paddingLeft: "120px", position: "relative", top: "130px" }}
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
            draggable={false}
            slidesPerView={"auto"}
         >
            {aboutUsFeatures.map((feature, index) => (
               <SwiperSlide key={index} style={{ width: "fit-content" }}>
                  <FeatureCard
                     title={feature.title}
                     description={feature.description}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="flex gap-[12px] absolute left-[120px] top-[150px]">
            <button onClick={() => swiperRef.current?.slidePrev()}>
               <CustomIcon name={"swipeController"} color={"#fff"} />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
               <CustomIcon
                  name={"swipeController"}
                  color={"#fff"}
                  className="transform rotate-180"
               />
            </button>
         </div>
      </div>
   );
}
