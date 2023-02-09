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
