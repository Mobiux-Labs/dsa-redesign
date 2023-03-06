import { getUserType } from "./helper";

export default function pushToDataLayer(event) {
   window.dataLayer = window.dataLayer || [];
   window.dataLayer.push(event);
}

export function recordStoryDataToGTM(story) {
   let storyCategoriesEvent = {
      event: "story-categories",
      section: story?.section,
      sector: story?.sector,
      country: story?.country,
      title: story?.post_title,
   };
   pushToDataLayer(storyCategoriesEvent);
}

export function recordUserDataToGTM(session) {
   let subscriptionType = session?.subscriptionType;
   const userType = getUserType(session);
   let userId = session?.userId;
   let userDataEvent = {
      userType: userType,
      subscriptionType: subscriptionType,
      userId: userId,
   };
   pushToDataLayer(userDataEvent);
}
