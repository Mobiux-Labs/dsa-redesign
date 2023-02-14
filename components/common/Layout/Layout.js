import LeaderboardAd from "../Ads/Leaderboard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SectionBar from "../Navbar/SectionBar";
import LoginModal from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";
import UnSubscribeNlModal from "@/components/newsletter/UnSubscribeModal";

export default function Layout({
   children,
   showSectionBar = true,
   session,
   withLeaderBoardAd = true,
}) {
   return (
      <>
         {withLeaderBoardAd ? <LeaderboardAd /> : null}
         <div className="sticky top-0 z-[100]">
            <Navbar intialSession={session} />
         </div>
         {showSectionBar && <SectionBar />}
         <div className="py-[40px]  ">{children}</div>
         <LoginModal />
         <SignupModal />
         <UnSubscribeNlModal />
         <Footer />
      </>
   );
}
