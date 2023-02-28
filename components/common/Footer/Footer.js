import Image from "next/image";
import { logoUrl } from "@/constants";
import Link from "next/link";
import CustomIcon from "@/utils/icon-mapping";
import NewsletterForm from "./NewsletterForm";

export default function Footer({}) {
   const currentYear = new Date().getFullYear();
   return (
      <>
         <div className="top-section text-center w-full bg-darkblue pt-[40px] pb-[45px]">
            <div className="container mx-auto">
               <p className={"uppercase text-lg text-white"}>
                  Unrivaled analysis & powerful stories
               </p>
               <p className="text-white font-bold text-3xl mt-[20px] mb-[35px]">
                  Sign up to our newsletters for a daily dose of DealStreetAsia.
               </p>
               <NewsletterForm />
            </div>
         </div>
         <div className="bottom-section relative">
            <div className="underlay-bg bg-darkblue h-[217px]"></div>
            <div className="overlay absolute inset-0 bg-[#ffffffcc] px-[120px] py-[37px] flex items-center justify-between">
               <div className="left flex items-center h-full">
                  <div className="logo">
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
                  <div className="links flex text-darkblue gap-[45px] font-medium ml-[30px]">
                     <Link href={"/about-us/"}>About Us</Link>
                     <Link href={"/meet-the-team/"}>Team</Link>
                     <Link href={"/advertise-with-us/"}>Advertise</Link>
                     <Link href={"/careers/"}>Join us</Link>
                     <Link href={"/contact-us/"}>Contact</Link>
                     <Link href={"/blogs/"}>Blog</Link>
                     <Link href={"/faq/"}>FAQ</Link>
                  </div>
               </div>
               <div className="right">
                  <div className="social-icons flex gap-[25px]">
                     <CustomIcon
                        name={"linkedin"}
                        color={"#1C70B6"}
                        height={14}
                     />
                     <CustomIcon
                        name={"twitter"}
                        color={"#1C70B6"}
                        height={14}
                     />
                     <CustomIcon
                        name={"facebook"}
                        color={"#1C70B6"}
                        height={14}
                     />
                     <CustomIcon
                        name={"instagram"}
                        color={"#1C70B6"}
                        height={14}
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="px-[120px] py-[18px] flex items-center justify-between">
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
