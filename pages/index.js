import Layout from "@/components/common/Layout/Layout";
import TopZone from "@/components/home/TopZone";
import { getUserSession } from "@/utils/user";
import { getHomePageHeadlines } from "@/utils/api-calls";
import HomePageSection from "@/components/home/SectionZone";
import TopTopicsSection from "@/components/home/TopTopicsSection";
import CarouselBanner from "@/components/home/CarouselBanner";
import VerticalSection from "@/components/home/VerticalSection";
import PartnerContent from "@/components/home/PartnerContent";
import HorizontalSection from "@/components/home/HorizontalSection";
import { useSession } from "@/utils/context";
import { useEffect } from "react";

export default function Home(props) {
   const [session, setSession] = useSession();
   useEffect(() => {
      setSession(props.session);
   }, []);
   return (
      <Layout>
         <div className="px-[120px]">
            <TopZone headlines={props.data} />
            <div className="mt-[100px]"></div>
            <HomePageSection
               stories={props?.data["venture-capital"]}
               title={"Venture Capital"}
               rightSection={!session.loggedIn ? <TopTopicsSection /> : null}
            />
            <CarouselBanner />
            {session?.loggedIn && (
               <div>
                  <div className="mt-[100px]"></div>
                  <HomePageSection
                     stories={props?.data["q-a"]}
                     title={"Q & A"}
                  />
               </div>
            )}
         </div>
         <div className="mt-[100px]"></div>
         <HorizontalSection
            stories={props.data["private-equity"]}
            title={"Private Equity"}
         />
         <div className="mt-[100px]"></div>
         <div className="px-[120px]">
            <VerticalSection
               leftTitle={"Unicorns"}
               rightTitle={"Deals"}
               leftStories={props.data.unicorns}
               rightStories={props.data["deal-investment"]}
               imageSize={"sm"}
            />
         </div>
         <div className="mt-[100px]"></div>
         {/* Horizontal scrolling section */}
         <HorizontalSection
            stories={props.data.people}
            title={"People"}
            imageOnEveryStory
         />
         {/* Partner content stories */}
         <div className="px-[120px]">
            <PartnerContent stories={props.data["partner_content"]} />
         </div>
      </Layout>
   );
}

export async function getServerSideProps({ req, res }) {
   const session = await getUserSession(req);
   const data = await getHomePageHeadlines(req);
   console.log(data);
   return {
      props: {
         data,
         session: session,
      },
   };
}
