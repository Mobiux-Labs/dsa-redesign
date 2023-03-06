import useSWR from "swr";
import { fetcher, handleAdvertLoad, recordAdImpressionOnGTM } from "@/utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import MultipleObserver from "@/utils/observer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { carouselInterval } from "@/constants";
import { Skeleton } from "@mantine/core";
import { useRef, useState, useEffect } from "react";
import { useSession } from "@/utils/context";
import { useRouter } from "next/router";
import { getActiveCarouselBanners } from "@/utils/api-calls";

export default function CarouselBanner({ banner }) {
   const customPagination = {
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '"></span>';
      },
   };
   const swiperRef = useRef(null);
   const [session] = useSession();
   const router = useRouter();
   const [data, setData] = useState([]);

   const fetchData = async () => {
      const res = await getActiveCarouselBanners();
      if (!res) return;
      setData(res);
   };

   useEffect(() => {
      fetchData();
   }, []);

   const onLoad = (advert) => {
      if (!advert.track_impressions || advert.type != "advert") return;
      recordAdImpressionOnGTM(advert, "carousel");
   };

   const onClick = (advert) => {
      if (!advert.track_impressions || advert.type != "advert") return;
      recordAdImpressionOnGTM(advert, "carousel", "click");
   };
   return data?.length > 0 ? (
      <div className="my-[100px] main-carousel">
         <Swiper
            pagination={customPagination}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: carouselInterval, disableOnInteraction: false }}
            onSlideChange={(swiper) => {
               swiperRef.current = swiper;
               let currentAd = data[swiper.activeIndex];
               onLoad(currentAd);
            }}
         >
            {data.map((item, index) => (
               <SwiperSlide key={index}>
                  <div className={`h-[400px] bg-cover bg-no-repeat bg-center rounded-md p-[30px] relative`}>
                     <div className="relative z-10">
                        {item?.type != "advert" && (
                           <p className="uppercase text-white text-sm font-medium leading-[15px] tracking-[4px]">
                              {item?.type}
                           </p>
                        )}
                        {item?.title && (
                           <p className="text-white font-bold text-3xl mt-[15px] mb-[5px] leading-[55px]">
                              {item?.title}
                           </p>
                        )}
                        {item?.description && (
                           <p className="text-white text-lg font-light leading-[20px]">{item?.description}</p>
                        )}
                        {item?.button_text && (
                           <a
                              href={item?.button_url}
                              onClick={() => onClick(item)}
                              className="text-white mt-[30px] rounded-md bg-blue px-[15px] py-[11px] block w-fit font-semibold text-base leading-[17px]"
                           >
                              {item?.button_text}
                           </a>
                        )}
                     </div>
                     {item?.show_overlay && <GradientOverlay />}
                     {item.media_type == "video" && <VideoComponent url={item?.image_url} />}
                     <ImageComponent url={item?.image_url} />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   ) : (
      <CarouselSkeleton />
   );
}

function GradientOverlay() {
   return (
      <div
         className="z-[8] absolute h-full w-full inset-0 rounded-md"
         style={{
            background: "linear-gradient(360deg, rgba(0, 0, 0, 0.3) 38.62%, rgba(0, 0, 0, 0.6) 100%)",
         }}
      ></div>
   );
}

function VideoComponent({ url }) {
   return (
      <div className="z-[5] absolute h-full w-full inset-0 rounded-md">
         <video className="h-full w-full bg-center object-cover rounded-md" src={url} autoPlay muted loop></video>
      </div>
   );
}

function ImageComponent({ url }) {
   return (
      <div className="z-[5] absolute h-full w-full inset-0 rounded-md">
         <img className="h-[400px] w-full bg-center object-cover rounded-md" src={url} />
      </div>
   );
}

function CarouselSkeleton() {
   return (
      <MultipleObserver>
         <div className="h-[400px] w-full bg-gray rounded-md my-[100px] p-[30px]">
            <Skeleton height={26} radius={5} mb={5} width={70} />
            <Skeleton height={60} width={"50%"} radius={5} mb={5} mt={15} />
            <Skeleton height={20} radius={5} width={"30%"} mt={10} />
            <Skeleton height={35} radius={5} width={"10%"} mt={30} />
         </div>
      </MultipleObserver>
   );
}
