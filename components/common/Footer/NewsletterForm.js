import { TextInput } from "@mantine/core";
import { useState } from "react";
import { subscribeToNewsletter } from "@/utils/api-calls";
import { defaultNlToSubscribe } from "@/constants";

export default function NewsletterForm({ defaultEmail }) {
   const [email, setEmail] = useState(defaultEmail || "");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(false);

   async function handleSubmit(e) {
      e.preventDefault();
      if (loading) return;
      setLoading(true);
      const res = await subscribeToNewsletter(email, defaultNlToSubscribe);
      if (!res) {
         setError("Something went wrong");
         setLoading(false);
         return;
      }
      setSuccess(true);
   }

   return (
      <form
         className="w-[593px] mx-auto flex h-[45px] newsletter-form-input"
         onSubmit={(e) => handleSubmit(e)}
      >
         <TextInput
            placeholder="Enter Your Email"
            styles={{ input: { fontFamily: "Montserrat" } }}
            height={46}
            className={`placeholder:text-lg placeholder-lightgray w-[461px] newsletter-form-input`}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
            error={error}
            disabled={loading}
         />
         <button
            type="submit"
            className={`bg-blue text-white w-fit h-full text-base px-[12px]`}
            disabled={loading}
         >
            {success ? "Subscribed" : "Subscribe"}
         </button>
      </form>
   );
}
