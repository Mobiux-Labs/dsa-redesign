import StoryCard from "@/components/common/Content/StoryCard";
import Layout from "@/components/common/Layout/Layout";
import ReportFilters from "@/components/reports/Filters";
import { getReports } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import VerticalListing from "@/components/reports/VerticalListing";

export default function ReportsPage(props) {
   let reports = props.reports;
   let mainStory = reports[0];
   let storiesList = reports.slice(1, 6);
   return (
      <Layout session={props.session}>
         <div className="text-left w-[800px] mx-auto">
            <h1 className="text-heading text-3xl font-bold leading-[55px] mb-[40px]">Reports</h1>
            <ReportFilters />
            {/* main story */}
            <StoryCard story={mainStory} withImage customImageHeight={230} customImageWidth={800} />
            <VerticalListing storiesList={storiesList} />
         </div>
      </Layout>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   let reports = await getReports(context.req, 1, 6);
   return { props: { session, reports } };
}
