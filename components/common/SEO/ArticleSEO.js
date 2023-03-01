import { NextSeo } from "next-seo";

export default function ArticleSEO({ article }) {
   const getFormattedAuthorData = () =>
      article?.authors.map((author) => {
         return { name: author?.display_name, url: author?.url };
      });

   return (
      <NextSeo
         title={article?.post_title}
         description={article?.post_excerpt}
         canonical={article?.post_url}
         openGraph={{
            url: article?.post_url,
            title: article?.post_title,
            description: article?.post_excerpt,
            images: [
               {
                  url: article?.image_url,
                  width: 800,
                  height: 600,
                  alt: article?.post_title,
               },
            ],
            article: {
               publishedTime: article?.post_date,
               authors: getFormattedAuthorData(),
               section: article?.category?.name,
            },
            siteName: "DealStreetAsia",
         }}
         twitter={{
            handle: "@DealStreetAsia",
            site: "@DealStreetAsia",
            cardType: "summary_large_image",
         }}
      />
   );
}
