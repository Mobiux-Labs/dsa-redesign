import { baseUrl, sections } from "@/constants";
import moment from "moment/moment";

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
   let constantSections = [
      "people",
      "unicorns",
      "venture-capital",
      "private-equity",
      "deal-investment",
   ];
   let uniqueFavourites = favourites.filter(
      (favourite) => !constantSections.includes(favourite)
   );
   return uniqueFavourites;
};

export const getTitleFromSlug = (slug) => {
   let section = sections.find((section) => section.slug === slug);
   return section.title;
};
