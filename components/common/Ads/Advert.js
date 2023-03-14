import { useEffect, useState } from "react";
import MultipleObserver from "@/utils/observer";
import { getAdverts } from "@/utils/api-calls";
import { adRotateInterval, advertLocations, videoFormats } from "@/constants";
import { containsInArray, handleAdvertLoad, recordAdImpressionOnGTM } from "@/utils/helper";
import Link from "next/link";
import { useSession } from "@/utils/context";
import { useRouter } from "next/router";

export default function Advert({ withoutPadding = false, adLocation, type = "leaderboard", className }) {
   const [currentAd, setCurrentAd] = useState(null);
   const [adLoaded, setAdLoaded] = useState(false);
   const [session] = useSession();
   const router = useRouter();

   const fetchAds = async () => {
      const ads = await getAdverts(adLocation);
      if (ads?.length) return ads;
      return null;
   };

   const startInterval = (ads) => {
      let currentAdPos = 0;
      let interval = setInterval(() => {
         let newPos = (currentAdPos + 1) % ads.length;
         currentAdPos++;
         setCurrentAd(ads[newPos]);
      }, adRotateInterval);
      return interval;
   };

   const intiailizeAds = async () => {
      const ads = await fetchAds();
      if (!ads) return;
      setCurrentAd(ads[0]);
      setAdLoaded(true);
      const interval = startInterval(ads);
      return interval;
   };

   useEffect(() => {
      intiailizeAds().then((interval) => () => clearInterval(interval));
   }, []);

   const isVideo = () => {
      if (containsInArray(videoFormats, currentAd?.image_url)) return true;
      return false;
   };

   const onImageLoad = () => {
      // let res = handleAdvertLoad(currentAd, session, router.asPath, document);
      // if (!res) return;
      // recordAdImpressionOnGTM(currentAd, adLocation);
   };

   const handleAdvertClick = () => {
      // recordAdImpressionOnGTM(currentAd, adLocation, "click");
   };

   return type == "leaderboard" ? (
      <div
         className={`${className} bg-[#d5d5d519] ${
            withoutPadding ? "py-0" : "py-[5px] px-[5px] mx-auto rounded-sm flex justify-center items-center"
         }`}
      >
         {adLoaded ? (
            <MultipleObserver>
               {isVideo() ? (
                  <Link href={currentAd?.ad_url} onClick={() => handleAdvertClick()}>
                     <video
                        style={{ objectFit: "cover" }}
                        width={931}
                        height={93}
                        className="max-w-fit"
                        autoPlay
                        loop
                        src={currentAd.image_url}
                        muted
                        playsInline
                        onLoadedData={onImageLoad}
                     ></video>
                  </Link>
               ) : (
                  <Link href={currentAd?.ad_url} onClick={() => handleAdvertClick()}>
                     <img
                        src={currentAd.image_url + "?fit=931,93"}
                        alt=""
                        className="w-[931px] rounded-md max-w-full"
                        onLoad={onImageLoad}
                     />
                  </Link>
               )}
            </MultipleObserver>
         ) : (
            <div className={`bg-[#d5d5d519] mx-auto rounded-md`}></div>
         )}
      </div>
   ) : (
      <div className={`w-full bg-gray rounded-lg flex items-center justify-center text-white ${className}`}>
         {" "}
         {adLoaded ? (
            <MultipleObserver>
               {isVideo() ? (
                  <Link href={currentAd?.ad_url}>
                     <video
                        style={{ objectFit: "cover" }}
                        autoPlay
                        loop
                        src={currentAd.image_url}
                        muted
                        playsInline
                        onLoadedData={onImageLoad}
                     ></video>
                  </Link>
               ) : (
                  <Link href={currentAd?.ad_url}>
                     <img src={currentAd.image_url} alt="" className="rounded-md" onLoad={onImageLoad} />
                  </Link>
               )}
            </MultipleObserver>
         ) : (
            <div className="w-[250px] bg-[#d5d5d519] mx-auto"></div>
         )}
      </div>
   );
}
