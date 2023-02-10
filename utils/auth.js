import { parseFullName } from "./helper";
import { createHeader } from "./network";

export async function loginUser(email, password) {
   const res = await fetch("/api/subs/login/", {
      method: "POST",
      headers: createHeader(),
      body: JSON.stringify({
         email,
         password,
      }),
   });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function signupUser(
   name,
   email,
   password,
   preference,
   tosAgreement,
   recaptchaToken
) {
   const { firstName, lastName } = parseFullName(name);
   const res = await fetch("/api/subs/signup/", {
      method: "POST",
      headers: createHeader(),
      body: JSON.stringify({
         email,
         password,
         first_name: firstName,
         last_name: lastName,
         preference,
         tosAgreement,
         recaptchaToken,
      }),
   });
   if (!res.ok) return null;
   const data = await res.json();
   return data;
}

export async function logoutUser() {
   const res = await fetch("/accounts/logout/", { headers: createHeader() });
   if (!res.ok) return null;
   if (res.status === 200) return true;
   return false;
}
