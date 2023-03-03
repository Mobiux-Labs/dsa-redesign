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
import { getTitleFromSlug, getUniqueFavourites, getUrlFromSlug } from "@/utils/helper";

export default function Home(props) {
   const [session, setSession] = useSession();
   const favourites = getUniqueFavourites(props.data?.favourites);
   useEffect(() => {
      setSession(props.session);
   }, []);
   return (
      <Layout session={props.session}>
         <div className="px-[120px]">
            <TopZone stories={props.data} />
            <div className="mt-[100px]"></div>
            <HomePageSection
               stories={props?.data["venture-capital"]}
               url={"/section/venture-capital/"}
               title={"Venture Capital"}
               rightSection={!session.loggedIn ? <TopTopicsSection /> : null}
            />
            <CarouselBanner />
            {session?.loggedIn
               ? favourites.map(
                    (section, index) =>
                       props?.data[section].length > 0 &&
                       getTitleFromSlug(section) && (
                          <div key={index}>
                             <div className="mt-[100px]"></div>
                             <HomePageSection
                                stories={props?.data[section]}
                                title={getTitleFromSlug(section)}
                                url={getUrlFromSlug(section)}
                             />
                          </div>
                       )
                 )
               : null}
         </div>
         <div className="mt-[100px]"></div>
         <HorizontalSection stories={props.data["private-equity"]} title={"Private Equity"} />
         <div className="mt-[100px]"></div>
         <div className="px-[120px]">
            <VerticalSection
               leftTitle={"Unicorns"}
               rightTitle={"Deals"}
               leftStories={props.data.unicorns}
               rightStories={props.data["deal-investment"]}
               imageSize={"sm"}
               leftUrl={"/section/unicorns/"}
               rightUrl={"/section/deal-investment/"}
            />
         </div>
         <div className="mt-[100px]"></div>
         {/* Horizontal scrolling section */}
         <HorizontalSection stories={props.data.people} title={"People"} imageOnEveryStory />
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
   return {
      props: {
         data,
         session: session,
      },
   };
}
