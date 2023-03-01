import { DefaultSeo } from "next-seo";

export default function DefaultHead() {
   return (
      <DefaultSeo
         title="DealStreetAsia - Asia focused financial news and intelligence platform"
         openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://www.dealstreetasia.com/",
            site_name: "DealStreetAsia",
         }}
         twitter={{
            handle: "@DealStreetAsia",
            site: "@DealStreetAsia",
            cardType: "summary_large_image",
         }}
         themeColor="#35a7df"
      />
   );
}
