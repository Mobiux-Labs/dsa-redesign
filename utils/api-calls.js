import { backendUrl, wpApiUrl } from "@/constants";
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
