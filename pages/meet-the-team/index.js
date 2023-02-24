import Layout from "@/components/common/Layout/Layout";
import { getUserSession } from "@/utils/user";
import Image from "next/image";
import { loader, trimUrl } from "@/utils/helper";
import TeamTab from "@/components/meet-the-team/TeamTab";

export default function TeamPage(props) {
   let imageUrl = `https://media.dealstreetasia.com/uploads/Website/team-img.png`;
   return (
      <Layout session={props.session}>
         <div className="text-center">
            <p className="text-content font-semibold uppercase text-sm mb-[5px]">
               About us
            </p>
            <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">
               Meet the team behind DealStreetAsia
            </h1>
            <Image
               src={imageUrl}
               width={1000}
               height={400}
               loader={loader}
               className="mx-auto rounded-sm mb-[30px]"
            />
            <div className="w-[800px] mx-auto">
               <p className="text-content text-2xl font-serif leading-[32px] text-left">
                  Deal Street Asia gets its unique edge from a young and
                  motivated team. We believe in the future of Asia and want to
                  play witness and contribute to the region’s growth story.
               </p>
               <p className="text-content text-2xl font-serif leading-[32px] text-left mt-[30px]">
                  Our editorial coverage is powered by a dedicated team of on
                  ground reporters in the region's largest and most vital
                  markets across China and Hong Kong, South Asia (India and
                  Pakistan), and Southeast Asia (Singapore, Indonesia, Vietnam,
                  Thailand and the Philippines).
               </p>
            </div>

            <TeamTab />
         </div>
      </Layout>
   );
}

export async function getServerSideProps(context) {
   let session = await getUserSession(context.req);
   return { props: { session } };
}
