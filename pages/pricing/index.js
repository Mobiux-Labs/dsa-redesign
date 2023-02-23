import Layout from "@/components/common/Layout/Layout";
import { getUserSession } from "@/utils/user";
import PricingTable from "@/components/pricing/PricingTable";
import { getPlanData } from "@/utils/api-calls";
import { createPricingObject } from "@/utils/helper";

export default function PricingPage(props) {
   let pricingData = createPricingObject(props.planData);
   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="px-[120px]">
            <TopSection />
            <PricingTable data={pricingData} />
         </div>
      </Layout>
   );
}

function TopSection() {
   return (
      <div className="text-center">
         <p className="text-content font-semibold uppercase text-sm mb-[5px]">
            Susbcription Plans
         </p>
         <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[30px]">
            Unlock Your Competitive Advantage
         </h1>
         <p className="text-content leading-[28px] text-lg w-[800px] mx-auto font-serif text-center">
            DealstreetAsia brings you original content and insights for better
            visibility & market intelligence, providing deal engineers with a
            competitive edge. For corporate plans, contact us at{" "}
            <a href="mailto:subs@dealstreetasia.com" className="text-blue">
               subs@dealstreetasia.com
            </a>
         </p>
      </div>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const planData = await getPlanData(context.req);
   return { props: { session, planData } };
}
