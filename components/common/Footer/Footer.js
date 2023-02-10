import Image from "next/image";
import { logoUrl } from "@/constants";
import Link from "next/link";

export default function Footer({}) {
   const currentYear = new Date().getFullYear();
   return (
      <>
         <div className="top-section text-center w-full bg-darkblue mt-[100px] pt-[40px] pb-[45px]">
            <div className="container mx-auto">
               <p className={"uppercase text-lg text-white"}>
                  Unrivaled analysis & powerful stories
               </p>
               <p className="text-white font-bold text-3xl mt-[20px] mb-[35px]">
                  Sign up to our newsletters for a daily dose of DealStreetAsia.
               </p>
               <form className="w-[593px] mx-auto flex h-[45px]">
                  <input
                     type="email"
                     placeholder="Enter Your Email"
                     className="py-[14px] placeholder:text-lg placeholder-lightgray w-[461px]"
                  />
                  <button
                     type="submit"
                     className="bg-blue text-white w-fit h-full text-base px-[12px]"
                  >
                     Subscribe Now
                  </button>
               </form>
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
                     <Link href={""}>About Us</Link>
                     <Link href={""}>Team</Link>
                     <Link href={""}>Advertise</Link>
                     <Link href={""}>Join us</Link>
                     <Link href={""}>Contact</Link>
                     <Link href={""}>Blog</Link>
                     <Link href={""}>FAQ</Link>
                  </div>
               </div>
               <div className="right">
                  <div className="social-icons flex gap-[25px]">
                     <img
                        src="/icons/linkedin.svg"
                        alt="LinkedIn"
                        height={14}
                        width={14}
                     />
                     <img src="/icons/twitter.svg" alt="LinkedIn" />
                     <img
                        src="/icons/facebook.svg"
                        alt="LinkedIn"
                        height={14}
                        width={14}
                     />
                     <img
                        src="/icons/instagram.svg"
                        alt="LinkedIn"
                        height={14}
                        width={14}
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
