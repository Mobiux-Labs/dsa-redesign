import Layout from "@/components/common/Layout/Layout";
import { tabStyle } from "@/components/pricing/PricingTable";
import { getUserSession } from "@/utils/user";
import { Tabs } from "@mantine/core";
import FAQ from "@/components/pricing/FAQ";

export default function FAQPage(props) {
   let data = ["General", "Subscription", "Account"];
   return (
      <Layout session={props.session}>
         <div className="px-[220px] text-left">
            <p className="text-content text-center font-semibold uppercase text-sm mb-[5px]">
               FAQ
            </p>
            <h1 className="text-darkblue text-center text-4xl font-bold leading-[60px] mb-[50px]">
               How can we help?
            </h1>
            <Tabs styles={tabStyle} defaultValue={data[1]}>
               <Tabs.List className="border-0">
                  {data.map((key, index) => (
                     <Tabs.Tab value={key} key={index}>
                        {key}
                     </Tabs.Tab>
                  ))}
               </Tabs.List>
               <div className="mt-[50px]">
                  {data.map((key, index) => (
                     <Tabs.Panel value={key} key={index}>
                        <FAQ withHeading={false} />
                     </Tabs.Panel>
                  ))}
               </div>
            </Tabs>
         </div>
      </Layout>
   );
}

export async function getServerSideProps(context) {
   let session = await getUserSession(context.req);
   return { props: { session } };
}
