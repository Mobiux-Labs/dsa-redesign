import { Modal } from "@mantine/core";
import { useModal } from "@/utils/context";

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
            zIndex={100}
            closeOnClickOutside={false}
         >
            <div className="py-30 px-50 text-center">
               <h3 className="font-bold text-2xl text-heading">
                  Create your account
               </h3>
               <SocialMediaLinks />
               <div class="inline-flex items-center justify-center w-full mb-[25px]">
                  <hr class="w-full h-[1px] bg-lightgray border-0 rounded dark:bg-gray-700" />
                  <div class="absolute px-[5px] -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                     <p className="text-sm text-smalltext">or join via email</p>
                  </div>
               </div>
               <InputForm setModal={setModal} />
            </div>
         </Modal>
         {modal == "signup" && <CloseButton setModal={setModal} />}
      </div>
   );
}

function SocialMediaLinks() {
   return (
      <div className="mt-30 mb-[25px] text-center">
         <p className="text-sm text-smalltext mb-[15px]">
            Signup with Social Media
         </p>
         <div className="icons flex gap-[15px] justify-center">
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <img src="icons/google.svg" alt="G" />
            </div>
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <img src="icons/twitter-white.svg" alt="T" />
            </div>
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <img src="icons/facebook-white.svg" alt="F" />
            </div>
            <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
               <img src="icons/linkedin-white.svg" alt="LI" />
            </div>
         </div>
      </div>
   );
}

function InputForm({ setModal }) {
   return (
      <form className="w-full">
         <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full mb-20 rounded-md border-1 border-solid border-r-[1px] border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg"
         />
         <input
            type="email"
            placeholder="Email ID"
            required
            className="w-full mb-20 rounded-md border-1 border-solid border-r-[1px] border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg"
         />
         <input
            type="password"
            placeholder="Create Password"
            required
            className="w-full mb-20 rounded-md border-1 border-solid border-r-[1px] border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg"
         />
         <input
            type="password"
            placeholder="Re-type Password"
            required
            className="w-full rounded-md border-1 border-solid border-r-[1px] border-smalltext py-[14px] px-[15px] placeholder:text-smalltext bg-inputbg"
         />
         <div className="mt-10 flex justify-between">
            <p className="text-smalltext text-sm text-left">
               Already a Memeber?{" "}
               <span
                  className="text-blue cursor-pointer"
                  onClick={() => setModal("login")}
               >
                  Login
               </span>
            </p>
         </div>
         <div class="flex items-center mt-40">
            <input
               id="red-checkbox"
               type="checkbox"
               class="w-[14px] h-[14px] text-blue bg-gray-100 border-content rounded focus:ring-blue focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
               for="newsletter-checkbox"
               class="text-sm text-smalltext ml-[6px]"
            >
               Signup for newsletters & latest updates on email
            </label>
         </div>
         <div class="flex items-center mt-[15px]">
            <input
               id="red-checkbox"
               type="checkbox"
               class="w-[14px] h-[14px] text-blue bg-gray-100 border-content rounded focus:ring-blue focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
               for="newsletter-checkbox"
               class="text-sm text-smalltext ml-[6px]"
            >
               I have read and I accept the{" "}
               <span className="text-blue cursor-pointer">
                  Terms and Conditions
               </span>
            </label>
         </div>
         <button
            type="submit"
            className="bg-blue text-white font-medium py-[11px] px-[30px] rounded-sm mt-[40px]"
         >
            Create Account
         </button>
      </form>
   );
}

function CloseButton({ setModal }) {
   return (
      <div
         className="cursor-pointer absolute z-[101] right-[80px] top-[80px]"
         onClick={() => setModal()}
      >
         <img src="icons/close.svg" alt="close" />
      </div>
   );
}
