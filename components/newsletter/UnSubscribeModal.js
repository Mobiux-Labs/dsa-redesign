import { useModal } from "@/utils/context";
import { Modal } from "@mantine/core";
import { CloseModalButton } from "@/components/auth/LoginModal";
import { newsletters } from "@/constants";
import { useSession } from "@/utils/context";
import { setNlPreference } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import { findNewsletterByName } from "@/utils/helper";

export default function UnSubscribeNlModal({}) {
   const [modal, setModal] = useModal();
   const [session, setSession] = useSession();

   function getNewsletterName() {
      if (!modal) return;
      const name = modal.split("-").pop();
      return name;
   }

   function createPreferenceObject(slug) {
      let preference = {
         daily_brief: session?.dailyBriefNl,
         week_that_was: session?.weekThatWasNl,
         vantage_point: session?.vantagePointNl,
         data_vantage: session?.dataVantageNl,
         events: session?.events,
         offers: session?.offers,
      };
      preference[slug] = false;
      return preference;
   }

   async function onConfirm() {
      let name = getNewsletterName();
      let newsletter = findNewsletterByName(name);
      if (!newsletter) return;
      let slug = newsletter.slug;
      let preference = createPreferenceObject(slug);
      let res = await setNlPreference(session?.email, preference);
      const userSession = await getUserSession();
      setSession(userSession);
      if (res) setModal();
   }

   return (
      <div>
         <Modal
            padding={0}
            opened={modal?.includes("unsubscribe_nl")}
            onClose={() => setModal()}
            withCloseButton={false}
            centered
            radius={0}
            zIndex={100}
            closeOnClickOutside={false}
         >
            <div className="p-[30px] bg-white w-fit translate-x-[-25%]">
               <h3 className="text-heading text-2xl leading-[35px] font-bold mb-[25px]">Unsubscribe?</h3>
               <p className="font-serif text-lg leading-[28px] text-content whitespace-nowrap">
                  Are you sure you want to Unsubscribe from ‘{getNewsletterName()}’ newsletter and miss out on all the
                  latest updates?
               </p>
               <div className="text-blue flex items-center justify-end gap-[30px] text-base font-medium mt-[40px] w-full">
                  <button onClick={() => setModal()} className="font-outfit">
                     Cancel
                  </button>
                  <button
                     className="py-[11px] px-[20px] border-[1px] border-blue rounded-sm font-outfit"
                     onClick={() => onConfirm()}
                  >
                     Confirm
                  </button>
               </div>
            </div>
         </Modal>
      </div>
   );
}
