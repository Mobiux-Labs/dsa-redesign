import Layout from "@/components/common/Layout/Layout";
import { getUserSession } from "@/utils/user";
import { newsletters, redirectTo404 } from "@/constants";
import { getNewsletterEdition } from "@/utils/api-calls";

export default function NewsletetrEdition(props) {
   const { newsletter, newsletterData: data } = props;
   console.log(data);
   return (
      <Layout session={props.session}>
         <div className="w-[800px] mx-auto">
            {/* Top section with title and description */}
            <div className="text-center">
               <p className="text-content font-semibold uppercase text-sm mb-[5px]">
                  Newsletters
               </p>
               <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px] font-sans text-center">
                  {newsletter?.name}
               </h1>
            </div>
            {/* Newsletter content */}
            <div dangerouslySetInnerHTML={{ __html: data.html_content }}></div>
         </div>
      </Layout>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const slug = context.params.slug;
   const newsletter = newsletters[slug];
   if (!newsletter) return redirectTo404;
   const newsletterData = await getNewsletterEdition(
      context.req,
      context.params.id
   );
   return { props: { session, newsletter, newsletterData } };
}
