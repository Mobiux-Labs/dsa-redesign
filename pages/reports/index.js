import StoryCard from "@/components/common/Content/StoryCard";
import Layout from "@/components/common/Layout/Layout";
import ReportFilters from "@/components/reports/Filters";
import { getReports } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import VerticalListing from "@/components/reports/VerticalListing";
import Image from "next/image";
import { getTimeAgo, loader, trimUrl } from "@/utils/helper";
import CategoryBadge from "@/components/common/Content/CategoryBadge";
import Link from "next/link";

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
            <MainStory story={mainStory} />
            <VerticalListing storiesList={storiesList} />
         </div>
      </Layout>
   );
}

function MainStory({ story }) {
   let authors = story?.authors;
   let timeToRead = story?.time_to_read;
   return (
      <div className="flex gap-[20px]">
         <Link href={trimUrl(story?.post_url)}>
            <Image src={story?.image_url} height={400} width={300} loader={loader} className="rounded-md" />
         </Link>
         <div>
            <CategoryBadge category={story?.category} />
            <Link href={trimUrl(story?.post_url)}>
               <h2 className="text-heading font-bold text-3xl leading-[55px] mt-[5px] mb-[20px]">
                  {story?.post_title}
               </h2>
               <p className="text-content text-lg font-serif leading-[28px] mb-[20px]">{story?.post_excerpt}</p>
            </Link>
            <div className={"text-smalltext text-sm"}>
               <p>
                  <Link href={authors[0]?.data?.url ? authors[0]?.data?.url : ""}>
                     <span className="text-capitalize hover:text-black">{authors[0]?.data?.display_name}</span>
                  </Link>{" "}
                  | <span>{getTimeAgo(story?.post_date)}</span> |{" "}
                  <span>
                     {timeToRead} {timeToRead == 1 ? "min" : "mins"} read
                  </span>
               </p>
            </div>
            <div className="mt-[30px] flex gap-[15px]">
               <Link
                  href={trimUrl(story?.post_url)}
                  className="bg-blue text-white text-base font-medium font-outfit leading-[17px] py-[12px] px-[34px] rounded-sm"
               >
                  View Report
               </Link>
               {story?.has_associated_story && (
                  <Link
                     href={trimUrl(story?.associated_story)}
                     className="bg-white text-blue text-base font-medium font-outfit leading-[17px] py-[12px] px-[34px] rounded-sm border-[2px] border-blue"
                  >
                     View Summary
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   let reports = await getReports(context.req, 1, 6);
   return { props: { session, reports } };
}
