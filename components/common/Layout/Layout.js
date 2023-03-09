import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SectionBar from "../Navbar/SectionBar";
import LoginModal, { CloseModalButton } from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";
import UnSubscribeNlModal from "@/components/newsletter/UnSubscribeModal";
import { motion } from "framer-motion";
import SubscribeNlModal from "@/components/newsletter/SubscribeModa";
import Advert from "../Ads/Advert";
import { advertLocations } from "@/constants";
import { useModal, useToast, useSession } from "@/utils/context";
import { getTitleForPage } from "@/utils/helper";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BottomToast from "../Toast";

export default function Layout({
   children,
   showSectionBar = true,
   session: initialSession,
   withLeaderBoardAd = true,
   toast: intialToast,
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

   const [modal, setModal] = useModal();
   const [toast, setToast] = useToast();
   const [session, setSession] = useSession();
   const router = useRouter();

   const shouldReplaceDefaultPageTitle = () => {
      let query = router.query;
      let path = `/${router.pathname.split("/")[1]}/${query.slug || query.id}`;
      let hasQuery = Object.keys(query).length > 0;
      let title = getTitleForPage(hasQuery ? path : router.asPath);
      return title ? title : false;
   };

   useEffect(() => {
      if (intialToast) setToast(intialToast);
      if (initialSession) setSession(initialSession);
   }, []);

   return (
      <>
         {shouldReplaceDefaultPageTitle() ? <PageSEO title={shouldReplaceDefaultPageTitle()} /> : null}
         {withLeaderBoardAd ? <Advert adLocation={advertLocations.home_page_leader.name} /> : null}
         <div className="sticky top-0 z-[600]">
            <Navbar intialSession={session} />
         </div>
         {showSectionBar && <SectionBar />}
         <motion.div {...motionOptions}>
            <div className="py-[40px] max-lg:py-[0px]">{children}</div>
         </motion.div>
         <>
            <LoginModal />
            <SignupModal />
            {modal ? <CloseModalButton /> : null}
         </>
         <UnSubscribeNlModal />
         <SubscribeNlModal />
         <BottomToast />
         <Footer />
      </>
   );
}

function PageSEO({ title }) {
   return <NextSeo title={title} />;
}
