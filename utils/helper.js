import { baseUrl, categories, regions, sections } from "@/constants";
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
   if (!favourites) return [];
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
   } else {
      return regions.find((region) => region.value === slug)?.label;
   }
}
