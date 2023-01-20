import { logoUrl } from "@/constants";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomHead />
      <DefaultSeo title="DealStreetAsia - Asia focused financial news and intelligence platform" />
      <Component {...pageProps} />
    </>
  );
}

function CustomHead() {
  return (
    <Head>
      <link rel="icon" type="image/x-icon" href={logoUrl} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
      />
    </Head>
  );
}
