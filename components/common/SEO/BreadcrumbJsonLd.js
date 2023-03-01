import BreadCrumbJsonLd from "next-seo/lib/jsonld/breadcrumb";

export default function BreadcrumbJsonLdComponent({ pageUrl }) {
   return (
      <BreadCrumbJsonLd
         itemListElements={[
            {
               position: 1,
               name: "Home",
               item: "https://www.dealstreetasia.com/",
            },
            {
               position: 2,
            },
         ]}
      />
   );
}
