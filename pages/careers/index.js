import CareerCarousel from "@/components/careers/Carousel";
import JobsListings from "@/components/careers/JobListings";
import Layout from "@/components/common/Layout/Layout";
import { loader } from "@/utils/helper";
import { getUserSession } from "@/utils/user";
import Image from "next/image";

export default function CareersPage(props) {
   let heroImage =
      "https://media.dealstreetasia.com/uploads/Website/carrers.png";
   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="mx-[120px]">
            <div className="text-center">
               <p className="text-content font-semibold uppercase text-sm mb-[5px]">
                  Join Us
               </p>
               <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">
                  Join the go-to destination for deal activity in Asia
               </h1>
            </div>
            <Image
               src={heroImage}
               width={1000}
               height={400}
               loader={loader}
               className="mx-auto rounded-sm mb-[30px]"
            />
            <div className="w-[800px] mx-auto">
               <p className="font-serif text-content text-lg">
                  We are a financial news platform tracking startups, private
                  equity, venture capital and other investments, initial public
                  offerings, and mergers and acquisitions, and are on our way to
                  becoming the go-to destination for deal activity in Asia.
                  Applicants need to demonstrate a commitment to
                  DealStreetAsia's strategy, standards and mission.{" "}
               </p>
               <p className="my-[30px] text-darkblue font-bold text-3xl leading-[55px] text-left">
                  Understand the needs and behaviours of our audience, and share
                  a familiarity with the variety of ways we reach readers with
                  our journalism, events and data offerings.
               </p>
               <p className="font-serif text-content text-lg">
                  We encourage applicants to thoroughly read the requirements
                  for each job they consider. Be sure you're not applying to a
                  position in which you have no comparable experience, and that
                  you fully understand the job description. Submission of a
                  cover letter with the application is encouraged.
               </p>
               <div className="leading-[28px] font-serif text-lg text-content mt-[30px]">
                  <p>
                     Send your resume to{" "}
                     <a
                        href="mailto:editor@dealstreetasia.com"
                        className="text-darkblue"
                     >
                        editor@dealstreetasia.com
                     </a>
                  </p>
                  <p>
                     Or connect with our{" "}
                     <a href="" className="text-darkblue">
                        editor-in-chief on twitter: @jojiphilip
                     </a>
                  </p>
               </div>
            </div>
         </div>
         <div className="mt-[100px] bg-darkblue h-[400px] flex justify-between">
            <div className="text-left px-[120px] pt-[90px] text-white">
               <h3 className="font-bold text-4xl leading-[55px]">
                  What are we looking for
               </h3>
               <p className="leading-[28px] text-lg font-serif mt-[20px] mr-[170px]">
                  People at all stages of their careers to bring different
                  perspectives and practices to our teams. People who have a
                  passion for cracking big business stories, tracking
                  investments in your country or the region, a fascination for
                  M&A, VC and PE, IPO activity or are keen on deal analytics,
                  then reach out to us.
               </p>
            </div>
            <Image
               src={
                  "https://media.dealstreetasia.com/uploads/Website/careers-2.png"
               }
               width={650}
               height={400}
               loader={loader}
            />
         </div>
         <JobsListings />
         <div className="mt-[200px]">
            <CareerCarousel />
         </div>
         <div className="grid grid-cols-2 my-[100px]">
            <div className="flex items-start px-[120px] justify-center flex-col text-left">
               <h2 className="text-heading leading-[60px] text-4xl font-bold">
                  Equal Opportunity Employer
               </h2>
               <p className="mt-[30px] font-serif text-2xl leading-[32px] text-content">
                  DealStreetAsia is committed to creating a diverse environment
                  and is proud to be an equal opportunity employer. All
                  qualified applicants will receive consideration for employment
                  without regard to race, colour, religion, gender, gender
                  identity or expression, sexual orientation, national origin,
                  genetics, disability, age, or veteran status.
               </p>
            </div>
            <div className="flex justify-end">
               <Image
                  src={`https://media.dealstreetasia.com/uploads/Website/careers-3.png`}
                  width={680}
                  height={580}
                  loader={loader}
               />
            </div>
         </div>
      </Layout>
   );
}

export async function getServerSideProps(context) {
   let session = await getUserSession(context.req);
   return { props: { session } };
}
