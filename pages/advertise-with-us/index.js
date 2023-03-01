import { getUserSession } from "@/utils/user";
import Layout from "@/components/common/Layout/Layout";
import Image from "next/image";
import { loader } from "@/utils/helper";
import { Select, Textarea, TextInput } from "@mantine/core";
import { countryList } from "@/utils/countries";
import DropdownArrowIcon from "@/components/common/DropdownArrow";

export default function AdvertisePage(props) {
   let imageUrl = `https://media.dealstreetasia.com/uploads/Website/advertise.png`;
   let mapUrl = `https://media.dealstreetasia.com/uploads/Website/readership-map.png`;
   let logosRow1 = `https://media.dealstreetasia.com/uploads/Website/logo-2.png`;
   let logosRow2 = `https://media.dealstreetasia.com/uploads/Website/logos-1.png`;
   let logosRow3 = `https://media.dealstreetasia.com/uploads/Website/logos-3.png`;
   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="text-center">
            <p className="text-content font-semibold uppercase text-sm mb-[5px]">
               Advertise
            </p>
            <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">
               Reach our engaged audience
            </h1>
            <Image
               src={imageUrl}
               width={1000}
               height={400}
               loader={loader}
               className="mx-auto rounded-sm mb-[30px]"
            />
            <div className="mx-auto w-[800px] mt-[50px] mb-[150px]">
               <h2 className="font-bold text-3xl leading-[55px] text-heading mb-[15px]">
                  Best Visibility and Market Intelligence
               </h2>
               <p className="text-content font-serif text-lg leading-[28px] mb-[30px]">
                  Nikkei Group-backed DealStreetAsia is the region's leading
                  publisher of news on investments, M&A, PE, VC, investment
                  banking, IPOs and startups.
               </p>
               <div className="grid grid-cols-2 grid-rows-2 gap-x-[180px] gap-y-[80px] text-left">
                  <div>
                     <h3 className="text-heading font-bold text-2xl leading-[35px] mb-[15px]">
                        We Report
                     </h3>
                     <p className="text-content text-lg leading-[28px] font-serif">
                        On investments, M&A, private equity, venture capital,
                        investment banking and the business of start-ups.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-heading font-bold text-2xl leading-[35px] mb-[15px]">
                        We Provide
                     </h3>
                     <p className="text-content text-lg leading-[28px] font-serif">
                        Insight into some of Asia's most opaque markets,
                        bridging the gap between investors and opportunities
                     </p>
                  </div>
                  <div>
                     <h3 className="text-heading font-bold text-2xl leading-[35px] mb-[15px]">
                        Our Platform
                     </h3>
                     <p className="text-content text-lg leading-[28px] font-serif">
                        Our platform acts as a one-stop-shop for readers wishing
                        to track deals across Southeast Asia, India and Greater
                        China.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-heading font-bold text-2xl leading-[35px] mb-[15px]">
                        Asia PE-VC Summit
                     </h3>
                     <p className="text-content text-lg leading-[28px] font-serif">
                        Our editorially led events help our audience understand
                        changing megatrends in PE, VC, start-up and M&A across
                        sectors and countries.
                     </p>
                  </div>
               </div>
            </div>
            <div className="h-[400px] bg-bluebadgebg w-full flex items-center justify-center flex-col mb-[150px]">
               <h2 className="font-bold text-3xl leading-[55px] text-content">
                  Our Statistics
               </h2>
               <div className="flex mt-[50px] gap-[115px]">
                  <div>
                     <h3 className="text-darkblue font-bold text-4xl leading-[60px]">
                        345K
                     </h3>
                     <p className="text-content text-lg leading-[19px] mt-[15px]">
                        Monthly Page Views
                     </p>
                  </div>
                  <div>
                     <h3 className="text-darkblue font-bold text-4xl leading-[60px]">
                        30K+
                     </h3>
                     <p className="text-content text-lg leading-[19px] mt-[15px]">
                        Daily Newsletter Subscribers
                     </p>
                  </div>
                  <div>
                     <h3 className="text-darkblue font-bold text-4xl leading-[60px]">
                        22%
                     </h3>
                     <p className="text-content text-lg leading-[19px] mt-[15px]">
                        Newsletter Open Rate
                     </p>
                  </div>
               </div>
            </div>
            <div className="mb-[150px]">
               <h2 className="text-darkblue font-bold text-4xl leading-[35px] mb-[100px]">
                  Top Readership
               </h2>
               <Image
                  src={mapUrl}
                  width={1000}
                  height={400}
                  loader={loader}
                  className="mx-auto rounded-sm mb-[30px]"
               />
            </div>
            <div className="mb-[150px]">
               <h2 className="text-center font-bold mb-[80px] text-3xl text-heading leading-[55px]">
                  Our Advertisers
               </h2>
               <div className="flex flex-col gap-[100px]">
                  <Image
                     src={logosRow1}
                     width={1000}
                     height={40}
                     loader={loader}
                     className="mx-auto rounded-sm mb-[30px]"
                  />
                  <Image
                     src={logosRow2}
                     width={1000}
                     height={40}
                     loader={loader}
                     className="mx-auto rounded-sm mb-[30px]"
                  />
                  <Image
                     src={logosRow3}
                     width={1000}
                     height={40}
                     loader={loader}
                     className="mx-auto rounded-sm mb-[30px]"
                  />
               </div>
            </div>
         </div>
         <Form />
      </Layout>
   );
}

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

function Form() {
   return (
      <div className="w-[800px] mx-auto text-center mb-[110px]">
         <h2 className="text-heading font-bold text-3xl leading-[55px] mb-[20px]">
            Best Visibility and Market Intelligence
         </h2>
         <p className="text-content text-lg leading-[28px] text-left font-serif mb-[30px]">
            To find out more about our readership and reach, please request a
            copy of our media kit. You may also wish to wish to find out about
            our events and sponsorship opportunities by reaching out to our
            dedicated team at{" "}
            <a href="mailto:dsaevents@dealstreetasia.com" className="text-blue">
               dsaevents@dealstreetasia.com
            </a>
            . <br /> If you would like to submit an information request, please
            complete this form.{" "}
         </p>
         <form action="">
            <div className="grid grid-cols-2 gap-[30px]">
               <TextInput placeholder="First Name" className="ad-form-input" />
               <TextInput placeholder="Last Name" className="ad-form-input" />
               <TextInput placeholder="Email ID" className="ad-form-input" />
               <TextInput
                  placeholder="Client/Brand name"
                  className="ad-form-input"
               />
               <TextInput
                  placeholder="Agency(If applicable    )"
                  className="ad-form-input"
               />
               <Select
                  placeholder="Country"
                  data={countryList}
                  className="rounded-md mantine-select-dropdown ad-form-input"
                  rightSection={<DropdownArrowIcon />}
                  styles={dropdownStyles}
               />
               <Select
                  placeholder="Type of partnership"
                  data={[]}
                  className="rounded-md mantine-select-dropdown ad-form-input"
                  rightSection={<DropdownArrowIcon />}
                  styles={dropdownStyles}
               />
               <Select
                  placeholder="Budget"
                  data={[]}
                  className="rounded-md mantine-select-dropdown ad-form-input"
                  rightSection={<DropdownArrowIcon />}
                  styles={dropdownStyles}
               />
               <div className="grid grid-cols-2 col-span-2 gap-[30px]">
                  <div>
                     <Select
                        placeholder="Campaign Objectives"
                        data={[]}
                        className="rounded-md mantine-select-dropdown ad-form-input"
                        rightSection={<DropdownArrowIcon />}
                        styles={dropdownStyles}
                     />
                     <Select
                        placeholder="Offerings Interested in"
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
      </div>
   );
}

export async function getServerSideProps(ctx) {
   let session = await getUserSession(ctx.req);
   return {
      props: { session },
   };
}
