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

export async function getTrendingStories(req) {
   let url = `${req ? wpApiUrl : wpApiUrl.replace(baseUrl, "")}/trending/`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getCategoryStories(category, slug, req, numberOfPosts = 9, page = 1) {
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
   let data = await res.json();
   // remove the first story from the list
   data.shift();
   return data;
}

export async function getFullStoryData(req, id, uri) {
   const url = `${wpApiUrl}/story?id=${id}&uri=${uri}`;
   const res = await fetch(url, { headers: createHeader(req) });
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
      headers: createHeader(req),
   });
   if (!res.ok) return null;
   res = await res.json();
   return res["story_ids"].length;
}

export async function setStoryViews(uri, premium, research) {
   uri = `/stories/${uri}`;
   let res = await fetch("/subs/", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ uri: uri, premium: premium, research: research }),
   });
   if (res.status === 200) return res;
   return;
}

export async function getNewsletters(req, slug, page = 1) {
   let url = `${req ? backendUrl : backendUrl.replace(baseUrl, "")}/new/newsletter/${slug}/${page}/`;
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

export async function getPartnerContentStories(req, page = 1, numberOfPosts = 9) {
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

export const getSearchResults = async (req, query, page = 1, sortBy, countries, sections, sectors, storySections) => {
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

export async function subscribeToNewsletter(email, newsletter) {
   let url = "/subs/newsletter/subscribe/";
   const res = await fetch(url, {
      headers: createHeader(),
      method: "POST",
      body: JSON.stringify({ email, newsletter }),
   });
   if (!res.ok) return null;
   return res;
}

export async function setNlPreference(email, preference) {
   let url = "/api/subs/communications-prefs/";
   const res = await fetch(url, {
      headers: createHeader(),
      method: "POST",
      body: JSON.stringify({
         email,
         dailyFeed: preference.daily_brief,
         dataVantage: preference.data_vantage,
         vantagePoint: preference.vantage_point,
         pastWeek: preference.week_that_was,
         events: preference.events,
         offers: preference.offers,
      }),
   });
   if (!res.ok) return;
   let data = await res.json();
   if (data?.message == "success") return true;
   return;
}

export async function getPlanData(req) {
   let url = `${backendUrl}/new/plans/`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function bookMarkArticle(email, uri, slug, story_id, post_type, post_title, premium) {
   if (!email) return;
   let url = `${backendUrl.replace(baseUrl, "")}/new/bookmark/`;
   const res = await fetch(url, {
      headers: createHeader(),
      method: "POST",
      body: JSON.stringify({
         email,
         uri,
         slug,
         story_id,
         post_type,
         post_title,
         premium,
      }),
   });
   if (!res.ok) return null;
   return res;
}

export async function getBlogsList(req, page = 1, numberOfPosts = 9) {
   let base = `${req ? wpApiUrl : wpApiUrl.replace(baseUrl, "")}`;
   let url = `${base}/blogs/list/?page=${page}&numberposts=${numberOfPosts}`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getBlog(req, slug) {
   let url = `${wpApiUrl}/blog/?slug${slug}`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getTeamMemebers(req) {
   let url = `${baseUrl}/api/content/team/members/`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function followCategory(slug, name, link, email) {
   const body = {
      category_slug: slug,
      category_title: name,
      category_url: link,
      email: email,
   };
   let url = `/api/subs/favourite/`;
   const res = await fetch(url, {
      headers: createHeader(),
      body: JSON.stringify(body),
      method: "POST",
   });
   if (!res.ok) return null;
   return res;
}

export async function getAdverts(location) {
   let url = `/api/subs/ad-manager/?location=${location}`;
   const res = await fetch(url, { headers: createHeader() });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function recordAdvertImpression(advertId, pageURL) {
   const body = { advert_id: advertId, page_url: pageURL };
   const res = await fetch(`/api/subs/ad-manager/impression/`, {
      method: "POST",
      body: JSON.stringify(body),
   });
   const message = await res.json().message;
   return message;
}

export async function checkUserForSocialLogin() {
   let url = "/subs/checkuser/";
   const res = await fetch(url, { headers: createHeader() });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getActiveCarouselBanners() {
   let url = `/api/content/website/carousel/`;
   const res = await fetch(url, { headers: createHeader() });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getGiftEligibilityData(req) {
   let url = `${backendUrl}/gifts/`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function setGiftInvitation(email) {
   let url = `/api/subs/gifts/`;
   let data = [{ email }];
   const res = await fetch(url, {
      headers: createHeader(),
      method: "POST",
      body: JSON.stringify(data),
   });
   if (!res.ok) return null;
   let response = await res.json();
   return response;
}

export async function fetchInvitesLeft(req) {
   let url = `${backendUrl}/gifts/discount/`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function sendInvitation(email) {
   let url = `/api/subs/gifts/discount/`;
   const res = await fetch(url, {
      headers: createHeader(),
      method: "POST",
      body: JSON.stringify({ email }),
   });
   return res;
}

export async function getReports(req, page = 1, numberOfPosts = 6, type, country) {
   let base = `${req ? wpApiUrl : wpApiUrl.replace(baseUrl, "")}`;
   let url = `${base}/report/list/?page=${page}&numberposts=${numberOfPosts}`;
   if (type && type != "all") url += `&type=${type}`;
   if (country && country != "all") url += `&country=${country}`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getReport(req, slug) {
   let url = `${wpApiUrl}/report/?slug=${slug}`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export const purchasedOrHasAccessKey = async (req, reportId) => {
   const url = `${backendUrl}/check-report-authorization/`;
   const res = await fetch(url, {
      method: "POST",
      headers: createHeader(req),
      body: JSON.stringify({
         report_id: reportId,
      }),
   });
   if (res.status !== 200) return;
   const data = await res.json();
   return "authorized" === data.status;
};

export const getArticleGiftInfo = async () => {
   const url = `/subs/trackArticleGift/`;
   const res = await fetch(url, { headers: createHeader() });
   if (res.status !== 200) return;
   const data = await res.json();
   return data;
};

export async function getGiftKey(articleId) {
   let res = await fetch("/subs/trackArticleGift/", {
      method: "POST",
      headers: createHeader(),
      body: JSON.stringify({ articleId }),
   });
   if (!res.ok) return null;
   let data = await res.json();
   return data;
}

export async function createCheckoutSessionForReportPurchase(report) {
   let url = `/accounts/payment/report/create-checkout-session/`;
   let body = {
      report_id: report.id,
      report_title: report.post_title,
      redirect_url: report.link,
      image_url: report.image_url.replace("1001", "300"),
      // Size has been reducred so that the image loads faster on the stripe checkout screen
   };
   const res = await fetch(url, { headers: createHeader(), method: "POST", body: JSON.stringify(body) });
   if (res.status === 302) {
      const data = await res.json();
      window.location.href = data.redirect_url;
   }
}

export async function getStripeSessionData(req, sessionId) {
   let url = `${baseUrl}/accounts/payment/validate-stripe-session/`;
   const res = await fetch(url, {
      headers: createHeader(req),
      method: "POST",
      body: JSON.stringify({ session_id: sessionId }),
   });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function getStoriesForTag(req, tag, page = 1, numberOfPosts = 6) {
   let base = `${req ? wpApiUrl : wpApiUrl.replace(baseUrl, "")}`;
   let url = `${base}/tag?tag=${tag}&page=${page}&numberposts=${numberOfPosts}`;
   const res = await fetch(url, { headers: createHeader(req) });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}
