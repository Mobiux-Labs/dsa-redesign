import CustomIcon from "@/utils/icon-mapping";
import { useState, useEffect } from "react";
import { useSession } from "@/utils/context";
import { bookMarkArticle } from "@/utils/api-calls";
import { useRouter } from "next/router";
import { getUserSession } from "@/utils/user";

export default function ShareIcons({ story, bookmarked }) {
   const [session, setSession] = useSession();
   const [hoveringIcon, setHoveringIcon] = useState(false);
   const [bookmark, setBookmark] = useState(bookmarked || false);
   const router = useRouter();

   async function handleBookmark() {
      if (!session) return;
      let uri = router.query.uri;
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

   useEffect(() => {
      fetchSession();
   }, [bookmark]);

   return (
      <div className="flex gap-[30px] align-center">
         <CustomIcon
            name={"linkedin"}
            color={hoveringIcon == "linkedin" ? "#35a7df" : "#8D8D8D"}
            height={16}
            onMouseLeave={() => setHoveringIcon(false)}
            onMouseEnter={() => setHoveringIcon("linkedin")}
            className="cursor-pointer"
         />
         <CustomIcon
            name={"twitter"}
            color={hoveringIcon == "twitter" ? "#35a7df" : "#8D8D8D"}
            height={16}
            onMouseLeave={() => setHoveringIcon(false)}
            onMouseEnter={() => setHoveringIcon("twitter")}
            className="cursor-pointer"
         />
         <CustomIcon
            name={"whatsapp"}
            color={hoveringIcon == "whatsapp" ? "#35a7df" : "#8D8D8D"}
            height={16}
            onMouseLeave={() => setHoveringIcon(false)}
            onMouseEnter={() => setHoveringIcon("whatsapp")}
            className="cursor-pointer"
         />
         <CustomIcon
            name={"email"}
            color={hoveringIcon == "email" ? "#35a7df" : "#8D8D8D"}
            height={16}
            onMouseLeave={() => setHoveringIcon(false)}
            onMouseEnter={() => setHoveringIcon("email")}
            className="cursor-pointer"
         />
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
               className="cursor-pointer"
            />
         </div>
      </div>
   );
}
