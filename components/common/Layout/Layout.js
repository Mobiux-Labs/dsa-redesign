import LeaderboardAd from "../Ads/Leaderboard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SectionBar from "../Navbar/SectionBar";
import { ThemeProvider } from "@/utils/context";

export default function Layout({ children }) {
   return (
      <>
         <LeaderboardAd />
         <Navbar />
         <SectionBar />
         <div className="py-[66px]">{children}</div>
         <Footer />
      </>
   );
}
