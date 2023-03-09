import { loader, trimUrl } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

export default function TrendingUnderTag({ stories }) {
   return (
      <div className="mt-[40px]">
         <h2 className="text-heading mb-[25px] font-bold leading-[55px] text-3xl">Trending</h2>
         <div className="grid grid-cols-2 grid-rows-2 gap-[22px]">
            {stories.slice(0, 4).map((story, index) => (
               <div key={index} className="shadow-plancard rounded-md overflow-hidden">
                  <Link href={trimUrl(story?.post_url)}>
                     <Image
                        src={story?.image_url}
                        height={239}
                        width={389}
                        loader={loader}
                        className="min-h-[239px] max-h-[239px]"
                     />
                     <div className="py-[30px] px-[23px]">
                        <p className="font-serif text-lg text-content leading-[28px]">{story?.post_excerpt}</p>
                     </div>
                  </Link>
               </div>
            ))}
         </div>
         <Link href="/stories" className="text-darkblue font-serif text-lg leading-[28px] block text-right mt-[30px]">
            More Stories
         </Link>
      </div>
   );
}
