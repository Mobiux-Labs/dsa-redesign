import { backendUrl, baseUrl, wpApiUrl } from "@/constants";
import { createHeader } from "./network";

export async function getHomePageHeadlines(req) {
   const res = await fetch(`${backendUrl}/new/posts/home/`, {
      headers: createHeader(req),
   });
   console.log(res.status);
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getTrendingStories() {
   const res = await fetch(`${wpApiUrl.replace(baseUrl, "")}/trending/`, {
      headers: createHeader(),
   });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}
