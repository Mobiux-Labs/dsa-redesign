import { logoUrl } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { useSession, useModal } from "@/utils/context";
import { logoutUser } from "@/utils/auth";
import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@/public/icons/search.svg";

export default function Navbar({ intialSession }) {
   const [session, setSession] = useSession();
   const [modal, setModal] = useModal();
   const router = useRouter();

   async function handleLogout() {
      const res = await logoutUser();
      if (!res) return;
      setSession(null);
   }

   useEffect(() => {
      setSession(intialSession);
   }, [intialSession]);

   return (
      <div className="px-[120px] shadow-3xl flex items-center h-[80px] bg-white">
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
            <div className="nav-links flex">
               <Link
                  href="data.dealstreetasia.com"
                  className="mr-[35px] text-darkblue"
               >
                  Data Vantage
               </Link>
               <Link
                  href="/partner-content/"
                  className="mr-[35px] text-darkblue"
               >
                  Partner Content
               </Link>
               <Link
                  href="data.dealstreetasia.com"
                  className="mr-[35px] text-darkblue"
               >
                  Events
               </Link>
               <Link
                  href="data.dealstreetasia.com"
                  className="mr-[35px] text-darkblue"
               >
                  Reports
               </Link>
               <Link href="/newsletters" className="mr-[35px] text-darkblue">
                  Newsletters
               </Link>
            </div>
            <div className="search-icon">
               <Link href="/search/">
                  <Image
                     src={SearchIcon}
                     alt="Search Icon"
                     height={18}
                     width={18}
                  />
               </Link>
            </div>
         </div>
         {/* Divider */}
         <div className="bg-lightgray h-[38px] w-[1px] ml-[25px]"></div>
         {/* Login/Subscribe buttons */}
         <div className="flex items-center">
            {/* Show login button if not loggedin */}
            {!session?.loggedIn ? (
               <a
                  className="mx-[25px] text-blue font-semibold cursor-pointer"
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
                  <img
                     src="/icons/avatar.svg"
                     alt="User"
                     className="block z-[10]"
                  />
               </div>
            )}
            {/* Show subscribe button only if user is not subscribed */}
            {!session?.subscribed ? (
               <Link
                  href="/user/plans"
                  className="bg-blue text-white px-[15px] py-[10px] rounded-sm"
               >
                  Subscribe
               </Link>
            ) : null}
         </div>
      </div>
   );
}
