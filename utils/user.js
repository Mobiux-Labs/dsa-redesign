import { createHeader } from "./network";
import { baseUrl, newsletters } from "@/constants";
import { removeUndefined } from "./helper";

function getSubscribedNewsletters(dailyBrief, weekThatWas, vantagePoint, dataVantage) {
   let subscribedNewsletters = [];
   if (dailyBrief) subscribedNewsletters.push(newsletters.daily_brief.slug);
   if (weekThatWas) subscribedNewsletters.push(newsletters.week_that_was.slug);
   if (vantagePoint) subscribedNewsletters.push(newsletters.vantage_point.slug);
   if (dataVantage) subscribedNewsletters.push(newsletters.data_vantage.slug);
   return subscribedNewsletters;
}

export async function getUserSession(req) {
   let loggedIn = false;
   let subscribed = false;
   let researchPlan = false;
   let subscriptionType, bookmarked;
   let plan, userId;
   let res, email;
   let name, dailyBriefNl, dataVantageNl, weekThatWasNl, vantagePointNl;
   let events, offers;
   let subscribedNewsletters = [];
   let userFavourites = [];
   let loggedIntoWP = false;
   if (req) {
      res = await fetch(baseUrl + "/subs/", {
         headers: createHeader(req),
      });
   } else {
      res = await fetch("/subs/");
   }
   if (res.status === 200) {
      res = await res.json();
      if (res.email !== null) {
         email = res.email;
         loggedIn = true;
         userId = res.id;
         subscriptionType = res.subscription_type;
         name = res.name;
         dailyBriefNl = res.daily_brief_nl;
         dataVantageNl = res.data_vantage_nl;
         weekThatWasNl = res.week_that_was_nl;
         vantagePointNl = res.vantage_point_nl;
         events = res.events;
         offers = res.offers;
         userFavourites = res.user_favourites;
         bookmarked = res.bookmarked;
         loggedIntoWP = res?.logged_into_wp_as_admin;
         researchPlan = res?.research;
         if (res.plan !== null) {
            plan = res.plan;
            subscribed = true;
         }
         subscribedNewsletters = getSubscribedNewsletters(dailyBriefNl, weekThatWasNl, vantagePointNl, dataVantageNl);
      }
   }
   let returnObj = {
      loggedIn,
      subscribed,
      plan,
      userId,
      email,
      type: subscriptionType,
      name,
      dailyBriefNl,
      dataVantageNl,
      subscribedNewsletters,
      weekThatWasNl,
      vantagePointNl,
      userFavourites,
      events,
      offers,
      bookmarked,
      loggedIntoWP,
   };
   return removeUndefined(returnObj);
}
