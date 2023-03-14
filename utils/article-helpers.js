import { baseUrl } from "@/constants";
import { anonymousStoriesViewed, getStripeSessionData, purchasedOrHasAccessKey, storiesRead } from "./api-calls";
import { createHeader } from "./network";

export async function addTablePressFeatures() {
   const tables = document.querySelectorAll(".tablepress");
   if (tables.length > 0) {
      // Add tablepress script and css
      const tablepressScript = document.createElement("script");
      tablepressScript.src = "https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js";
      tablepressScript.async = true;
      document.body.appendChild(tablepressScript);
      const tablepressCss = document.createElement("link");
      tablepressCss.rel = "stylesheet";
      tablepressCss.href = "https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css";
      document.body.appendChild(tablepressCss);
   }
   [...tables].forEach(async (table) => {
      let tableOptions = await getTablePressOptionsForTable(table.id);
      //Add hover class to table which hover option is applied to
      if (tableOptions.row_hover) {
         table.classList.add("hover");
      }
      //Add striped rows to table to which striped option is applied to
      if (tableOptions.alternating_row_colors) {
         table.classList.add("stripe");
      }
      addExpandTableButton(table.id);
      new DataTable(`#${table.id}`, {
         paging: tableOptions.datatables_paginate,
         searching: tableOptions.datatables_filter,
         ordering: tableOptions.datatables_sort,
         info: tableOptions.datatables_info,
         lengthChange: tableOptions.datatables_lengthchange,
         scrollX: tableOptions.datatables_scrollx,
         pageLength: tableOptions.datatables_paginate_entries,
         stateSave: true,
         autoWidth: true,
      });
   });
}

const getTablePressOptionsForTable = async (tableId) => {
   tableId = tableId.split("-")[1];
   try {
      const res = await fetch(`/wp-json/tablepress/v1/table/${tableId}`);
      const data = await res.json();
      return data.options;
   } catch (e) {
      console.error("Error searching for tablepress options for table: ", tableId);
      return {};
   }
};

const addExpandTableButton = (tableId) => {
   let tableWrapper = document.querySelector(`#${tableId}_wrapper`) ?? document.querySelector(`#${tableId}`);
   let expandTableButton = document.createElement("button");
   expandTableButton.classList.add("expand-table-button");
   expandTableButton.innerHTML = "Expand Table";
   //Add a wrapper on table or dataTables_wrapper to show the expanded state with a close button
   let expandedTableWrapper = document.createElement("div");
   let closeButton = document.createElement("button");
   closeButton.classList.add("close-button");
   closeButton.innerText = "Close";
   closeButton.addEventListener("click", () => {
      expandedTableWrapper.classList.remove("expanded-table-wrapper");
      closeButton.style.display = "none";
   });
   expandTableButton.addEventListener("click", () => {
      expandedTableWrapper.classList.add("expanded-table-wrapper");
      closeButton.style.display = "block";
   });
   expandedTableWrapper.appendChild(closeButton);
   tableWrapper.parentElement.insertBefore(expandTableButton, tableWrapper);
   tableWrapper.parentNode.insertBefore(expandedTableWrapper, tableWrapper);
   expandedTableWrapper.appendChild(tableWrapper);
};

export function getMiniContent(fullContent) {
   let totalContentLength = fullContent.length;
   let moreTagPos = getPosition(fullContent, '<span id="more-', 1);
   if (moreTagPos === totalContentLength) {
      let newPos = getPosition(fullContent, "<!--more-->", 1);
      if (newPos === totalContentLength) {
         let secondParagraphEndingPos = getPosition(fullContent, "</p>", 2);
         return fullContent.slice(0, secondParagraphEndingPos + 4);
      } else {
         return fullContent.slice(0, newPos + "<!--more-->".length);
      }
   }
   return fullContent.slice(0, moreTagPos + '<span id="more-'.length);
}

function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}

export function getContentRestrictions(story, session, req) {
   let isResearch = story?.research;
   let isPremium = story?.premium;
   if (isResearch) return researchContentRestrictions(session, req);
   if (isPremium) return premiumContentRestrictions(session, req);
   return freeContentRestrictions(session, req);
}

async function researchContentRestrictions(session, req) {
   if (!session.loggedIn) return { restricted: true, message: "" };
   if (session.subscribed && session.plan.includes("Research")) return { restricted: false, message: "" };
   let researchStoriesRead = await storiesRead(req, "research");
   // A user subscribed to a non-research plan can read 1 research story-per-month
   if (researchStoriesRead >= 1) return { restricted: true, message: "" };
   return { restricted: false, message: "Last research story for the month" };
}

async function premiumContentRestrictions(session, req) {
   if (!session.loggedIn) return { restricted: true, message: "" };
   if (session.subscribed) return { restricted: false, message: "" };
   let premiumStoriesRead = await storiesRead(req, "premium");
   // A non subsscribed(loggedin) user can only view 1 premium story per month
   if (premiumStoriesRead >= 1) return { restricted: true, message: "" };
   return { restricted: false, message: "Last premium story for the month" };
}

async function freeContentRestrictions(session, req) {
   if (session.loggedIn) return { restricted: false, message: "" };
   let freeStoriesRead = await anonymousStoriesViewed(req);
   // A non logged in user can only view 3 free stories per month
   if (freeStoriesRead >= 2) return { restricted: true, message: "" };
   // Show a banner to show the user has only 3 free stories left
   let freeStoriesLeft = 3 - freeStoriesRead;
   return { restricted: false, message: `${freeStoriesLeft} free stories left this month` };
}

export async function validateGiftKey(key, storyId, req) {
   let body = { articleId: storyId, giftKey: key };
   let res = await fetch(`${baseUrl}/subs/check-link-validity`, {
      headers: createHeader(req),
      method: "POST",
      body: JSON.stringify(body),
   });
   if (!res.ok) return;
   let data = await res.json();
   return data?.valid;
}

export const isUserAuthorizedToViewReport = async (req, plan, contentProtections, loggedIn, reportId) => {
   // Check if the user belongs to any one of the groups set under the content protection for each individual report by the editor
   // Could belong to any of these "research", "premium", "free", "signed_in"
   // contentProtections is an array of strings
   if (!contentProtections) return false;
   if (contentProtections.includes("free")) return true;
   if (contentProtections.includes("signed_in") && loggedIn) return true;
   if (contentProtections.includes("premium") && plan && plan !== "") return true;
   if (contentProtections.includes("research") && plan && plan.includes("Research")) return true;
   if (await purchasedOrHasAccessKey(req, reportId)) return true;
   // TODO: Do a check if the user has bought the report.
   return false;
};

export const getReportPurchaseToastMessage = async (req, stripeSessionId) => {
   if (!stripeSessionId) return;
   let stripeSession = await getStripeSessionData(req, stripeSessionId);
   if (!stripeSession) return;
   stripeSession = stripeSession.session;
   let paymentStatus = stripeSession.payment_status;
   let toastMessage = {
      message: "Payment failed!",
      description: "Looks like something went wrong while completing your payment. Please try again.",
      type: "error",
   };
   let successfullPayment = paymentStatus == "paid";
   let incompletePayment = paymentStatus == "unpaid";
   if (successfullPayment) {
      toastMessage = {
         message: "Thank you for your purchase",
         description: "Your report purchase was successful. An invoice would be sent to your email shortly.",
         type: "success",
      };
   }
   if (incompletePayment) {
      toastMessage = {
         message: "Payment incomplete",
         description: "Looks like you haven't completed your payment yet. Please try again.",
         type: "warning",
      };
   }
   return toastMessage;
};
