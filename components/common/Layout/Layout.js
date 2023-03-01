import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SectionBar from "../Navbar/SectionBar";
import LoginModal from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";
import UnSubscribeNlModal from "@/components/newsletter/UnSubscribeModal";
import { motion } from "framer-motion";
import SubscribeNlModal from "@/components/newsletter/SubscribeModa";
import Advert from "../Ads/Advert";
import { advertLocations } from "@/constants";

export default function Layout({
   children,
   showSectionBar = true,
   session,
   withLeaderBoardAd = true,
}) {
   let motionOptions = {
      initial: { y: 0, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 0, opacity: 1 },
      transition: {
         type: "just",
         duration: 0.2,
      },
   };

   return (
      <>
         {withLeaderBoardAd ? (
            <Advert adLocation={advertLocations.home_page_leader.name} />
         ) : null}
         <div className="sticky top-0 z-[100]">
            <Navbar intialSession={session} />
         </div>
         {showSectionBar && <SectionBar />}
         <motion.div {...motionOptions}>
            <div className="py-[40px]">{children}</div>
         </motion.div>
         <LoginModal />
         <SignupModal />
         <UnSubscribeNlModal />
         <SubscribeNlModal />
         <Footer />
      </>
   );
}
