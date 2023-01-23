import { createHeader } from "@/utils/network";
import { useState } from "react";

export default function LoginPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function handleLogin() {
      const res = await fetch("/api/subs/login/", {
         method: "POST",
         headers: createHeader(),
         body: JSON.stringify({
            email,
            password,
         }),
      });
      const data = await res.json();
      console.log(data);
   }

   return (
      <div>
         <h1>Login Page</h1>
         <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <button onClick={handleLogin}>Login</button>
      </div>
   );
}
