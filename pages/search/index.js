import StoryCard from "@/components/common/Content/StoryCard";
import Layout from "@/components/common/Layout/Layout";
import { getSearchResults, getTermSuggestions } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import { Autocomplete, Input } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchPage(props) {
   let { searchResult } = props;
   let stories = searchResult?.stories || {};
   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="w-[800px] mx-auto mt-[10px]">
            <SearchInput initialValue={props.query} />
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
   return (
      <div className="mb-[60px] flex flex-col gap-[30px]">
         {stories?.map((story, index) => (
            <StoryCard
               story={story}
               key={index}
               withImage
               imagePosition="left"
               customImageHeight={177}
               customImageWidth={270}
            />
         ))}
      </div>
   );
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
            <div key={index}>
               <span className="text-[#b3b3b3] bg-[#E6E6E680] px-[5px] py-[6px] rounded-md">
                  {category.title}
               </span>
            </div>
         ))}
      </div>
   );
}

function SearchInput({ initialValue }) {
   const router = useRouter();
   const [searchText, setSearchText] = useState(initialValue || "");
   const [debouncedSearchText, setDebouncedSearchText] = useDebouncedValue(
      searchText,
      500
   );
   const [suggestions, setSuggestions] = useState([]);

   function handleSearchSubmit(searchText) {
      router.push(`/search?s=${searchText}`);
   }

   async function handleAutoCompleteSuggestions(searchText) {
      let res = await getTermSuggestions(searchText);
      setSuggestions(res);
   }

   function handleChange(value) {
      setSearchText(value);
      if (value.length < 3) setSuggestions([]);
      if (value.length > 2) handleAutoCompleteSuggestions(value);
   }

   useEffect(() => {
      if (debouncedSearchText.length > 2)
         handleSearchSubmit(debouncedSearchText);
   }, [debouncedSearchText]);

   return (
      <>
         <Autocomplete
            autoFocus
            variant="filled"
            size="lg"
            placeholder="Search for category, region, company or more"
            styles={{
               input: {
                  fontFamily: "Montserrat",
                  borderRadius: "0",
                  fontSize: "16px",
                  lineHeight: "19.5px",
                  border: "none",
               },
               wrapper: {
                  border: "1px solid #C8C8C8",
               },
               item: {
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  padding: "5px 10px",
                  color: "gray",
                  borderRadius: "0",
               },
               dropdown: {
                  borderRadius: "0",
               },
            }}
            value={searchText}
            data={suggestions}
            onChange={handleChange}
            rightSection={<img src="/icons/search.svg" className="mr-[15px]" />}
            onKeyDownCapture={(e) => {
               if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearchSubmit(searchText);
               }
            }}
            onSubmit={() => handleSearchSubmit(searchText)}
            onItemSubmit={(value) => handleSearchSubmit(value.value)}
         />
      </>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const query = context.query.s || "";
   const searchResult = await getSearchResults(context.req, query, 1, "recent");
   return { props: { session, searchResult, query } };
}
