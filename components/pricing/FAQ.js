import { faqs } from "@/constants";
import { Accordion } from "@mantine/core";

export default function FAQ({}) {
   let accordionStyles = {
      content: {
         fontFamily: "Mate",
         color: "#5E5E5E",
         marginTop: "10px",
         padding: "0px 30px 30px 30px",
         fontSize: "16px",
      },
      label: {
         fontFamily: "Montserrat",
         fontWeight: "600",
         color: "#5E5E5E",
         fontSize: "16px",
      },
      item: {
         backgroundColor: "white",
         border: "1px solid #C8C8C8",
         borderRadius: "5px",
         boxShadow: "none",
      },
      control: {
         padding: "30px",
      },
   };
   return (
      <div className="my-[100px]">
         <h2 className="text-heading font-bold text-center text-3xl leading-[55px]">
            Frequently Asked Questions
         </h2>
         <Accordion
            variant="separated"
            className="mt-[50px]"
            styles={accordionStyles}
            defaultValue={faqs[0]?.question}
         >
            {faqs.map((faq, index) => (
               <FAQAccordion faq={faq} key={index} />
            ))}
         </Accordion>
      </div>
   );
}

function FAQAccordion({ faq }) {
   return (
      <Accordion.Item
         value={faq?.question}
         className="faq-accordion-item mb-[30px]"
      >
         <Accordion.Control>{faq?.question}</Accordion.Control>
         <Accordion.Panel>
            {" "}
            <span dangerouslySetInnerHTML={{ __html: faq?.answer }}></span>{" "}
         </Accordion.Panel>
      </Accordion.Item>
   );
}
