import LeaderboardAd from "../Ads/Leaderboard";
import Navbar from "../Navbar/Navbar";
import SectionBar from "../Navbar/SectionBar";

export default function Layout({ children }) {
  return (
    <div>
      <LeaderboardAd />
      <Navbar />
      <SectionBar />
      <div className="px-[120px] py-[66px]">{children}</div>
    </div>
  );
}
