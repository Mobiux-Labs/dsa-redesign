import { backendUrl, baseUrl, wpApiUrl } from "@/constants";
import { createHeader } from "./network";

export async function getHomePageHeadlines(req) {
   const res = await fetch(`${backendUrl}/new/posts/home/`, {
      headers: createHeader(req),
   });
   if (!res.ok) return null;
   const data = await res.json();
   console.log(res.status);
   return data;
}

export async function getTrendingStories(req) {
   let url = `${req ? wpApiUrl : wpApiUrl.replace(baseUrl, "")}/trending/`;
   const res = await fetch(url, { headers: createHeader(req) });
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

export async function storiesRead(req, storyType) {
   let res = await fetch(`${baseUrl}/subs/usage/?story_type=${storyType}`, {
      headers: createHeader(req),
   });
   if (!res.ok) return null;
   res = await res.json();
   return res.stories.length;
}

export async function anonymousStoriesViewed(req) {
   let res = await fetch(`${baseUrl}/subs/usage/30/`, {
      headers: createHeader(),
   });
   if (!res.ok) return null;
   res = await res.json();
   console.log("anonymous stories read: ", res);
   return res["story_ids"].length;
   return 0;
}

export async function setStoryViews(uri, premiumContent, researchContent) {
   uri = `/stories/${uri}`;
   let res = await fetch(`/subs/`, {
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      method: "POST",
      body: JSON.stringify({ uri, premiumContent, researchContent }),
   });
   if (!res.ok) return null;
   // let cookies = res.headers.get("Set-cookie");
   // res.headers.set("Set-cookie", cookies + "Domain=.dealstreetasia.com;");
   return res;
}

export async function getNewsletters(req, slug, page = 1) {
   let url = `${
      req ? backendUrl : backendUrl.replace(baseUrl, "")
   }/new/newsletter/${slug}/${page}/`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getNewsletterEdition(req, id) {
   let url = `${backendUrl}/newsletters/${id}/`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getPartnerContentStories(
   req,
   page = 1,
   numberOfPosts = 9
) {
   const url = `${
      req ? wpApiUrl : wpApiUrl.replace(baseUrl, "")
   }/partner-content/list/?page=${page}&numberposts=${numberOfPosts}`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getPartnerContentStory(req, slug) {
   const url = `${wpApiUrl}/partner-content/${slug}`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export const getSearchResults = async (
   req,
   query,
   page = 1,
   sortBy,
   countries,
   sections,
   sectors,
   storySections
) => {
   let base = `${req ? backendUrl : backendUrl.replace(baseUrl, "")}`;
   if (countries) countries = countries.join(",");
   if (sections) sections = sections.join(",");
   if (sectors) sectors = sectors.join(",");
   if (storySections) storySections = storySections.join(",");
   let url = `${base}/es_search/?page=${page}&search_text=${query}&sort_by=${sortBy}`;
   if (countries) url += `&countries=${countries}`;
   if (sections) url += `&sections=${sections}`;
   if (sectors) url += `&sectors=${sectors}`;
   if (storySections) url += `&story_sections=${storySections}`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
};

export async function getTermSuggestions(query) {
   let base = `${backendUrl.replace(baseUrl, "")}`;
   let url = `${base}/es_search/terms/suggest/?suggest_term=${query}`;
   const res = await fetch(url, { headers: createHeader() });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}
