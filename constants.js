export const logoUrl =
   "https://media.dealstreetasia.com/uploads/2019/05/logo@2x.png";

// For the section bar on the top, DO NOT USE IT FOR ANYTHING ELSE
export const sections = [
   {
      title: "Venture Capital",
      slug: "venture-capital",
      zone: "homepage-block-venture-capital",
      link: "/section/venture-capital",
      icon: "ventureCapital",
   },
   {
      title: "Private Equity",
      slug: "private-equity",
      zone: "homepage-block-private-equity",
      link: "/section/private-equity",
      icon: "privateEquity",
   },
   {
      title: "Unicorns",
      slug: "unicorns",
      zone: "homepage-block-unicorns",
      link: "/section/unicorns",
      icon: "unicorns",
   },
   {
      title: "People",
      slug: "people",
      zone: "homepage-block-people",
      link: "/section/people",
      icon: "people",
   },
   {
      title: "Deals",
      slug: "deal-investment",
      zone: "homepage-block-deals",
      link: "/section/deal-investment",
      icon: "deals",
   },
   {
      title: "IPOs and Markets",
      slug: "ipos",
      zone: "homepage-block-ipos-and-markets",
      link: "/section/ipos",
      icon: "ipo",
   },
   // NOTE SURE IF SECTION EXISTS
   // {
   //    title: "Deals Barometer",
   //    slug: "deals-barometer",
   //    zone: "homepage-block-deals-barometer",
   //    link: "/section/deals-barometer",
   //    icon: "dealsBarometer",
   // },
   {
      title: "Real Estate",
      slug: "real-estate-and-infrastructure",
      zone: "homepage-block-real-estate",
      link: "/sector/real-estate-and-infrastructure",
      icon: "realEstate",
   },
   {
      title: "E-commerce",
      slug: "ecommerce-consumer-internet",
      zone: "homepage-block-e-commerce",
      link: "/sector/ecommerce-consumer-internet",
      icon: "eCommerce",
   },
   {
      title: "Opinion",
      slug: "opinion",
      zone: "homepage-block-opinion",
      link: "/section/opinion",
      icon: "opinion",
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
   { value: "Singapore", label: "Singapore" },
   { value: "india", label: "India" },
   { value: "china-hk", label: "Greater China" },
   { value: "indonesia", label: "Indonesia" },
   { value: "malaysia", label: "Malaysia" },
   { value: "myanmar", label: "Myanmar" },
   { value: "rest-of-asia", label: "Rest of Asia" },
   { value: "philippines", label: "Philippines" },
   { value: "southeast-asia", label: "Southaast Asia" },
   { value: "thailand", label: "Thailand" },
   { value: "vietnam", label: "Vietnam" },
   { value: "international", label: "World" },
];

export const categories = [
   { value: "private-equity", label: "Private Equity", type: "section" },
   { value: "venture-capital", label: "Venture Capital", type: "section" },
   { value: "q-a", label: "Q & A", type: "section" },
   {
      value: "policy-and-regulations",
      label: "Policy and Regulations",
      type: "section",
   },
   { value: "people", label: "People", type: "section" },
   { value: "opinion", label: "Opinion", type: "section" },
   { value: "ipos", label: "IPOs and Markets", type: "section" },
   {
      value: "indonesia-pe-vc-summit-2022",
      label: "Indonesia PE-VC Summit 2022",
      type: "section",
   },
   {
      value: "indonesia-pe-vc-summit-2021",
      label: "Indonesia PE-VC Summit 2021",
      type: "section",
   },
   { value: "deal-investment", label: "Deals", type: "section" },
   { value: "covid-19-ripple", label: "COVID-19", type: "section" },
   { value: "analysis", label: "Analysis", type: "section" },
   { value: "consumer-and-brands", label: "Consumer & Brands", type: "sector" },
   {
      value: "ecommerce-consumer-internet",
      label: "E-Commerce & Internet Economy",
      type: "sector",
   },
   { value: "financial-services", label: "Financial Services", type: "sector" },
   {
      value: "real-estate-and-infrastructure",
      label: "Real Estate & Infrastructure",
      type: "sector",
   },
   { value: "technology", label: "Technology", type: "sector" },
   { value: "deal-monitors", label: "Deal Monitors", type: "story-section" },
   {
      value: "data-led-stories",
      label: "Data-Led Stories",
      type: "story-section",
   },
];
