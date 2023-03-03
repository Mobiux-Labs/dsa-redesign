import { gtmId } from "@/constants";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
   return (
      <Html lang="en">
         <Head />
         <body>
            <Main />
            <NextScript />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
            <script
               async
               src="https://code.jquery.com/jquery-3.6.1.min.js"
               integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
               crossOrigin="anonymous"
            ></script>
            <script
               async
               dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                    })(window,document,'script','dataLayer','${gtmId}');`,
               }}
            />
            <noscript
               dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
               }}
            />
         </body>
      </Html>
   );
}
