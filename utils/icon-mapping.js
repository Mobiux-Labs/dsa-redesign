import { arrow } from "@/components/icons/arrow";
import { avatar } from "@/components/icons/avatar";
import { bookmark } from "@/components/icons/bookmark";
import { close } from "@/components/icons/close";
import { deals } from "@/components/icons/deals";
import { dealsBarometer } from "@/components/icons/deals-barometer";
import { download } from "@/components/icons/download";
import { dropdown } from "@/components/icons/dropdown";
import { eCommerce } from "@/components/icons/e-commerce";
import { email } from "@/components/icons/email";
import { facebook } from "@/components/icons/facebook";
import { google } from "@/components/icons/google";
import { instagram } from "@/components/icons/instagram";
import { ipo } from "@/components/icons/ipo";
import { linkedin } from "@/components/icons/linkedin";
import { location } from "@/components/icons/location";
import { nikkeiLogo } from "@/components/icons/nikkei-logo";
import { people } from "@/components/icons/people";
import { privateEquity } from "@/components/icons/private-equity";
import { realEstate } from "@/components/icons/real-estate";
import { search } from "@/components/icons/search";
import { star } from "@/components/icons/star";
import { swipeController } from "@/components/icons/swipe-controller";
import { twitter } from "@/components/icons/twitter";
import { unicorns } from "@/components/icons/unicorns";
import { ventureCapital } from "@/components/icons/venture-capital";
import { whatsapp } from "@/components/icons/whatsapp";
import { lineArrowDown } from "@/components/icons/line-arrow-down";

const icons = {
   arrow: arrow,
   avatar: avatar,
   bookmark: bookmark,
   close: close,
   deals: deals,
   dealsBarometer: dealsBarometer,
   download: download,
   dropdown: dropdown,
   eCommerce: eCommerce,
   email: email,
   facebook: facebook,
   google: google,
   instagram: instagram,
   ipo: ipo,
   linkedin: linkedin,
   location: location,
   nikkeiLogo: nikkeiLogo,
   people: people,
   privateEquity: privateEquity,
   realEstate: realEstate,
   search: search,
   star: star,
   swipeController: swipeController,
   twitter: twitter,
   unicorns: unicorns,
   ventureCapital: ventureCapital,
   whatsapp: whatsapp,
   lineArrowDown: lineArrowDown,
};

function replaceFillAndStroke(svgCode, color, dontReplaceColor = false) {
   if (!svgCode) {
      console.log("svgCode is undefined");
      return "";
   }
   if (dontReplaceColor) {
      return svgCode;
   }
   const fillRegex = /fill="[^"]*"/g;
   const strokeRegex = /stroke="[^"]*"/g;
   const newSvgCode = svgCode
      .replace(fillRegex, `fill="${color}"`)
      .replace(strokeRegex, `stroke="${color}"`);
   const trimmedSvgCode = newSvgCode.replace(/;+$/, "");
   return trimmedSvgCode.replace(/;+$/, "");
}

export default function CustomIcon({
   name,
   color,
   width,
   height,
   dontReplaceColor = false,
   className = "",
}) {
   return (
      <div className={`h-${height} w-${width}`}>
         <div
            dangerouslySetInnerHTML={{
               __html: replaceFillAndStroke(
                  icons[name],
                  color,
                  dontReplaceColor
               ),
            }}
            className={className}
         />
      </div>
   );
}