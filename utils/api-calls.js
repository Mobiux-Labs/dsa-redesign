import { wpApiUrl } from "@/constants";
import { createHeader } from "./network";

export async function getHomePageHeadlines(req) {
  const res = await fetch(`${wpApiUrl}/top-stories/`, {
    headers: createHeader(req),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data;
}
