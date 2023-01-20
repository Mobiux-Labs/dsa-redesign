import { baseUrl, username, password } from "@/constants";

export function createAuthHeader() {
  if (username && password) {
    return [
      "Authorization",
      "Basic " + Buffer.from(username + ":" + password).toString("base64"),
    ];
  }
  return null;
}

export function createHeader(req) {
  const headers = {};
  const authHeader = createAuthHeader();
  if (authHeader) {
    headers[authHeader[0]] = authHeader[1];
    headers["Content-type"] = "application/json";
  }
  if (req) {
    const cookies = getCookieHeader(req);
    if (cookies) {
      headers[cookies[0]] = cookies[1];
    }
  }
  return headers;
}

function getCookieHeader(req) {
  if (req.headers.cookie) {
    return ["Cookie", req.headers.cookie];
  }
  return null;
}
