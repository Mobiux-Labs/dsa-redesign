import Layout from "@/components/common/Layout/Layout";
import TopZone from "@/components/home/TopZone";
import { checkIfLoggedInAndSubscribed } from "@/utils/user";
import { getHomePageHeadlines } from "@/utils/api-calls";
import HomePageSection from "@/components/home/SectionZone";
import TopTopicsSection from "@/components/home/TopTopicsSection";
import CarouselBanner from "@/components/home/CarouselBanner";
import VerticalSection from "@/components/home/VerticalSection";
import PartnerContent from "@/components/home/PartnerContent";

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
         {/* 3 vertical sections */}
         <div className="flex items-stretch">
            <div>
               <VerticalSection
                  title={"People"}
                  stories={props.headlines.people}
                  index={0}
                  imageSize={"md"}
                  numberOfStories={2}
               />
            </div>
            <div>
               <VerticalSection
                  title={"Unicorns"}
                  stories={props.headlines.unicorns}
                  index={1}
                  imageSize={"sm"}
               />
            </div>
            <div>
               <VerticalSection
                  title={"Deals"}
                  stories={props.headlines.deals}
                  index={2}
                  imageSize={"sm"}
               />
            </div>
         </div>
         {/* Horizontal scrolling section */}
         {/* Partner content stories */}
         <PartnerContent stories={props.headlines.partner_content} />
      </Layout>
   );
}

export async function getServerSideProps({ req, res }) {
   // const session = await checkIfLoggedInAndSubscribed(req);
   const headlines = await getHomePageHeadlines(req);
   return {
      props: {
         headlines,
      },
   };
}
