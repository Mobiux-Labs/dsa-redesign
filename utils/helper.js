import { baseUrl } from "@/constants";
import moment from "moment/moment";

export function getTimeAgo(datetime) {
   return moment(datetime).fromNow();
}

export function trimUrl(url) {
   return url.replace(baseUrl, "");
}

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
