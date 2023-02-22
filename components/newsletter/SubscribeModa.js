import { useModal } from "@/utils/context";
import { Modal } from "@mantine/core";
import { CloseButton } from "@/components/auth/LoginModal";

export default function SubscribeNlModal({}) {
   const [modal, setModal] = useModal();

   function getNewsletterName() {
      if (!modal) return;
      const name = modal.split("-").pop();
      return name;
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
                  Yay!
               </h3>
               <p className="font-serif text-lg leading-[28px] text-content whitespace-nowrap">
                  You are now subscribed to ‘{getNewsletterName()}’ newsletter!
               </p>
               <div className="text-blue flex items-center justify-end gap-[30px] text-base font-medium mt-[40px] w-full">
                  <button onClick={() => setModal()} className="font-outfit">
                     Cancel
                  </button>
                  <button
                     className="py-[11px] px-[20px] border-[1px] border-blue rounded-sm font-outfit"
                     onClick={() => setModal()}
                  >
                     Done
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
