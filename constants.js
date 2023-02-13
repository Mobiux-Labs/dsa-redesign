export const logoUrl =
   "https://media.dealstreetasia.com/uploads/2019/05/logo@2x.png";

export const sections = [
   {
      title: "Private Equity",
      slug: "private-equity",
      zone: "homepage-block-private-equity",
      link: "/section/private-equity",
      icon: "private-equity.svg",
   },
   {
      title: "Venture Capital",
      slug: "venture-capital",
      zone: "homepage-block-venture-capital",
      link: "/sectins/venture-capital",
      icon: "venture-capital.svg",
   },
   {
      title: "Unicorns",
      slug: "unicorns",
      zone: "homepage-block-unicorns",
      link: "/section/unicorns",
      icon: "unicorns.svg",
   },
   {
      title: "Q & A",
      slug: "q-a",
      zone: "homepage-block-qanda",
      link: "/section/q-a",
      icon: "ipo.svg",
   },
   {
      title: "Deals",
      slug: "deal-investment",
      zone: "homepage-block-deals",
      link: "/section/deal-investment",
      icon: "deals.svg",
   },
   {
      title: "IPOs and Markets",
      slug: "ipos",
      zone: "homepage-block-ipos-and-markets",
      link: "/section/ipos",
      icon: "ipo.svg",
   },
   {
      title: "Analysis",
      slug: "analysis",
      zone: "homepage-block-analysis",
      link: "/section/analysis",
      icon: "ipo.svg",
   },
   {
      title: "Opinion",
      slug: "opinion",
      zone: "homepage-block-opinion",
      link: "/section/opinion",
      icon: "deals.svg",
   },
   {
      title: "Policy and Regulations",
      slug: "policy-and-regulations",
      zone: "homepage-block-policy-and-regulations",
      link: "/section/policy-and-regulations",
      icon: "deals.svg",
   },
   {
      title: "People",
      slug: "people",
      zone: "homepage-block-people",
      link: "/section/people",
      icon: "people.svg",
   },
   {
      title: "Deals Barometer",
      slug: "deals-barometer",
      zone: "homepage-block-deals-barometer",
      link: "/section/deals-barometer",
      icon: "deals-barometer.svg",
   },
   {
      title: "Real Estate",
      slug: "real-estate-and-infrastructure",
      zone: "homepage-block-real-estate",
      link: "/section/real-estate",
      icon: "real-estate.svg",
   },
   {
      title: "E-commerce",
      slug: "ecommerce-consumer-internet",
      zone: "homepage-block-e-commerce",
      link: "/section/e-commerce",
      icon: "e-commerce.svg",
   },
   {
      title: "India",
      slug: "india",
      zone: "homepage-block-india",
      link: "/countries/india",
      icon: "",
   },
];

export const newsletters = {
   data_vantage: {
      name: "Data Vantage",
      slug: "data_vantage",
      description:
         "This is a web version of our twice-weekly, data-led newsletter Data Vantage. You can subscribe to it by filling in your email address below.",
   },
   vantage_point: {
      name: "Vantage Point",
      slug: "vantage_point",
      description:
         "This is the web version of our Vantage Point newsletter. Authored by Angus Mackintosh, it highlights the top trends across SE Asia’s digital economy. Get this newsletter delivered to your inbox every Monday, by filling in your email address below.",
   },
   // Daily brief is not operational yet
   daily_breif: {
      name: "Daily Brief",
      slug: "daily_brief",
      description: "",
   },
   week_that_was: {
      name: "The Week That Was",
      slug: "week_that_was",
      description:
         "You are reading the web version of The Week That Was, a Sunday newsletter in which our editors recap the most significant developments from the past seven days. You can subscribe to it by filling out your email address below",
   },
};

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const username = process.env.NEXT_PUBLIC_USERNAME;
export const password = process.env.NEXT_PUBLIC_PASSWORD;
export const wpApiUrl = process.env.NEXT_PUBLIC_WP_API;
export const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API;
export const siteKey = process.env.NEXT_PUBLIC_SITE_KEY;

// Description should be at-least 150 characters
export const categoryDesciptions = {
   "private-equity":
      "Private equity news, deals, analysis and more from DealStreetAsia",
   "venture-capital":
      "Venture capital news, deals, analysis and more from DealStreetAsia",
   unicorns: "Unicorns news, deals, analysis and more from DealStreetAsia",
   "q-a": "Q & A news, deals, analysis and more from DealStreetAsia",
   "deal-investment":
      "Deals news, deals, analysis and more from DealStreetAsia",
   ipos: "IPOs and Markets news, deals, analysis and more from DealStreetAsia",
   analysis: "Analysis news, deals, analysis and more from DealStreetAsia",
   opinion: "Opinion news, deals, analysis and more from DealStreetAsia",
   "policy-and-regulations":
      "Policy and Regulations news, deals, analysis and more from DealStreetAsia",
   people: "People news, deals, analysis and more from DealStreetAsia",
   india: "India news, deals, analysis and more from DealStreetAsia",
   china: "China news, deals, analysis and more from DealStreetAsia",
};

// Rdeirect to 404 from getServerSideProps
export const redirectTo404 = {
   notFound: true,
};
