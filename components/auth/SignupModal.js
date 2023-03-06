import { Modal } from "@mantine/core";
import { useModal, useSession } from "@/utils/context";
import Recaptcha from "react-google-invisible-recaptcha";
import { useState } from "react";
import { siteKey } from "@/constants";
import { signupUser } from "@/utils/auth";
import { getUserSession } from "@/utils/user";
import CustomIcon from "@/utils/icon-mapping";

export default function SignupModal({}) {
   const [modal, setModal] = useModal();
   return (
      <div>
         <Modal
            padding={0}
            opened={modal == "signup"}
            onClose={() => setModal()}
            withCloseButton={false}
            centered
            radius={0}
            zIndex={600}
            closeOnClickOutside={false}
         >
            <div className="py-30 px-50 text-center overflow-hidden">
               <h3 className="font-bold text-2xl text-heading">Create your account</h3>
               <SocialMediaLinks />
               <div className="inline-flex items-center justify-center w-full mb-[25px]">
                  <hr className="w-full h-[1px] bg-lightgray border-0 rounded dark:bg-gray-700" />
                  <div className="absolute px-[5px] -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                     <p className="text-sm text-smalltext">or join via email</p>
                  </div>
               </div>
               <InputForm setModal={setModal} />
            </div>
         </Modal>
      </div>
   );
}

function SocialMediaLinks() {
   return (
      <div className="mt-30 mb-[25px] text-center">
         <p className="text-sm text-smalltext mb-[15px]">Signup with Social Media</p>
         <div className="icons flex gap-[15px] justify-center">
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <CustomIcon name={"google"} color={"#fff"} height={16} />
            </div>
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <CustomIcon name={"twitter"} color={"#fff"} height={16} />
            </div>
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <CustomIcon name={"facebook"} color={"#fff"} height={16} />
            </div>
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <CustomIcon name={"linkedin"} color={"#fff"} height={16} />
            </div>
         </div>
      </div>
   );
}

function InputForm({ setModal }) {
   const [captchaResolved, setCaptchaResolved] = useState(false);
   const [recaptchaObj, setRecaptcha] = useState(null);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [preference, setPreference] = useState(false);
   const [tosAgreement, setTosAgreement] = useState(false);
   const [loading, setLoading] = useState(false);
   const [session, setSession] = useSession();
   const [error, setError] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      tosAgreement: "",
   });

   async function handleSubmit(e) {
      setLoading(true);
      e.preventDefault();
      if (validateForm()) {
         recaptchaObj.execute();
         const res = await signupUser(name, email, password, preference, tosAgreement, recaptchaObj.getResponse());
         if (!res || !res.status) {
            setLoading(false);
            return;
         }
         const userSession = await getUserSession();
         setSession(userSession);
         setModal();
      } else {
         console.log("Form not submitted");
         console.log(error);
      }
      setLoading(false);
   }

   const validateForm = () => {
      let nameValid = /^[a-zA-Z]+$/.test(name);
      let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      let passwordValid = password.length >= 8 && password === confirmPassword;
      if (!nameValid) {
         setError((prev) => ({
            ...prev,
            name: "Name must contain only alphabets",
         }));
      }
      if (!emailValid) {
         setError((prev) => ({
            ...prev,
            email: "Please enter a valid email",
         }));
      }
      if (!passwordValid) {
         setError((prev) => ({
            ...prev,
            password: "Password must be atleast 8 characters",
            confirmPassword: "Passwords don't match",
         }));
      }
      if (!tosAgreement) {
         setError((prev) => ({
            ...prev,
            tosAgreement: "Please agree to the terms and conditions",
         }));
      }
      return nameValid && emailValid && passwordValid && tosAgreement;
   };

   return (
      <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
         <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full mb-20 rounded-md border-1 border-solid border-r-[1px] border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg focus:ring-0 focus:border-smalltext "
            onChange={(e) => setName(e.target.value)}
         />
         <input
            type="email"
            placeholder="Email ID"
            required
            className="w-full mb-20 rounded-md border-1 border-solid border-r-[1px] border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg focus:ring-0 focus:border-smalltext "
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            type="password"
            placeholder="Create Password"
            required
            autoComplete="new-password"
            className="w-full mb-20 rounded-md border-1 border-solid border-r-[1px] border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg focus:ring-0 focus:border-smalltext "
            onChange={(e) => setPassword(e.target.value)}
         />
         <input
            type="password"
            placeholder="Re-type Password"
            required
            autoComplete="new-password"
            className="w-full rounded-md border-1 border-solid border-r-[1px] border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg focus:ring-0 focus:border-smalltext "
            onChange={(e) => setConfirmPassword(e.target.value)}
         />
         <div className="mt-10 flex justify-between">
            <p className="text-smalltext text-sm text-left">
               Already a Memeber?{" "}
               <span className="text-blue cursor-pointer" onClick={() => setModal("login")}>
                  Login
               </span>
            </p>
         </div>
         <div className="flex items-center mt-40">
            <input
               id="red-checkbox"
               type="checkbox"
               className="w-[14px] h-[14px] text-blue bg-gray-100 border-content rounded focus:ring-blue focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
               onChange={(e) => setPreference(e.target.checked)}
            />
            <label for="newsletter-checkbox" className="text-sm text-smalltext ml-[6px]">
               Signup for newsletters & latest updates on email
            </label>
         </div>
         <div className="flex items-center mt-[15px]">
            <input
               id="red-checkbox"
               type="checkbox"
               className="w-[14px] h-[14px] text-blue bg-gray-100 border-content rounded focus:ring-blue focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
               onChange={(e) => setTosAgreement(e.target.checked)}
            />
            <label for="newsletter-checkbox" className="text-sm text-smalltext ml-[6px]">
               I have read and I accept the <span className="text-blue cursor-pointer">Terms and Conditions</span>
            </label>
         </div>
         <button
            disabled={loading}
            type="submit"
            className={`text-white bg-blue ${
               loading ? "bg-gray" : "bg-blue"
            } font-medium py-[11px] px-[30px] rounded-sm mt-[40px] mb-[40px]`}
         >
            Create Account
         </button>
         {/* Recaptcha */}
         <Recaptcha
            ref={(ref) => setRecaptcha(ref)}
            sitekey={siteKey}
            onResolved={() => setCaptchaResolved(true)}
            onError={() => console.log("recaptcha error")}
            onExpired={() => recaptchaObj.reset()}
         />
      </form>
   );
}

function CloseButton({ setModal }) {
   return (
      <div className="cursor-pointer absolute z-[101] right-[80px] top-[80px]" onClick={() => setModal()}>
         <CustomIcon icon="close" color={"fff"} />
      </div>
   );
}
