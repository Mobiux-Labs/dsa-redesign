import Link from "next/link";
import { useModal } from "@/utils/context";

export default function Blocker({}) {
   const [modal, setModal] = useModal();
   return (
      <div
         className="text-center pt-[260px] pb-[33px] bg-blue relative top-[-110px] flex flex-col items-center justify-end
      "
         style={{
            background:
               "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 16.15%, #FFFFFF 45.31%, #FFFFFF 100%)",
         }}
      >
         <h3 className="text-darkblue text-3xl font-bold leading-[55px] mb-[15px]">Subscribe to read this story</h3>
         <Link href="/plans/" className="bg-blue text-white px-[15px] py-[10px] rounded-sm">
            Subscribe
         </Link>
         <p className="mt-[10px] font-serif">
            Already a subscriber?{" "}
            <span className="text-blue cursor-pointer" onClick={() => setModal("login")}>
               Login
            </span>
         </p>
      </div>
   );
}
