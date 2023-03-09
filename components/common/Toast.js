import { useToast } from "@/utils/context";
import { Dialog } from "@mantine/core";
import { useState } from "react";

export default function BottomToast() {
   const [toast, setToast] = useToast();
   const handleClose = () => setToast(null);
   let color = toast?.type === "success" ? "#35a7df" : toast?.type === "error" ? "red" : "orange";
   return (
      <div>
         <Dialog
            opened={toast}
            withCloseButton
            onClose={handleClose}
            size="lg"
            radius={5}
            zIndex={700}
            shadow={"sm"}
            // withBorder={false}
            styles={{ root: { borderBottom: `3px solid ${color}` } }}
         >
            <div className="font-sans text-base">
               <p className="font-semibold text-heading">{toast?.message}</p>
               <p className="text-content text-sm mt-[10px]">{toast?.description}</p>
            </div>
         </Dialog>
      </div>
   );
}
