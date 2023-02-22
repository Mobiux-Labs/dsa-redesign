import { useModal } from "@/utils/context";
import { Modal } from "@mantine/core";
import { CloseButton } from "@/components/auth/LoginModal";
import { newsletters } from "@/constants";
import { useSession } from "@/utils/context";
import { setNlPreference } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import { findNewsletterByName } from "@/utils/helper";

export default function SubscribeNlModal({}) {
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
      preference[slug] = true;
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
            opened={modal?.includes("_subscribe_nl")}
            onClose={() => setModal()}
            withCloseButton={false}
            centered
            radius={0}
            zIndex={100}
            closeOnClickOutside={false}
         >
            <div className="p-[30px] bg-white w-fit">
               <h3 className="text-heading text-2xl leading-[35px] font-bold mb-[25px]">
                  Subscribe?
               </h3>
               <p className="font-serif text-lg leading-[28px] text-content whitespace-nowrap">
                  Are you sure you want to subscribe to ‘{getNewsletterName()}’
                  newsletter?
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
         {modal?.includes("_subscribe_nl") ? (
            <CloseButton setModal={setModal} />
         ) : null}
      </div>
   );
}
