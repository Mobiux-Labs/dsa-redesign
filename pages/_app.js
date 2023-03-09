import { logoUrl, gtmId } from "@/constants";
import "@/styles/globals.css";
import "@/styles/common.scss";
import { useEffect, useState } from "react";
import { ThemeContext, SessionContext, ModalContext, ToastContext } from "@/utils/context";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import ProgressIndicator from "@/components/common/NProgress";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import DefaultHead from "@/components/common/SEO/Default";

export default function App({ Component, pageProps }) {
   const [compactTheme, setCompactTheme] = useState(true);
   const [session, setSession] = useState({});
   const [modal, setModal] = useState();
   const [toast, setToast] = useState();
   const router = useRouter();

   return (
      <MantineProvider>
         <CustomHead />
         <DefaultHead />
         <ThemeContext.Provider value={[compactTheme, setCompactTheme]}>
            <ModalContext.Provider value={[modal, setModal]}>
               <ToastContext.Provider value={[toast, setToast]}>
                  <SessionContext.Provider value={[session, setSession]}>
                     <ProgressIndicator />
                     <AnimatePresence mode="wait">
                        <Component {...pageProps} key={router.asPath} />
                     </AnimatePresence>
                  </SessionContext.Provider>
               </ToastContext.Provider>
            </ModalContext.Provider>
         </ThemeContext.Provider>
      </MantineProvider>
   );
}

function CustomHead() {
   return (
      <Head>
         <link rel="icon" type="image/x-icon" href={logoUrl} />
         <meta name="viewport" content="width=device-width, initial-scale=1 ,user-scalable = no" />
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
         <script>window.dataLayer = window.dataLayer || [];</script>
      </Head>
   );
}
