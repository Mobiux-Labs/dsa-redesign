import LeaderboardAd from "../Ads/Leaderboard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SectionBar from "../Navbar/SectionBar";
import LoginModal from "@/components/auth/LoginModal";

export default function Layout({ children, showSectionBar = true }) {
   return (
      <>
         <LeaderboardAd />
         <div className="sticky top-0 z-[100]">
            <Navbar />
         </div>
         {showSectionBar && <SectionBar />}
         <div className="py-[66px] sm:px-30">{children}</div>
         <LoginModal />
         <Footer />
      </>
   );
}
