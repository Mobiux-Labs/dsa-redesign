import { logoUrl } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { useSession, useModal } from "@/utils/context";
import { logoutUser } from "@/utils/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import CustomIcon from "@/utils/icon-mapping";
import { Select } from "@mantine/core";
import DropdownArrowIcon from "../DropdownArrow";
import { dropdownStyles } from "@/constants";

export default function Navbar({ intialSession }) {
   const [session, setSession] = useSession();
   const [modal, setModal] = useModal();
   const router = useRouter();
   const insightsValues = [
      { label: "Reports", value: "/reports/" },
      { label: "Data Stories", value: "/story-section/data-led-stories/" },
      { label: "Deal Monitors", value: "/story-section/deal-monitors/" },
   ];
   let styles = {
      input: {
         fontFamily: "Montserrat",
         border: "none",
      },
      item: {
         ...dropdownStyles.item,
         color: "#000",
      },
      dropdown: {
         boxShadow: "none",
      },
   };

   async function handleLogout() {
      const res = await logoutUser();
      if (!res) return;
      window.location.reload();
   }

   useEffect(() => {
      setSession(intialSession);
   }, [intialSession]);

   return (
      <>
         <nav className="px-[120px] shadow-3xl max-lg:hidden flex items-center h-[80px] bg-white z-[10000]">
            <div className="logo mr-[30px]">
               <Image
                  src={logoUrl}
                  alt="DealStreetAsia Logo"
                  layout="contain"
                  width={87}
                  height={63}
                  onClick={() => router.push("/")}
                  className="cursor-pointer"
               />
               <Image
                  src="https://media.dealstreetasia.com/uploads/2019/10/nikkei-group-transparent-logo.png"
                  width={87}
                  height={14}
                  alt="Nikkei Logo"
                  className="bg-blue mt-[3px] py-0.5 px-1"
               />
            </div>
            {/* Nav Links with the search icon */}
            <div className="flex justify-between w-full py-[32px]">
               <div className="nav-links flex items-center">
                  <Link href="data.dealstreetasia.com" className="mr-[35px] text-heading">
                     Data Vantage
                  </Link>
                  <Link href="/partner-content/" className="mr-[35px] text-heading">
                     Partner Content
                  </Link>
                  <Link href="data.dealstreetasia.com" className="mr-[35px] text-heading">
                     Events
                  </Link>
                  <Select
                     placeholder="Insights"
                     data={insightsValues}
                     className="rounded-md nav-dropdown"
                     rightSection={<DropdownArrowIcon color="#363E48" />}
                     itemComponent={(item) => (
                        <a href={item.value} className="nav-dropdown-item">
                           {item.label}
                        </a>
                     )}
                     styles={styles}
                     value={"Insights"}
                     shadow="none"
                  />
                  <Link href="/newsletters" className="mr-[35px] text-heading">
                     Newsletters
                  </Link>
                  <Link href="/deals-barometer/" className="mr-[35px] text-heading">
                     Deals Barometer
                  </Link>
               </div>
               <div className="search-icon flex items-center">
                  <Link href="/search/">
                     <CustomIcon name={"search"} color="#B3B3B3" />
                  </Link>
               </div>
            </div>
            {/* Divider */}
            <div className="bg-lightgray h-[38px] w-[1px] ml-[25px]"></div>
            {/* Login/Subscribe buttons */}
            <div className="flex items-center">
               {/* Show login button if not loggedin */}
               {!session?.loggedIn ? (
                  <a className="mx-[25px] text-blue font-semibold cursor-pointer" onClick={() => setModal("login")}>
                     Login
                  </a>
               ) : (
                  <div
                     href={""}
                     className={"h-[18px] w-[18px] mx-[15px] cursor-pointer"}
                     onClick={() => handleLogout()}
                  >
                     <CustomIcon name={"avatar"} color="#B3B3B3" />
                  </div>
               )}
               {/* Show subscribe button only if user is not subscribed */}
               {!session?.subscribed ? (
                  <Link href="/plans" className="bg-blue text-white px-[15px] py-[10px] rounded-sm">
                     Subscribe
                  </Link>
               ) : null}
            </div>
         </nav>
         <nav className="bg-white lg:hidden sm:px-4 dark:bg-gray-900 w-full z-[10000] top-0 left-0 border-b border-gray-200 dark:border-gray-600 h-[60px] px-[30px] py-[10px] flex items-center justify-between max-sm:left-0 pl-[30px]">
            <div className="container flex flex-wrap items-center justify-between mx-auto min-w-[100%]">
               <div className="logo mr-[30px]">
                  <Image
                     src={logoUrl}
                     alt="DealStreetAsia Logo"
                     layout="contain"
                     width={40}
                     height={42}
                     onClick={() => router.push("/")}
                     className="cursor-pointer"
                  />
                  <Image
                     src="https://media.dealstreetasia.com/uploads/2019/10/nikkei-group-transparent-logo.png"
                     width={40}
                     height={7}
                     alt="Nikkei Logo"
                     className="bg-blue mt-[3px] py-0.5 px-1"
                  />
               </div>
               <div className="flex lg:order-2">
                  {!session?.subscribed && (
                     <Link
                        type="button"
                        href={"/pricing/"}
                        className="mr-[15px] text-sm font-semibold bg-blue rounded-sm px-[8px] py-[6px] text-white"
                     >
                        Subscribe
                     </Link>
                  )}
                  <button
                     data-collapse-toggle="navbar-sticky"
                     type="button"
                     className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                     aria-controls="navbar-sticky"
                     aria-expanded="false"
                  >
                     <span className="sr-only">Open main menu</span>
                     <CustomIcon name={"hamburger"} color="#B3B3B3" />
                  </button>
               </div>
               <div
                  className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 bg-white top-[60px] absolute"
                  id="navbar-sticky"
               >
                  <div className="flex flex-col justify-between w-full py-[32px]">
                     <div className="nav-links flex flex-col ">
                        <Link href="data.dealstreetasia.com" className="mr-[35px] mb-[20px] text-heading">
                           Data Vantage
                        </Link>
                        <Link href="/partner-content/" className="mr-[35px] text-heading mb-[20px]">
                           Partner Content
                        </Link>
                        <Link href="data.dealstreetasia.com" className="mr-[35px] text-heading mb-[20px]">
                           Events
                        </Link>
                        <Select
                           placeholder="Insights"
                           data={insightsValues}
                           className="rounded-lg nav-dropdown mb-[20px]"
                           rightSection={<DropdownArrowIcon color="#363E48" />}
                           itemComponent={(item) => (
                              <a href={item.value} className="nav-dropdown-item">
                                 {item.label}
                              </a>
                           )}
                           styles={styles}
                           value={"Insights"}
                           shadow="none"
                        />
                        <Link href="/newsletters" className="mr-[35px] mb-[20px] text-heading">
                           Newsletters
                        </Link>
                        <Link href="/deals-barometer/" className="mr-[35px] text-heading mb-[20px]">
                           Deals Barometer
                        </Link>
                     </div>
                     <div className="search-icon flex flex-col ">
                        <Link href="/search/">
                           <span className="flex items-center">
                              Search <CustomIcon name={"search"} color="#B3B3B3" className="ml-[10px]" />
                           </span>
                        </Link>
                     </div>
                  </div>

                  <div className="flex flex-col mb-[20px] max-md:gap-[20px]">
                     {!session?.loggedIn ? (
                        <a
                           className="mb-[10px] text-blue font-semibold cursor-pointer"
                           onClick={() => setModal("login")}
                        >
                           Login
                        </a>
                     ) : (
                        <div
                           href={""}
                           className={"h-[18px] w-[18px] mx-[15px] cursor-pointer"}
                           onClick={() => handleLogout()}
                        >
                           <CustomIcon name={"avatar"} color="#B3B3B3" />
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </nav>
      </>
   );
}
