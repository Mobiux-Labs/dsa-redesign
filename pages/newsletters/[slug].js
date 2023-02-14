import Link from "next/link";
import Layout from "@/components/common/Layout/Layout";
import { getUserSession } from "@/utils/user";
import { newsletters, redirectTo404 } from "@/constants";
import { getNewsletters } from "@/utils/api-calls";
import { formatDate } from "@/utils/helper";
import { useState } from "react";

export default function NewsletterArchive(props) {
   const { newsletter, list: initialList } = props;
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [list, setList] = useState(initialList);
   async function fetchMoreNewsletters() {
      if (loading) return;
      setLoading(true);
      const data = await getNewsletters(undefined, newsletter.slug, page + 1);
      setList([...list, ...data]);
      setPage(page + 1);
      setLoading(false);
   }

   return (
      <Layout session={props.session}>
         <div className="w-[800px] mx-auto">
            {/* Top section with title and description */}
            <div className="text-center">
               <p className="text-content font-semibold uppercase text-sm mb-[5px]">
                  Newsletters
               </p>
               <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">
                  {newsletter?.name}
               </h1>
               <p className="text-content leading-[28px] text-lg w-[800px] mx-auto font-serif text-left">
                  {newsletter?.description}
               </p>
            </div>
            {/* List of newsletters */}
            <div className="mb-[60px]">
               {/* List */}
               <div className="mb-[50px] pt-[25px]">
                  {list?.map((newsletter, index) => (
                     <Newsletter
                        key={index}
                        newsletter={newsletter}
                        hasBorder={index !== list.length - 1}
                     />
                  ))}
               </div>
               {/* See more button */}
               <button
                  disabled={loading}
                  className="py-[10px] px-[20px] border-[1.5px] border-blue rounded-sm text-blue text-base font-medium mx-auto block"
                  onClick={() => fetchMoreNewsletters()}
               >
                  See More
               </button>
            </div>
         </div>
      </Layout>
   );
}

function Newsletter({ newsletter, hasBorder = true }) {
   return (
      <div
         className={`py-[25px] flex justify-between cursor-pointer animate-fade-in ${
            hasBorder ? "border-b-[1px] border-gray" : ""
         }`}
      >
         <h3 className="text-heading text-xl leading-[30px] font-bold">
            {newsletter?.subject}
         </h3>
         <div className="flex items-center gap-[75px] ml-[100px]">
            <p className="text-base text-content whitespace-nowrap">
               {formatDate(newsletter?.pub_date)}
            </p>
            <img
               src="/icons/arrow-gray.svg"
               alt="Select"
               className="cursor-pointer"
            />
         </div>
      </div>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const { slug } = context.params;
   const newsletter = newsletters[slug];
   if (!newsletter) return redirectTo404;
   const list = await getNewsletters(context.req, newsletter.slug);
   return { props: { session, newsletter, list } };
}
