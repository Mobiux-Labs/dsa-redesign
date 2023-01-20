import LeaderboardAd from "@/components/common/Ads/Leaderboard";
import Head from "next/head";
import Layout from "@/components/common/Layout/Layout";
import TopZone from "@/components/home/TopZone";
import { checkIfLoggedInAndSubscribed } from "@/utils/user";
import { getHomePageHeadlines } from "@/utils/api-calls";
import HomePageSection from "@/components/home/SectionZone";
import TopTopicsSection from "@/components/home/TopTopicsSection";
import CarouselBanner from "@/components/home/CarouselBanner";

export default function Home(props) {
  return (
    <Layout>
      <TopZone headlines={props.headlines} />
      <div className="mt-[100px]"></div>
      <HomePageSection
        stories={props.headlines.just_in}
        title={"Venture Capital"}
        rightSection={<TopTopicsSection />}
      />
      <CarouselBanner />
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await checkIfLoggedInAndSubscribed(req);
  const headlines = await getHomePageHeadlines(req);
  return {
    props: {
      headlines,
    },
  };
}
