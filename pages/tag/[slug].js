import CategoryBadge from "@/components/common/Content/CategoryBadge";
import Layout from "@/components/common/Layout/Layout";
import { getStoriesForTag } from "@/utils/api-calls";
import { loader, trimUrl } from "@/utils/helper";
import { getUserSession } from "@/utils/user";
import Image from "next/image";
import AuthorInfo from "@/components/story/AuthorInfo";
import Link from "next/link";
import TrendingUnderTag from "@/components/tag/Trending";
import VerticalListing from "@/components/tag/VerticlaListing";
import NothingToShow from "@/components/common/NothingToShow";

export default function TagsPage(props) {
   let stories = props.stories;
   let hasStories = stories.length > 0;
   return (
      <Layout session={props.session}>
         <div className="w-[800px] mx-auto">
            {hasStories ? <MainStory story={stories[0]} /> : <NothingToShow />}
            <TrendingUnderTag stories={props?.trending} />
            {hasStories && <VerticalListing storiesList={stories.slice(1, 6)} slug={props?.slug} />}
         </div>
      </Layout>
   );
}

function MainStory({ story }) {
   return (
      <div>
         <Link href={trimUrl(story?.post_url)}>
            <Image src={story?.image_url} width={800} height={443} className="rounded-md mb-[10px]" loader={loader} />
         </Link>
         <CategoryBadge category={story?.category} />
         <Link href={trimUrl(story?.post_url)}>
            <h1 className="text-3xl font-bold text-heading leading-[55px]">{story?.post_title}</h1>
            <p className="text-lg text-content leading-[28px] my-[5px] font-serif">{story?.post_excerpt}</p>
         </Link>
         <AuthorInfo story={story} />
      </div>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const { slug } = context.params;
   const { stories, trending } = await getStoriesForTag(context.req, slug);
   return { props: { session, slug, stories, trending } };
}
