import { baseUrl } from "@/constants";
import Link from "next/link";

export default function Tags({ tags, className }) {
   return (
      <div className={`${className} flex gap-[10px] items-center flex-wrap`}>
         {tags.map((tag, index) => (
            <Link
               key={index}
               href={`/tag/${tag?.slug}`}
               className="bg-bluebadgebg font-serif px-[15px] text-content text-lg leading-[28px] py-[5px] whitespace-nowrap rounded-sm"
            >
               {tag?.name}
            </Link>
         ))}
      </div>
   );
}
