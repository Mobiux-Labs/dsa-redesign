export const logoUrl = "https://media.dealstreetasia.com/uploads/2019/05/logo@2x.png";

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
   {
      title: "Deal Monitors",
      slug: "deal-monitors",
      zone: "homepage-block-deal-monitors",
      link: "/story-section/deal-monitors",
      icon: "dealsBarometer",
   },
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
   {
      title: "Data Stories",
      slug: "data-led-stories",
      zone: "homepage-block-data-led-stories",
      link: "/story-section/data-led-stories",
   },
   {
      title: "Deal Monitors",
      slug: "deal-monitors",
      zone: "homepage-block-deal-monitors",
      link: "/story-section/deal-monitors",
   },
];

export const newsletters = {
   daily_brief: {
      name: "The Daily Brief",
      slug: "daily_brief",
      description:
         "All our headlines in a 24 hour cycle, covering the most significant developments in SE Asia, India, Greater China and the World, crunched into one neat email sent to you at the top of the morning. This is the daily newsletter, with the exception of a sunday run.",
   },
   data_vantage: {
      name: "Data Vantage",
      slug: "data_vantage",
      description:
         "This is a web version of our twice-weekly, data-led newsletter Data Vantage. You can subscribe to it by filling in your email address below.",
   },
   week_that_was: {
      name: "The Week That Was",
      slug: "week_that_was",
      description:
         "You are reading the web version of The Week That Was, a Sunday newsletter in which our editors recap the most significant developments from the past seven days. You can subscribe to it by filling out your email address below",
   },
   vantage_point: {
      name: "Vantage Point",
      slug: "vantage_point",
      description:
         "This is the web version of our Vantage Point newsletter. Authored by Angus Mackintosh, it highlights the top trends across SE Asia’s digital economy. Get this newsletter delivered to your inbox every Monday, by filling in your email address below.",
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
   "private-equity": "Private equity news, deals, analysis and more from DealStreetAsia",
   "venture-capital": "Venture capital news, deals, analysis and more from DealStreetAsia",
   unicorns: "Unicorns news, deals, analysis and more from DealStreetAsia",
   "q-a": "Q & A news, deals, analysis and more from DealStreetAsia",
   "deal-investment": "Deals news, deals, analysis and more from DealStreetAsia",
   ipos: "IPOs and Markets news, deals, analysis and more from DealStreetAsia",
   analysis: "Analysis news, deals, analysis and more from DealStreetAsia",
   opinion: "Opinion news, deals, analysis and more from DealStreetAsia",
   "policy-and-regulations": "Policy and Regulations news, deals, analysis and more from DealStreetAsia",
   people: "People news, deals, analysis and more from DealStreetAsia",
   india: "India news, deals, analysis and more from DealStreetAsia",
   china: "China news, deals, analysis and more from DealStreetAsia",
};

// Rdeirect to 404 from getServerSideProps
export const redirectTo404 = {
   notFound: true,
};

export const regions = [
   { value: "singapore", label: "Singapore" },
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
   { value: "unicorns", label: "Unicorns", type: "section" },
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

export const defaultNlToSubscribe = process.env.NEXT_PUBLIC_DEFAULT_NL_TO_SUBSCRIBE;

export const basicPlanDetails = [
   "Premium News Subscription",
   "Daily Brief Newsletter (Monday to Saturday)",
   "Priority Access to Subscriber Special Events",
   "Twice weekly <a href='data-vantage'>Data Vantage</a> newsletter",
];

export const proPlanDetails = [
   "Premium News Subscription",
   "Daily Brief Newsletter (Monday to Saturday)",
   "Priority Access to Subscriber Special Events",
   "Twice weekly <a href='data-vantage'>Data Vantage</a> newsletter",
   "Deal Monitors (India / China / SEA)",
   "4 new Reports per month",
   "Track competition and industries",
   "Key financials of ~2,000 venture backed companies registered in Singapore",
];

export const faqs = [
   {
      question: "What is DealStreetAsia – Basic?",
      answer: `DealStreetAsia – Basic provides deal news and perspectives on some of Asia’s most opaque markets to international and regional investors. We also track startups that are disrupting the status quo and playing an important role in the evolution of one of the fastest-growing regions of the world. Over the last five years, we have differentiated ourselves in an aggregation-dominated market, with the depth and width of our stories.`,
   },
   {
      question: "What is DealStreetAsia – Professional?",
      answer: `DealStreetAsia - Professional provides you access to data from regulatory filings. Funding rounds, valuations and cap tables for privately held companies. The current database sources information for Singapore registered companies and data comes from ACRA. In addition to the database, you can read original research that helps business leaders make learned, strategic decisions. Our reports reveal insights on trends seen in private deals and markets across Southeast Asia, China and India.`,
   },
   {
      question: "What kind of reports does DealStreetAsia – Professional do?",
      answer: `Besides reports that track deals across the region, we also do thematic reports that details the businesses, growth and challenges within the private equity and venture capital ecosystems we cover. <br/> Our current segmentation is as follows – <br/> <ul><li>Periodic deal reviews (within a year)</li><li>Theme/Sector-focussed reports</li><li>FAnnual review & projections</li><li>Annual review & projections</li></ul>`,
   },
   {
      question: "What do DealStreetAsia – Basic subscribers get?",
      answer: `DealStreetAsia - Basic caters to your most immediate business requirements. We offer – <br/> <ul><li>Unlimited access to exclusive content and archives</li><li>Discount to DealStreetAsia's PE-VC Summit Standard Tickets</li><li>Priority & Free registration to Subscriber Special events</li></ul>`,
   },
   {
      question: "What do DealStreetAsia – Professional subscribers get?",
      answer: `DealStreetAsia - Professional brings you an array of benefits – <br/><ul><li>Discount to DealStreetAsia's PE-VC Summit Standard Tickets</li><li>Full access to DealStreetAsia’s premium reportage</li><li>Daily Brief newsletter (Monday to Saturday)</li><li>Priority Access to Subscriber Special Events</li><li>
      Deal Monitors (India / China/ SEA)</li><li>4 new research reports per month</li><li>Twice-weekly DATA VANTAGE newsletter</li><li>Exclusive Data-led Stories</li><li>Key financials of ~2,000s of Asian venture-backed companies registered in SG</li><li>Track competitors and industries.</li></ul> `,
   },
   {
      question: "Can I trial DealStreetAsia – Basic?",
      answer: `You can buy a 1 month starter plan for $52.`,
   },
   {
      question: "Can I trial DealStreetAsia – Professional?",
      answer: `You can buy a 1 month trial subscription for $208*. <br/>You can also sample an extensive and in-depth report for free.`,
   },
   {
      question: "I am a Basic subscriber, how can I access DealStreetAsia – Professional products ?",
      answer: `Log into your account and click to view your personal user dashboard. You will see an option to upgrade your subscription to DealStreetAsia – Professional. Click on that link to view the top up options listed for you to upgrade. Pick up a suitable plan to access DealStreetAsia – Professional.`,
   },
   {
      question: "What are my payment options?",
      answer: `You can pay for your subscription online with a credit card. An invoice will be sent to you by email. <br/>
      We also accept payment via PayPal, Stripe & Online Banking. Write to us at <a href="mailto:subs@dealstreetasia.com">subs@dealstreetasia.com</a> with your preferred package and payment method.`,
   },
   {
      question: "My payment is not going through, what can I do?",
      answer: `Please write to us at <a href="mailto:subs@dealstreetasia.com">subs@dealstreetasia.com</a> detailing the payment error or queries.`,
   },
   {
      question: "What is your policy on cancellations and refunds?",
      answer: `To cancel your subscription, contact our subscription services team at <a href="mailto:subs@dealstreetasia.com">subs@dealstreetasia.com</a>. Unless circumstances of the purchase are erroneous and extraordinary, a refund will not be issued. But, you can transfer your account to anyone at any point during the tenure of your subscription. Please confirm transference by writing to us first.<br/>
      To find out more, please refer to our Terms and Conditions.`,
   },
   {
      question: "How do I avail Asia PE-VC Summit discounts from one/two/three year packages?",
      answer: `You will receive a promotional code with the welcome e-mail post purchase, which you can then use on eligible events.<br/>
      Please remember that the purchase is to be made by using the same registered email address attached to your DealStreetAsia - Basic subscription.<br/>
      Our admin holds the right to revoke any subscriber discounted ticket purchased with an email address not in our subscription database`,
   },
   {
      question: "How does auto-renewal work?",
      answer: `We charge your credit card with the existing plan on your user account at the end of the subscription cycle, to enable a new cycle. <br/>
      We send an email prompt to your account 7 days prior to the date of subscription renewal for cancellation. If cancellation is not opted for, we assume the subscriber wants to continue with their subscription.`,
   },
];

export const aboutUsFeatures = [
   {
      title: "In-depth Coverage",
      description:
         "Through the depth and width of our coverage, we have differentiated ourselves in an aggregation- dominated market, and provided deal engineers across the industry a competitive edge. We have addressed the imbalance in reportage on companies from this demographically diverse and challenging region, which has frequently been underserved by the media - both international and regional.",
   },
   {
      title: "Flagship events",
      description:
         "Our flagship annual event the Asia PE-VC Summit is held in Singapore, and has quickly gained a reputation for being one of the most sought after gatherings of principals from the world of private capital investing, and startups in the region. Apart from content that gets to the heart of the most vital themes and discussions animating the industry, the Asia PE-VC Summit has established itself as a vital networking opportunity.",
   },
   {
      title: "Diversity and Inclusion",
      description:
         "We provide deals data, intelligence, and perspective on some of the world's most opaque markets. Our editorial coverage tracks private asset classes (PE, VC, debt) and the arc of startups & unicorns that are disrupting the status quo, and have played a pivotal role in formalising the economies of the countries that they operate in.",
   },
   {
      title: "Deep Dives",
      description:
         "DealStreetAsia's offering has expanded to include Data Vantage: a research and analytics practice, which provides in-depth reports on companies and sectors at the vanguard of private capital funding in the region; quarterly tracking of Asia's most significant investments; and access to valuations and key financials of Southeast Asia-based venture backed companies.",
   },
   {
      title: "Branded Content",
      description:
         "We also have a range of branded content and advertising solutions - including custom research, webinars, and articles to help our partners reach our audience of decision makers from the world of private equity, venture capital, and startup",
   },
   {
      title: "Ethical Journalism",
      description:
         "Our breaking stories have been followed by all leading media, including Bloomberg, Reuters, CNBC, TechCrunch, and Business Times, among others.",
   },
];

export const jobs = [
   {
      title: "Senior Reporter",
      team: "Editorial and Research",
      location: "Singapore",
   },
   {
      title: "Reporter",
      team: "Editorial and Research",
      location: "Singapore",
   },
   {
      title: "Research Analyst",
      team: "Editorial and Research",
      location: "Singapore",
   },
   {
      title: "Data Analyst",
      team: "Editorial and Research",
      location: "Singapore",
   },
   {
      title: "Editorial Intern",
      team: "Editorial and Research",
      location: "Singapore",
   },
];

export const careerFeatures = [
   {
      title: "Cultural Diversity",
      icon: "culturalDiversity",
      description:
         "We are a diverse team of people from different backgrounds, cultures, and nationalities. We believe that diversity is a strength and we are committed to creating an inclusive environment for all our employees.",
   },
   {
      title: "Openness & Integrity",
      icon: "openness",
      description:
         "We are open to new ideas and opinions. We believe in transparency and honesty in our work and relationships. We are committed to doing the right thing, even when it is difficult.",
   },
   {
      title: "Collectively Vested",
      icon: "collectivelyVested",
      description:
         "We are a team of people who are collectively vested in the success of the company. We are committed to working together to achieve our goals.",
   },
   {
      title: "Quality over Quantity",
      icon: "quality",
      description:
         "We are committed to producing high-quality work. We are focused on delivering value to our customers and stakeholders.",
   },
   {
      title: "Grow as you go",
      icon: "plant",
      description:
         "We are committed to the growth and development of our employees. We provide opportunities for our employees to learn and grow.",
   },
];

export const advertLocations = {
   home_page_leader: {
      name: "home-page-leader",
   },
   home_page_section_1_sidebar: {
      name: "home-page-section-1-sidebar",
   },
   home_page_section_2_sidebar: {
      name: "home-page-section-2-sidebar",
   },
   story_page_registered_only: {
      name: "story-page-registered-only",
   },
   story_page_subscribed_only: {
      name: "story-page-subscribed-only",
   },
   story_page_r_and_a_subscribers_only: {
      name: "story-page-r-and-a-subscribers-only",
   },
   story_listing_india: {
      name: "story-listing-india",
   },
   story_listing_indonesia: {
      name: "story-listing-indonesia",
   },
   story_listing_singapore: {
      name: "story-listing-singapore",
   },
   story_listing_unicorns: {
      name: "story-listing-unicorns",
   },
   story_listing_e_commerce_and_consumer_internet: {
      name: "story-listing-ecommerce-consumer-internet",
   },
   story_listing_financial_services: {
      name: "story-listing-financial-services",
   },
   bottom_article: {
      name: "bottom-article",
   },
};

export const videoFormats = ["mp4", "webm", "ogg", "ogv", "m4v", "flv", "wmv", "avi", "mov", "mpg", "mpeg", "3gp"];

export const adRotateInterval = process.env.NEXT_PUBLIC_ADROTATE_INTERVAL;

export const dropdownStyles = {
   dropdown: {
      borderRadius: "0",
   },
   item: {
      fontFamily: "Montserrat",
      fontSize: "14px",
      padding: "5px 10px",
      color: "#B3B3B3",
   },
   placeholder: {
      fontWeight: "600",
   },
};

export const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
export const carouselInterval = process.env.NEXT_PUBLIC_CAROUSEL_INTERVAL;

export const pagesAndTitles = {
   "/": "DealStreetAsia - Asia focused financial news and intelligence platform",
   "/partner-content": "Partner Content | DealStreetAsia",
   "/about-us": "About Us | DealStreetAsia",
   "/contact-us": "Contact Us | DealStreetAsia",
   "/meet-the-team": "Meet the Team | DealStreetAsia",
   "/careers": "Careers | DealStreetAsia",
   "/advertise-with-us": "Advertise | DealStreetAsia",
   "/blogs": "Blogs | DealStreetAsia",
   "/faq": "FAQ | DealStreetAsia",
   "/plans": "Subscribe | DealStreetAsia",
   "/newsletters": "Newsletters | DealStreetAsia",
   "/newsletters/data_vantage": "Data Vantage Newsletter | DealStreetAsia",
   "/newsletters/daily_brief": "The Daily Brief Newsletter | DealStreetAsia",
   "/newsletters/week_that_was": "The Week That Was Newsletter | DealStreetAsia",
   "/newsletters/vantage_point": "Vantage Point Newsletter | DealStreetAsia",
};
