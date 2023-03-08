export default function ReportFile({ pdfUrl }) {
   return (
      <iframe
         src={`/wp-content/themes/dealstreetasia-new/pdf.js/es5/web/viewer.html?file=${pdfUrl}`}
         height="80%"
         id="fraViewDocumentsPDFViewer"
         runat="server"
         width="100%"
         className="mt-3 mb-4"
         style={{
            height: "80vh",
            border: "none",
            boxShadow: "0px 4px 30px rgba(184, 183, 183, 0.2)",
            borderRadius: "5px",
         }}
      ></iframe>
   );
}
