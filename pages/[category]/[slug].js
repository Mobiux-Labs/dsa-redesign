import Layout from "@/components/common/Layout/Layout";
import { getCategoryStories, getLastReadStories } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import { sections, categoryDesciptions } from "@/constants";
import TopZone from "@/components/home/TopZone";
import CarouselBanner from "@/components/home/CarouselBanner";
import StoryCard from "@/components/common/Content/StoryCard";
import LoadMoreStoriesSection from "@/components/common/Sections/LoadMoreStories";
import HorizontalSection from "@/components/home/HorizontalSection";

export default function CategoryPage(props) {
   const stories = props.data;
   const title = sections.find((section) => section.slug === props.slug).title;
   const storiesList = props.data?.stories?.slice(9, 18);
   console.log(storiesList);
   return (
      <Layout session={props.session}>
         <section className="px-[120px]">
            <h1 className="text-heading font-bold text-3xl leading-[55px]">
               {title}
            </h1>
            <p className="text-smalltext text-md font-serif">
               {categoryDesciptions[props.slug]}
            </p>
            <div className="mt-[66px]">
               <TopZone stories={stories} />
            </div>
            <CarouselBanner />
         </section>
         <LoadMoreStoriesSection
            title={title}
            storiesList={storiesList}
            category={props.category}
            slug={props.slug}
         />
         {/* Popular reads and you might also like */}
         <div className="mt-[100px]"></div>
         <HorizontalSection title={"Venture capital"} stories={storiesList} />
         {/* Last Read section */}
         <HorizontalSection
            title={"Last Read"}
            stories={props.lastReadStories}
            background={false}
         />
      </Layout>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const { category, slug } = context.query;
   const data = await getCategoryStories(category, slug, context.req, 18);
   const lastReadStories = await getLastReadStories(context.req);
   return { props: { category, slug, session, data, lastReadStories } };
}
