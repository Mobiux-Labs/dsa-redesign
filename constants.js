export const logoUrl =
   "https://media.dealstreetasia.com/uploads/2019/05/logo@2x.png";

export const sections = [
   {
      title: "Private Equity",
      slug: "private-equity",
      zone: "homepage-block-private-equity",
      link: "/section/private-equity",
      icon: "privateEquity",
   },
   {
      title: "Venture Capital",
      slug: "venture-capital",
      zone: "homepage-block-venture-capital",
      link: "/sectins/venture-capital",
      icon: "ventureCapital",
   },
   {
      title: "Unicorns",
      slug: "unicorns",
      zone: "homepage-block-unicorns",
      link: "/section/unicorns",
      icon: "unicorns",
   },
   {
      title: "Q & A",
      slug: "q-a",
      zone: "homepage-block-qanda",
      link: "/section/q-a",
      icon: "ipo",
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
   {
      title: "Analysis",
      slug: "analysis",
      zone: "homepage-block-analysis",
      link: "/section/analysis",
      icon: "analysis",
   },
   {
      title: "Opinion",
      slug: "opinion",
      zone: "homepage-block-opinion",
      link: "/section/opinion",
      icon: "deals",
   },
   {
      title: "Policy and Regulations",
      slug: "policy-and-regulations",
      zone: "homepage-block-policy-and-regulations",
      link: "/section/policy-and-regulations",
      icon: "deals",
   },
   {
      title: "People",
      slug: "people",
      zone: "homepage-block-people",
      link: "/section/people",
      icon: "people",
   },
   {
      title: "Deals Barometer",
      slug: "deals-barometer",
      zone: "homepage-block-deals-barometer",
      link: "/section/deals-barometer",
      icon: "dealsBarometer",
   },
   {
      title: "Real Estate",
      slug: "real-estate-and-infrastructure",
      zone: "homepage-block-real-estate",
      link: "/section/real-estate",
      icon: "realEstate",
   },
   {
      title: "E-commerce",
      slug: "ecommerce-consumer-internet",
      zone: "homepage-block-e-commerce",
      link: "/section/e-commerce",
      icon: "eCommerce",
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

export const Icon = ({ name, color }) => {
   let svgMap = {
      search: `<svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path
        d="M17.8236 16.972L13.7154 12.87C15.0273 11.3394 15.6954 9.36017 15.5794 7.34754C15.4634 5.33502 14.5723 3.44566 13.0933 2.07592C11.6142 0.706217 9.66223 -0.0372521 7.64652 0.00143773C5.63109 0.0401242 3.70867 0.857892 2.28341 2.28342C0.85789 3.70881 0.0401273 5.6311 0.00143748 7.64654C-0.0372489 9.66211 0.706215 11.6142 2.07592 13.0933C3.44562 14.5723 5.33497 15.4635 7.34753 15.5794C9.36015 15.6955 11.3392 15.0274 12.87 13.7155L16.972 17.8237C17.1242 17.9757 17.3459 18.0352 17.5536 17.9795C17.7615 17.9238 17.9238 17.7615 17.9795 17.5536C18.0352 17.3459 17.9757 17.1243 17.8236 16.972ZM1.20552 7.80263C1.20552 6.05302 1.90053 4.37504 3.13771 3.13792C4.37489 1.90074 6.0527 1.20572 7.80241 1.20572C9.55212 1.20572 11.23 1.90074 12.4671 3.13792C13.7043 4.3751 14.3993 6.05292 14.3993 7.80263C14.3993 9.55235 13.7043 11.2302 12.4671 12.4674C11.2299 13.7045 9.55212 14.3995 7.80241 14.3995C6.0527 14.3995 4.37482 13.7045 3.13771 12.4674C1.90053 11.2302 1.20552 9.55235 1.20552 7.80263Z"
        fill="#BDBDBD"
      />
    </svg>
    `,
      location: `<svg
    width="13"
    height="18"
    viewBox="0 0 13 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
   <path
      d="M6.46714 16.8765C6.51978 16.9538 6.60681 17 6.6997 17C6.79271 17 6.87974 16.9538 6.93238 16.8765C6.96412 16.8275 10.2957 11.8722 11.4839 9.87724C12.0682 8.94002 12.3844 7.85818 12.3975 6.75088C12.3955 5.22622 11.7945 3.76452 10.7262 2.6866C9.65795 1.60867 8.20955 1.002 6.69876 1C5.18792 1.00201 3.73947 1.60856 2.67131 2.6866C1.60316 3.76464 1.00198 5.22628 1 6.75088C1.01349 7.85738 1.32968 8.93856 1.91367 9.87524C3.10758 11.8702 6.43344 16.8253 6.46713 16.8762L6.46714 16.8765ZM6.69882 1.56582C8.06093 1.56783 9.36675 2.11478 10.3299 3.08668C11.2931 4.0587 11.835 5.37647 11.837 6.751C11.8229 7.75327 11.5344 8.73212 11.0037 9.57926C10.0022 11.2536 7.47793 15.0474 6.70618 16.2068C5.92886 15.0434 3.40263 11.2534 2.40865 9.57926H2.40854C1.8725 8.73366 1.5789 7.75473 1.56032 6.751C1.56231 5.37644 2.10431 4.05867 3.06741 3.08668C4.03061 2.11475 5.33644 1.56782 6.69851 1.56582H6.69882Z"
      fill=${color}
      stroke="color"
      stroke-width="0.2"
      stroke-linejoin="round"
    />
   <path
      d="M6.66251 7.85854C7.26319 7.85854 7.83937 7.61773 8.2641 7.18911C8.68893 6.7604 8.92755 6.17905 8.92755 5.57287C8.92755 4.9666 8.68893 4.38524 8.2641 3.95653C7.83937 3.52792 7.26319 3.28711 6.66251 3.28711C6.06183 3.28711 5.48564 3.52792 5.06091 3.95653C4.63609 4.38524 4.39746 4.9666 4.39746 5.57287C4.39829 6.17876 4.6372 6.75974 5.06183 7.18818C5.4864 7.61663 6.06202 7.8577 6.66251 7.85854ZM6.66251 3.75989V3.75998C7.13893 3.75998 7.59585 3.95097 7.93275 4.29087C8.26964 4.63085 8.4589 5.09195 8.4589 5.57282C8.4589 6.0536 8.26964 6.5147 7.93275 6.85468C7.59585 7.19465 7.13893 7.38564 6.66251 7.38564C6.18609 7.38564 5.72917 7.19465 5.39227 6.85468C5.05537 6.5147 4.86612 6.0536 4.86612 5.57282C4.86649 5.09214 5.05593 4.63123 5.39274 4.29135C5.72954 3.95154 6.18618 3.76039 6.66251 3.76V3.75989Z"
      fill="#999999"
      stroke="#999999"
      stroke-width="0.2"
      stroke-linejoin="round"
    />
   </svg>
   `,
   };

   return (
      <div
         dangerouslySetInnerHTML={{
            __html: svgMap[name].replace("${color}", color),
         }}
      />
   );
};
