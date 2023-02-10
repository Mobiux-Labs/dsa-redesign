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

export async function getCategoryStories(
   category,
   slug,
   req,
   numberOfPosts = 9,
   page = 1
) {
   const fetchUrl = `${wpApiUrl}/post/list/?taxonomy_type=${category}&taxonomy=${slug}&numberposts=${numberOfPosts}&page=${page}`;
   const res = await fetch(fetchUrl, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}
