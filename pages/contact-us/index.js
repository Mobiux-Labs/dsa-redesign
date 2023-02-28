import DropdownArrowIcon from "@/components/common/DropdownArrow";
import Layout from "@/components/common/Layout/Layout";
import CustomIcon from "@/utils/icon-mapping";
import { getUserSession } from "@/utils/user";
import { Select, Textarea, TextInput } from "@mantine/core";

let dropdownStyles = {
   dropdown: {
      borderRadius: "0",
   },
   item: {
      fontFamily: "Montserrat",
      fontSize: "14px",
      padding: "5px 10px",
      color: "#B3B3B3",
   },
   placeholder: {
      fontWeight: "600",
   },
};

export default function ContactUsPage(props) {
   return (
      <Layout session={props.session}>
         <div className="w-[800px] mx-auto text-center">
            <p className="text-content font-semibold uppercase text-sm mb-[5px]">
               Contact
            </p>
            <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[50px]">
               Get In Touch
            </h1>
            <form action="" className="border-b-[1px] border-gray pb-[60px]">
               <div className="grid grid-cols-2 gap-[30px]">
                  <TextInput
                     placeholder="First Name"
                     className="ad-form-input"
                  />
                  <TextInput
                     placeholder="Last Name"
                     className="ad-form-input"
                  />
                  <div className="grid grid-cols-2 col-span-2 gap-[30px]">
                     <div>
                        <TextInput
                           placeholder="Email ID"
                           className="ad-form-input"
                        />
                        <Select
                           placeholder="Nature of Query"
                           data={[]}
                           className="rounded-md mantine-select-dropdown ad-form-input mt-[30px]"
                           rightSection={<DropdownArrowIcon />}
                           styles={dropdownStyles}
                        />
                     </div>
                     <Textarea
                        placeholder="Message"
                        className="rouneded-md ad-form-input"
                        styles={{
                           input: {
                              fontFamily: "Montserrat",
                              height: "120px",
                           },
                        }}
                     />
                  </div>
               </div>
               <button
                  className={`font-medium text-blue mt-[40px] rounded-sm border-[2px] border-blue border-solid block mx-auto py-[11px] px-[20px] font-outfit`}
               >
                  Send Message
               </button>
            </form>
            <div className="mt-[60px] flex text-left gap-[200px] justify-between">
               <div>
                  <p className="text-heading text-2xl font-bold leading-[35px] mb-[10px]">
                     Address
                  </p>
                  <p className="text-lg text-content leading-[28px] w-[289px] font-serif">
                     Capital Tower, #12-01, 168 Robinson Road, Singalore 068912
                  </p>
               </div>
               <div>
                  <p className="text-heading text-2xl font-bold leading-[35px] mb-[10px]">
                     Connect with us on
                  </p>
                  <div className="social-icons flex gap-[25px]">
                     <CustomIcon
                        name={"linkedin"}
                        color={"#1C70B6"}
                        height={14}
                     />
                     <CustomIcon
                        name={"twitter"}
                        color={"#1C70B6"}
                        height={14}
                     />
                     <CustomIcon
                        name={"facebook"}
                        color={"#1C70B6"}
                        height={14}
                     />
                     <CustomIcon
                        name={"instagram"}
                        color={"#1C70B6"}
                        height={14}
                     />
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
}

export async function getServerSideProps(context) {
   let session = await getUserSession(context.req);
   return { props: { session } };
}
