import Image from "next/image";
import { logoUrl } from "@/constants";
import Link from "next/link";
import CustomIcon from "@/utils/icon-mapping";
import NewsletterForm from "./NewsletterForm";

export default function Footer({}) {
   const currentYear = new Date().getFullYear();
   return (
      <>
         <div className="top-section  text-center w-full bg-darkblue pt-[40px] pb-[45px]">
            <div className="container max-md:mx-[10px] mx-auto">
               <p className={"uppercase text-lg max-md:text-base  text-white"}>
                  Unrivaled analysis & powerful stories
               </p>
               <p className="text-white font-bold text-3xl max-md:text-2xl  mt-[20px] mb-[35px]">
                  Sign up to our newsletters for a daily dose of DealStreetAsia.
               </p>
               <NewsletterForm />
            </div>
         </div>
         <div className="bottom-section relative">
            <div className="underlay-bg bg-darkblue h-[217px]  max-md:h-[220px]"></div>
            <div className="overlay absolute inset-0 bg-[#ffffffcc] px-[120px] max-md:px-[20px] max-md:py-[20px] py-[37px] flex items-center justify-between">
               <div className="left flex max-md:flex-col  items-center h-full w-full max-lg:justify-between">
                  <div className="logo  max-md:w-[60px] max-md:h-[100px]">
                     <Image
                        src={logoUrl}
                        alt="DealStreetAsia Logo"
                        layout="contain"
                        width={87}
                        height={63}
                     />
                     <Image
                        src="https://media.dealstreetasia.com/uploads/2019/10/nikkei-group-transparent-logo.png"
                        width={87}
                        height={14}
                        alt="Nikkei Logo"
                        className="bg-blue mt-[3px] py-0.5 px-1"
                     />
                  </div>
                  <div className="flex max-lg:flex-col gap-[25px] place-items-center w-full lg:ml-[20px]">
                     <div className="links w-full flex text-darkblue flex-wrap max-lg:justify-center max-lg:gap-[15px] gap-[45px] max-lg:text-base font-medium max-md:ml-[0px] ml-[30px]">
                        <Link href={"/about-us/"}>About Us</Link>
                        <Link href={"/meet-the-team/"}>Team</Link>
                        <Link href={"/advertise-with-us/"}>Advertise</Link>
                        <Link href={"/careers/"}>Join us</Link>
                        <Link href={"/contact-us/"}>Contact</Link>
                        <Link href={"/blogs/"}>Blog</Link>
                        <Link href={"/faq/"}>FAQ</Link>
                     </div>
                     <div className="right ">
                        <div className="social-icons flex gap-[25px] ">
                           <CustomIcon
                              name={"linkedin"}
                              color={"#1C70B6"}
                              height={"auto"}
                           />
                           <CustomIcon
                              name={"twitter"}
                              color={"#1C70B6"}
                              height={"auto"}
                           />
                           <CustomIcon
                              name={"facebook"}
                              color={"#1C70B6"}
                              height={"auto"}
                           />
                           <CustomIcon
                              name={"instagram"}
                              color={"#1C70B6"}
                              height={"auto"}
                     />
                  </div>
               </div>
                 
                  </div>
               </div>
             
            </div>
           
         </div>
         <div className="px-[120px] max-lg:px-[20px] py-[18px] flex items-center justify-between">
            <div className="links text-darkblue text-sm">
               <Link href={""}>Privacy Policy</Link>
               {"  "}
               <span className="text-smalltext">|</span>
               {"  "}
               <Link href={""}>Terms & Conditions</Link>
               {"  "}
               <span className="text-smalltext">|</span>
               {"  "}
               <Link href={""}>Code of Conduct</Link>
            </div>
            <p className="text-smalltext text-sm">
               Copyright DEALSTREETASIA {currentYear} All Rights Reserved
            </p>
         </div>
      </>
   );
}
