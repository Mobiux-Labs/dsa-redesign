import JobDescription from "@/components/careers/Content";
import Layout from "@/components/common/Layout/Layout";
import CustomIcon from "@/utils/icon-mapping";
import { getUserSession } from "@/utils/user";
import { useRef, useEffect, useState } from "react";

export default function IndividualJobPage(props) {
   const ref = useRef(null);
   const [isVisible, setIsVisible] = useState(false);

   // This is to detect when the top bar is out of view or back in view
   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (!entry.isIntersecting) {
               setIsVisible(true);
            } else {
               setIsVisible(false);
            }
         },
         {
            root: null,
            rootMargin: "0px",
            threshold: 0,
         }
      );
      if (ref.current) {
         observer.observe(ref.current);
      }
      return () => {
         observer.disconnect();
      };
   }, [ref]);

   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="w-[800px] mx-auto">
            <div className="text-center">
               <p className="text-content font-semibold uppercase text-sm mb-[5px]">
                  JOB ROLE
               </p>
               <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">
                  Researcher
               </h1>
               <div className="flex items-center justify-between">
                  <div className="flex gap-[30px] text-content">
                     <div className="flex items-center gap-[10px]">
                        <CustomIcon name={"job"} color="#5E5E5E" />
                        <p>Editorial & Research</p>
                     </div>
                     <div className="flex items-center gap-[10px]">
                        <CustomIcon name={"location"} color="#5E5E5E" />
                        <p>China</p>
                     </div>
                     <div className="flex items-center gap-[10px]">
                        <CustomIcon name={"star"} color="#5E5E5E" />
                        <p>2+ Years of Experience</p>
                     </div>
                  </div>
                  <button
                     ref={ref}
                     className="border-[2px] border-blue rounded-sm font-outfit text-blue py-[11px] px-[20px] text-base leading-[18px]"
                  >
                     Apply Now
                  </button>
               </div>
               <JobDescription />
            </div>
         </div>
         {isVisible && <FixedBottomInfo />}
      </Layout>
   );
}

function FixedBottomInfo() {
   return (
      <div className="shadow-top sticky bottom-0 bg-white w-full pb-[20px] animate-slide-up">
         <div className="w-[800px] mx-auto">
            <div className="flex items-center justify-between pt-[10px]">
               <div className="text-content font-semibold text-lg leading-[28px]">
                  <p className="text-left">Research</p>
                  <p className="font-normal">Editorial & Research | China</p>
               </div>
               <button className="border-[2px] border-blue rounded-sm font-outfit text-blue py-[11px] px-[20px] text-base leading-[18px]">
                  Apply Now
               </button>
            </div>
            <p className="font-serif text-left mt-[20px] text-content">
               DealStreetAsia's Greater China team to{" "}
               <a href="mailto:editor@dealstreetasia.com">
                  editor@dealstreetasia.com
               </a>
            </p>
            <p className="font-serif mt-[5px] text-left text-content">
               Shortlisted candidates may be asked to take a writing/analysis
               test before or after they are interviewed.
            </p>
         </div>
      </div>
   );
}

export async function getServerSideProps(context) {
   const { slug } = context.params;
   const id = slug.split("-").pop();
   const session = await getUserSession(context.req);
   return { props: { session } };
}
