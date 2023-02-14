import Link from "next/link";
import Layout from "@/components/common/Layout/Layout";

export default function NewsletterArchive(props) {
   return (
      <Layout session={props.session}>
         {/* Top section with title and description */}
         <div className="text-center">
            <p className="text-content font-semibold uppercase text-sm mb-[5px]">
               Newsletters
            </p>
            <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">
               An Extension of our coverage & analysis
            </h1>
            <p className="text-content leading-[28px] text-lg w-[800px] mx-auto font-serif text-left">
               Curated by the same team that has proven its editorial mettle
               year after year. Our newsletters are built to provide you with
               the same level of insight our stories and analysis do. Sign up
               for one or more of our newsletters today to supplement your daily
               reading of DealStreetAsia.
            </p>
         </div>
      </Layout>
   );
}
