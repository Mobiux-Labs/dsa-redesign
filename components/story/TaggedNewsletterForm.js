import { newsletters } from "@/constants";
import { TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSession } from "@/utils/context";
import { subscribeToNewsletter } from "@/utils/api-calls";

export default function TaggedNewsletterForm({ taggedNewsletter }) {
   let newsletter = newsletters[taggedNewsletter];
   const [email, setEmail] = useState("");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [success, setSuccess] = useState(false);
   const [session] = useSession();

   useEffect(() => {
      if (session?.email) setEmail(session.email);
   }, [session]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (loading) return;
      setLoading(true);
      const res = await subscribeToNewsletter(email, taggedNewsletter);
      if (!res) {
         setError("Something went wrong");
         setLoading(false);
         return;
      }
      setSuccess(true);
   };

   return (
      <div className="mt-[20px] text-center mb-[20px]">
         <p className="text-darkgray text-base mb-[10px]">{newsletter?.description}</p>
         <form className="flex items-center justify-center" onSubmit={(e) => handleSubmit(e)}>
            <TextInput
               placeholder="Enter Your Email"
               className="w-[461px] placeholder:text-base placeholder-lightgray newsletter-form-input tagged-newsletter-form-input text-base"
               type="email"
               error={error}
               disabled={loading}
               value={email}
               onChange={(e) => setEmail(e.currentTarget.value)}
               required
            />
            <button
               className="bg-blue text-base leading-[17px] font-medium  px-[13px] text-white py-[10px]"
               type="submit"
               disabled={loading || success}
            >
               {success ? "Subscribed" : "Subscribe Now"}
            </button>
         </form>
      </div>
   );
}
