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
   daily_brief: {
      name: "The Daily Brief",
      slug: "daily_brief",
      description:
         "All our headlines in a 24 hour cycle, covering the most significant developments in SE Asia, India, Greater China and the World, crunched into one neat email sent to you at the top of the morning. This is a daily newsletter, with the exception of a Sunday run.",
   },
   data_vantage: {
      name: "Data Vantage",
      slug: "data_vantage",
      description:
         "A twice-weekly, data-led newsletter that will keep you abreast of the region’s constantly evolving markets and shed light on the most important and regionally relevant deal and investment developments through the expert lens of the DATA VANTAGE team.",
   },
   week_that_was: {
      name: "The Week That Was",
      slug: "week_that_was",
      description:
         "Our editors recap the most significant developments and perspectives that come to the fore after the closing of a week, and wind it into a single narrative fit for a one-glance consumption.",
   },
   vantage_point: {
      name: "Vantage Point",
      slug: "vantage_point",
      description:
         "Authored by Angus Mackintosh, this weekly newsletter highlights top developments and trends across Southeast Asia's digital economy and ecosystem, without losing sight of the solid links between the online and offline worlds.",
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

export const regions = [
   { value: "asia", label: "Asia" },
   { value: "india", label: "India" },
   { value: "china", label: "China" },
   { value: "southeast-asia", label: "Southeast Asia" },
];

export const categories = [
   { value: "private-equity", label: "Private Equity" },
   { value: "venture-capital", label: "Venture Capital" },
   { value: "unicorns", label: "Unicorns" },
   { value: "q-a", label: "Q & A" },
   { value: "deal-investment", label: "Deals" },
   { value: "ipos", label: "IPOs" },
   { value: "analysis", label: "Analysis" },
];
