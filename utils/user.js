import { createHeader } from "./network";
import { baseUrl } from "@/constants";

function getSubscribedNewsletters(
  dailyBrief,
  weekThatWas,
  vantagePoint,
  dataVantage
) {
  let subscribedNewsletters = [];
  if (dailyBrief) subscribedNewsletters.push(newsletters.daily_breif.slug);
  if (weekThatWas) subscribedNewsletters.push(newsletters.week_that_was.slug);
  if (vantagePoint) subscribedNewsletters.push(newsletters.vantage_point.slug);
  if (dataVantage) subscribedNewsletters.push(newsletters.data_vantage.slug);
  return subscribedNewsletters;
}

export async function checkIfLoggedInAndSubscribed(req) {
  let loggedIn = false;
  let subscribed = false;
  let type;
  let plan, userId;
  let res, email;
  let name, dailyBriefNl, dataVantageNl, weekThatWasNl, vantagePointNl;
  let subscribedNewsletters = [];
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
      type = res.subscription_type;
      name = res.name;
      dailyBriefNl = res.daily_brief_nl;
      dataVantageNl = res.data_vantage_nl;
      weekThatWasNl = res.week_that_was_nl;
      vantagePointNl = res.vantage_point_nl;
      if (res.plan !== null) {
        plan = res.plan;
        subscribed = true;
      }
      subscribedNewsletters = getSubscribedNewsletters(
        dailyBriefNl,
        weekThatWasNl,
        vantagePointNl,
        dataVantageNl
      );
    }
  }
  return {
    loggedIn,
    subscribed,
    plan,
    userId,
    email,
    type,
    name,
    dailyBriefNl,
    dataVantageNl,
    subscribedNewsletters,
  };
}
