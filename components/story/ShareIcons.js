import CustomIcon from "@/utils/icon-mapping";
import { useState } from "react";

export default function ShareIcons({ story }) {
   const [hoveringIcon, setHoveringIcon] = useState(false);
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
         <CustomIcon
            name={"bookmark"}
            color={hoveringIcon == "bookmark" ? "#35a7df" : "#8D8D8D"}
            height={16}
            onMouseLeave={() => setHoveringIcon(false)}
            onMouseEnter={() => setHoveringIcon("bookmark")}
            className="cursor-pointer"
         />
      </div>
   );
}
