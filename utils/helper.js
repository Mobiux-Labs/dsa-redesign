import { baseUrl, categories, regions, sections, newsletters } from "@/constants";
import moment from "moment/moment";
import pushToDataLayer from "./analytics";
import { recordAdvertImpression } from "./api-calls";

export function getTimeAgo(datetime) {
   return moment(datetime).fromNow();
}

export function trimUrl(url) {
   return url?.replace(baseUrl, "");
}

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const removeUndefined = (obj) => {
   Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);
   return obj;
};

export const getUniqueFavourites = (favourites) => {
   if (!favourites) return [];
   let constantSections = ["people", "unicorns", "venture-capital", "private-equity", "deal-investment"];
   let uniqueFavourites = favourites.filter((favourite) => !constantSections.includes(favourite));
   return uniqueFavourites;
};

export const getTitleFromSlug = (slug) => {
   let section = sections.find((section) => section.slug === slug);
   if (!section) return;
   return section.title;
};

export const getUrlFromSlug = (slug) => {
   let section = sections.find((section) => section.slug === slug);
   if (!section) return "";
   return section.link;
};

export function parseFullName(fullName) {
   const names = fullName.split(" ");
   if (names.length >= 2) {
      const firstName = names[0];
      let lastName = names[names.length - 1];
      const middleName = names.slice(1, names.length - 1).join(" ");
      // combine last name and middle name
      if (middleName) lastName = `${middleName} ${lastName}`;
      return { firstName, lastName };
   } else {
      return { firstName: fullName, lastName: "" };
   }
}

export function separateSlugId(uri) {
   let separatorIndex = uri.lastIndexOf("-");
   let slug = uri.slice(0, separatorIndex);
   let id = uri.slice(separatorIndex + 1);
   return [slug, id];
}

export function formatDate(date) {
   return moment(date).format("DD MMM YYYY");
}

export function removeElementFromArray(arr, elem) {
   const index = arr.indexOf(elem);
   if (index > -1) arr.splice(index, 1);
   return arr;
}

export function getCategoryTitle(slug, category) {
   if (category == "section" || category == "sector") {
      return categories.find((category) => category.value === slug)?.label;
   } else if (category == "countries") {
      return regions.find((region) => region.value === slug)?.label;
   } else {
      return categories.find((category) => category.value === slug)?.label;
   }
}

export function replaceCDN(url) {
   return url ? url.replace("dealstreetwebsite.s3.amazonaws", "media.dealstreetasia") : "";
}

export function loader({ src, width, height, quality }) {
   //If src has ?fit=, then add &, else start with ?
   const condition = src.includes("?fit=") ? "&" : "?";
   let newSrc = replaceCDN(src) + `${condition}resize=${width},${height}&q=${quality || 75}`;
   return newSrc;
}

export function findNewsletterByName(name) {
   for (const newsletter of Object.values(newsletters)) {
      if (newsletter.name === name) {
         return newsletter;
      }
   }
   return null;
}

function findPlanByName(objects, code) {
   for (let i = 0; i < objects.length; i++) {
      if (objects[i].plan_code === code) {
         return objects[i];
      }
   }
   return null;
}

export function createPricingObject(planData) {
   let result = {};
   result["1 Month"] = {
      basic: findPlanByName(planData, "Mo033"),
      professional: findPlanByName(planData, "rt01"),
   };
   result["3 Months"] = {
      basic: findPlanByName(planData, "Qu321"),
      professional: findPlanByName(planData, "ra03"),
   };
   result["1 year"] = {
      basic: findPlanByName(planData, "Ye432"),
      professional: findPlanByName(planData, "ra12"),
   };
   result["2 years"] = {
      basic: findPlanByName(planData, "Bi543"),
      professional: findPlanByName(planData, "rb24"),
   };
   result["3 years"] = {
      basic: findPlanByName(planData, "Tr649"),
      professional: findPlanByName(planData, "rt36"),
   };
   return result;
}

export function createBulkPricingObject(planData) {
   let result = {};
   result["tier 3"] = findPlanByName(planData, "CoPreYeT3");
   result["tier 3"].users = "2-4";
   result["tier 1"] = findPlanByName(planData, "CoPreYeT1");
   result["tier 1"].users = "5-9";
   result["tier 2"] = findPlanByName(planData, "CoPreYeT2");
   result["tier 2"].users = "10+";
   return result;
}

export function formatPrice(price) {
   const floatPrice = price / 100;
   return floatPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
   });
}

export function containsInArray(arr, url) {
   return arr.some((element) => url.includes(element));
}

export function isTabActive(document) {
   return document.visibilityState === "visible";
}

export const handleAdvertLoad = async (ad, session, pageUrl, document) => {
   if (!session || !session?.loggedIn) return;
   if (!isTabActive(document)) return;
   recordAdvertImpression(ad?.id, pageUrl);
   return true;
};

export const recordAdImpressionOnGTM = (ad, location, action = "impression") => {
   let event = {
      event: "banner",
      bannerAction: action,
      bannerName: ad?.name,
      location: location,
   };
   pushToDataLayer(event);
};

export const getUserType = (session) => {
   if (!session || !session?.loggedIn) return "anonymous";
   if (session?.subscribed && session?.researchPlan) return "subscribed-research";
   if (session?.subscribed) return "subscribed";
   return "registered";
};
