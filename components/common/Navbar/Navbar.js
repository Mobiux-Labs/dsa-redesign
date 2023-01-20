import { logoUrl } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="px-[120px] shadow-3xl flex items-center h-[80px]">
      <div className="logo mr-[30px]">
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
            href="data.dealstreetasia.com"
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
          <Link
            href="data.dealstreetasia.com"
            className="mr-[35px] text-darkblue"
          >
            Newsletters
          </Link>
        </div>
        <div className="search-icon">
          <Image
            src="/icons/search.svg"
            alt="Search Icon"
            height={18}
            width={18}
          />
        </div>
      </div>
      {/* Divider */}
      <div className="bg-lightgray h-[38px] w-[1px] ml-[25px]"></div>
      {/* Login/Subscribe buttons */}
      <div>
        <Link href="/login" className="mx-[25px] text-blue font-semibold">
          Login
        </Link>
        <Link
          href="/user/plans"
          className="bg-blue text-white px-[15px] py-[10px] rounded-sm"
        >
          Subscribe
        </Link>
      </div>
    </div>
  );
}
