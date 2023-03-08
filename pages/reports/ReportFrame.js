export default function ReportFile({ pdfUrl }) {
   return (
      <iframe
         src={`/wp-content/themes/dealstreetasia-new/pdf.js/es5/web/viewer.html?file=${pdfUrl}`}
         height="80%"
         id="fraViewDocumentsPDFViewer"
         runat="server"
         width="100%"
         className="mt-3 mb-4"
         style={{ height: "80vh", border: "none", boxShadow: "1px 1px 16px rgba(0, 0, 0, 0.5)" }}
      ></iframe>
   );
}
