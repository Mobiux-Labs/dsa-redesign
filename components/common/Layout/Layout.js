import LeaderboardAd from '../Ads/Leaderboard'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import SectionBar from '../Navbar/SectionBar'

export default function Layout({ children }) {
  return (
    <div>
      <LeaderboardAd />
      <Navbar />
      <SectionBar />
      <div className="py-[66px]">{children}</div>
      <Footer />
    </div>
  )
}
