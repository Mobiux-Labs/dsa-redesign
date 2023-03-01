import { NewsArticleJsonLd } from "next-seo";

export default function ArticleJsonLdComponent({ article, isFree = true }) {
   const getFormattedAuthorData = () =>
      article?.authors.map((author) => {
         return { name: author?.display_name, url: author?.url };
      });

   return (
      <NewsArticleJsonLd
         url={article?.post_url}
         title={article?.post_title}
         datePublished={article?.post_date}
         dateModified={article?.post_date}
         publisherName="DealStreetAsia"
         publisherLogo="https://www.dealstreetasia.com/wp-content/uploads/2020/09/DSA-Logo-1.png"
         images={[article?.image_url]}
         description={article?.post_excerpt}
         authorName={getFormattedAuthorData()}
         isAccessibleForFree={article?.premium || isFree}
         section={article?.category?.name}
      />
   );
}
