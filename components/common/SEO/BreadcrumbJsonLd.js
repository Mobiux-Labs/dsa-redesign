import { baseUrl } from "@/constants";
import { BreadcrumbJsonLd } from "next-seo";

export default function BreadcrumbJsonLdComponent({ pageUrl, title }) {
   function extractSecondPart(url) {
      let secondPart =
         url
            .split("/")[3]
            .replace("-", " ")
            .split("/")[0]
            .charAt(0)
            .toUpperCase() +
         url.split("/")[3].replace("-", " ").split("/")[0].slice(1);
      let urlUpToSecondSegment =
         url.split("/")[0] + "//" + url.split("/")[2] + "/" + url.split("/")[3];
      return {
         secondPart: secondPart,
         urlUpToSecondSegment: urlUpToSecondSegment,
      };
   }

   return (
      <BreadcrumbJsonLd
         itemListElements={[
            {
               position: 1,
               name: "Home",
               item: baseUrl,
            },
            {
               position: 2,
               name: extractSecondPart(pageUrl).secondPart,
               item: extractSecondPart(pageUrl).urlUpToSecondSegment,
            },
            {
               position: 3,
               name: title,
               item: pageUrl,
            },
         ]}
      />
   );
}
