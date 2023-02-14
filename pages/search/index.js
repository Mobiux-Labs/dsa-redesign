import CategoryBadge from "@/components/common/Content/CategoryBadge";
import Layout from "@/components/common/Layout/Layout";
import { getSearchResults } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import { Input } from "@mantine/core";
import { useState } from "react";

export default function SearchPage(props) {
   let { searchResult } = props;
   let stories = searchResult?.stories || {};
   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="w-[800px] mx-auto mt-[10px]">
            <SearchInput />
            <SuggestedCategories />
            <h1 className="text-heading leading-[55px] font-bold text-3xl mt-[40px] mb-[30px]">
               Top Searches
            </h1>
            <SearchResults stories={stories} />
         </div>
      </Layout>
   );
}

function SearchResults({ stories }) {
   return <div className="mb-[60px]"></div>;
}

function SuggestedCategories() {
   const categories = [
      {
         title: "Private Equity",
         slug: "private-equity",
      },
      {
         title: "Venture Capital",
         slug: "venture-capital",
      },
      {
         title: "IPOs",
         slug: "m-a",
      },
      {
         title: "Unicorns",
         slug: "investment-banking",
      },
   ];
   return (
      <div className="flex gap-[20px] mt-[15px]">
         {categories.map((category, index) => (
            <div>
               <span className="text-[#b3b3b3] bg-[#E6E6E680] px-[5px] py-[6px] rounded-md">
                  {category.title}
               </span>
            </div>
         ))}
      </div>
   );
}

function SearchInput() {
   const [value, setValue] = useState("");
   return (
      <>
         <Input
            variant="filled"
            size="lg"
            placeholder="Search for category, region, company or more"
            styles={{
               input: {
                  fontFamily: "Montserrat",
                  borderRadius: "0",
                  fontSize: "16px",
                  lineHeight: "19.5px",
                  border: "1px solid #C8C8C8",
               },
            }}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            rightSection={<img src="/icons/search.svg" className="mr-[15px]" />}
         />
      </>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const searchResult = await getSearchResults(context.req, "", 1, "recent");
   return { props: { session, searchResult } };
}
