import CustomIcon from "@/utils/icon-mapping";
import { useState, useEffect } from "react";
import { useSession } from "@/utils/context";
import { bookMarkArticle } from "@/utils/api-calls";
import { useRouter } from "next/router";
import { getUserSession } from "@/utils/user";
import {
   TwitterShareButton,
   LinkedinShareButton,
   WhatsappShareButton,
   EmailShareButton,
} from "next-share";
import { baseUrl } from "@/constants";

export default function ShareIcons({ story, bookmarked }) {
   const [session, setSession] = useSession();
   const [hoveringIcon, setHoveringIcon] = useState(false);
   const [bookmark, setBookmark] = useState(bookmarked || false);
   const [isAnimating, setIsAnimating] = useState(false);
   const router = useRouter();
   const pageUrl = `${baseUrl}/${router.asPath.split("?")[0]}`;

   async function handleBookmark() {
      if (!session) return;
      startAnimation();
      let uri = router.asPath.split("/")[2];
      let res = await bookMarkArticle(
         session.email,
         uri,
         story?.post_slug,
         story?.id,
         story?.post_type,
         story?.post_title,
         story?.premium
      );
      if (res) setBookmark(!bookmark);
   }

   async function fetchSession() {
      let session = await getUserSession();
      setSession(session);
      setBookmark(session?.bookmarked);
   }

   function startAnimation() {
      setIsAnimating(true);
      setTimeout(() => {
         setIsAnimating(false);
      }, 600);
   }

   useEffect(() => {
      fetchSession();
   }, [bookmark]);

   return (
      <div className="flex gap-[30px] align-center">
         <LinkedinShareButton url={pageUrl}>
            <CustomIcon
               name={"linkedin"}
               color={hoveringIcon == "linkedin" ? "#35a7df" : "#8D8D8D"}
               height={16}
               onMouseLeave={() => setHoveringIcon(false)}
               onMouseEnter={() => setHoveringIcon("linkedin")}
               className="cursor-pointer"
            />
         </LinkedinShareButton>
         <TwitterShareButton url={pageUrl} title={story?.post_title}>
            <CustomIcon
               name={"twitter"}
               color={hoveringIcon == "twitter" ? "#35a7df" : "#8D8D8D"}
               height={16}
               onMouseLeave={() => setHoveringIcon(false)}
               onMouseEnter={() => setHoveringIcon("twitter")}
               className="cursor-pointer"
            />
         </TwitterShareButton>
         <WhatsappShareButton url={pageUrl} title={story?.post_title}>
            <CustomIcon
               name={"whatsapp"}
               color={hoveringIcon == "whatsapp" ? "#35a7df" : "#8D8D8D"}
               height={16}
               onMouseLeave={() => setHoveringIcon(false)}
               onMouseEnter={() => setHoveringIcon("whatsapp")}
               className="cursor-pointer"
            />
         </WhatsappShareButton>
         <EmailShareButton url={pageUrl} subject={story?.post_title}>
            <CustomIcon
               name={"email"}
               color={hoveringIcon == "email" ? "#35a7df" : "#8D8D8D"}
               height={16}
               onMouseLeave={() => setHoveringIcon(false)}
               onMouseEnter={() => setHoveringIcon("email")}
               className="cursor-pointer"
            />
         </EmailShareButton>
         <CustomIcon
            name={"download"}
            color={hoveringIcon == "download" ? "#35a7df" : "#8D8D8D"}
            height={16}
            onMouseLeave={() => setHoveringIcon(false)}
            onMouseEnter={() => setHoveringIcon("download")}
            className="cursor-pointer"
         />
         <div onClick={() => handleBookmark()}>
            <CustomIcon
               name={"bookmark"}
               color={bookmark ? "#35a7df" : "#8D8D8D"}
               height={16}
               onMouseLeave={() => setHoveringIcon(false)}
               onMouseEnter={() => setHoveringIcon("bookmark")}
               className={`cursor-pointer ${
                  isAnimating ? "animate_bookmark" : ""
               }`}
            />
         </div>
      </div>
   );
}
