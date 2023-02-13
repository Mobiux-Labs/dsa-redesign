import { backendUrl, baseUrl, wpApiUrl } from "@/constants";
import { createHeader } from "./network";

export async function getHomePageHeadlines(req) {
   const res = await fetch(`${backendUrl}/new/posts/home/`, {
      headers: createHeader(req),
   });
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
   const wpUrl = req ? wpApiUrl : wpApiUrl.replace(baseUrl, "");
   const fetchUrl = `${wpUrl}/post/list/?taxonomy_type=${category}&taxonomy=${slug}&numberposts=${numberOfPosts}&page=${page}`;
   const res = await fetch(fetchUrl, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getLastReadStories(req) {
   const res = await fetch(`${backendUrl}/new/user/last-read/`, {
      headers: createHeader(req),
   });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getFullStoryData(req, id, uri) {
   const url = `${wpApiUrl}/story?id=${id}&uri=${uri}`;
   const res = await fetch(url, { headers: createHeader(req) });
   console.log("Fetching status code: ", res.status);
   if (!res.ok) return null;
   if (!res.status === 200) return null;
   const data = await res.json();
   if (!data?.id) return null;
   return data;
}
