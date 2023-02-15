import StoryCard from "@/components/common/Content/StoryCard";
import Layout from "@/components/common/Layout/Layout";
import { getSearchResults, getTermSuggestions } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import SearchInput from "@/components/search/Input";
import SuggestedCategories from "@/components/search/SuggestedCategories";
import { useState } from "react";

export default function SearchPage(props) {
   let { searchResult } = props;
   const [page, setPage] = useState(1);
   const [stories, setStories] = useState([]);
   const [loading, setLoading] = useState(false);

   async function fetchMoreStories() {
      setLoading(true);
      const res = await getSearchResults(null, props.query, page + 1, "recent");
      if (!res) return;
      if (page == 1) setStories([...searchResult.stories, ...res.stories]);
      else setStories([...stories, ...res.stories]);
      setPage(page + 1);
      setLoading(false);
   }

   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="w-[800px] mx-auto">
            <div className="sticky top-[80px] bg-white py-[40px]">
               <SearchInput initialValue={props.query} />
               <SuggestedCategories />
            </div>
            <h1 className="text-heading leading-[55px] font-bold text-3xl mb-[30px]">
               Top Searches
            </h1>
            <SearchResults
               stories={stories.length > 0 ? stories : searchResult?.stories}
            />
            <LoadMoreButton
               onClick={() => fetchMoreStories()}
               loading={loading}
            />
         </div>
      </Layout>
   );
}

function LoadMoreButton({ onClick, loading }) {
   return (
      <div className="flex justify-center">
         <button
            disabled={loading}
            className="text-blue font-outfit font-medium py-[11px] px-[19px] leading-[17px] rounded-sm border-[2px] border-blue"
            onClick={onClick}
         >
            Load More Results
         </button>
      </div>
   );
}

function SearchResults({ stories }) {
   return (
      <div className="mb-[60px] flex flex-col gap-[30px]">
         {stories?.map((story, index) => (
            <div className="animate-fade-in" key={index}>
               <StoryCard
                  story={story}
                  withImage
                  imagePosition="left"
                  customImageHeight={177}
                  customImageWidth={270}
               />
            </div>
         ))}
      </div>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const query = context.query.s || "";
   const searchResult = await getSearchResults(context.req, query, 1, "recent");
   return { props: { session, searchResult, query } };
}
