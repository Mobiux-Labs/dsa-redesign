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
               crossorigin="anonymous"
            ></script>
         </body>
      </Html>
   );
}
