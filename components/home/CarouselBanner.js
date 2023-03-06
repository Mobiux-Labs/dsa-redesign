import useSWR from "swr";
import { fetcher } from "@/utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { carouselInterval } from "@/constants";

export default function CarouselBanner({ banner }) {
   const customPagination = {
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '"></span>';
      },
   };

   let url = "/api/content/website/carousel/";
   const { data, error } = useSWR(url, fetcher, { revalidateIfStale: false, revalidateOnFocus: false });
   if (error) return <div></div>;
   if (!data) return <div>Loading</div>;

   return (
      <div className="my-[100px] main-carousel">
         <Swiper
            pagination={customPagination}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: carouselInterval, disableOnInteraction: false }}
            loop={true}
         >
            {data.map((item, index) => (
               <SwiperSlide key={index}>
                  <div
                     style={{ backgroundImage: `url(${item?.image_url})` }}
                     className={`h-[400px] bg-cover bg-no-repeat bg-center rounded-md p-[30px] relative`}
                  >
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
                              className="text-white mt-[30px] rounded-md bg-blue px-[15px] py-[11px] block w-fit font-semibold text-base leading-[17px]"
                           >
                              {item?.button_text}
                           </a>
                        )}
                     </div>
                     {item?.show_overlay && <GradientOverlay />}
                     {item.media_type == "video" ? <VideoComponent url={item?.image_url} /> : null}
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
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
