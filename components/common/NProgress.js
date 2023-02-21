import NextNProgress from "nextjs-progressbar";

export default function ProgressIndicator({}) {
   return (
      <NextNProgress
         color="#35a7df"
         height={2}
         options={{
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            showSpinner: false,
         }}
      />
   );
}
