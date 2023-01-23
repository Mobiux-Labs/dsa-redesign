export const logoUrl =
  "https://media.dealstreetasia.com/uploads/2019/05/logo@2x.png";

// export const sections = [
//   {
//     icon: "venture-capital.svg",
//     name: "Venture Capital",
//     link: "/venture-capital",
//   },
//   {
//     icon: "private-equity.svg",
//     name: "Private Equity",
//     link: "/private-equity",
//   },
//   { icon: "unicorns.svg", name: "Unicorns", link: "/unicorns" },
//   { icon: "people.svg", name: "People", link: "/people" },
//   { icon: "deals.svg", name: "Deals", link: "/deals" },
//   { icon: "ipo.svg", name: "IPOs & Markets", link: "/ipo" },
//   {
//     icon: "deals-barometer.svg",
//     name: "Deals Barometer",
//     link: "/deals-barometer",
//   },
// ];

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
    icon: "deals-barometer.svg",
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
];
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const username = process.env.NEXT_PUBLIC_USERNAME;
export const password = process.env.NEXT_PUBLIC_PASSWORD;
export const wpApiUrl = process.env.NEXT_PUBLIC_WP_API;
