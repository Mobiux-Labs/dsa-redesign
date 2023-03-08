import Advert from "@/components/common/Ads/Advert";
import { EditArticleButton } from "@/components/common/Buttons";
import CategoryBadge from "@/components/common/Content/CategoryBadge";
import Layout from "@/components/common/Layout/Layout";
import ArticleJsonLdComponent from "@/components/common/SEO/ArticleJsonLd";
import ArticleSEO from "@/components/common/SEO/ArticleSEO";
import BreadcrumbJsonLdComponent from "@/components/common/SEO/BreadcrumbJsonLd";
import AuthorInfo from "@/components/story/AuthorInfo";
import Blocker from "@/components/story/Blocker";
import ShareIcons from "@/components/story/ShareIcons";
import { advertLocations, baseUrl } from "@/constants";
import { getReport } from "@/utils/api-calls";
import { loader } from "@/utils/helper";
import { getUserSession } from "@/utils/user";
import Image from "next/image";
import { useRouter } from "next/router";
import ReportFile from "./ReportFrame";

export default function Report(props) {
   let story = props.report;
   const router = useRouter();
   let pageUrl = baseUrl + router.asPath;
   let loggedIntoWP = props?.session?.loggedIntoWP;
   let pdfUrl = story?.pdf_attachment_url;

   return (
      <Layout session={props.session} withLeaderBoardAd={false}>
         <ArticleSEO article={story} />
         <ArticleJsonLdComponent article={story} />
         <BreadcrumbJsonLdComponent pageUrl={pageUrl} title={story?.post_title} />
         <div className="w-[800px] mx-auto max-lg:w-[85%]">
            {/* Advertisement */}
            <div className="mt-[10px] mb-[40px]">
               <Advert withoutPadding adLocation={advertLocations.bottom_article.name} />
            </div>
            <CategoryBadge category={story?.category} />
            <h1 className="text-heading font-bold text-3xl leading-[55px] mt-[5px]">{story?.post_title}</h1>
            {/* Author info and the share icons */}
            <div className="flex max-md:flex-col max-md:mb-[10px] justify-between py-[20px] items-center sticky bg-white top-[80px] z-[500] w-[880px] translate-x-[-40px] px-[40px]">
               <AuthorInfo story={story} />
               <ShareIcons story={story} bookmarked={props?.session?.bookmarked} />
            </div>
            {/* Excerpt */}
            <p className="font-serif font-medium leading-[28px] text-content">{story?.post_excerpt}</p>
            {/* Image */}
            <Image
               className="my-[30px] h-[488px] max-lg:h-[258px] w-full object-cover rounded-md"
               src={story?.image_url.replace("cdn", "media")}
               width={1000}
               height={488}
               loader={loader}
            />
            {/* Content */}
            <div
               className="font-serif text-content text-lg leading-[28px] article-content"
               dangerouslySetInnerHTML={{ __html: story?.post_content }}
            />
            {/* Blocker if applicable */}
            {props.showBlocker ? <Blocker /> : <ReportFile pdfUrl={pdfUrl} />}
            {/* Advertisement */}
            <div className="mt-[80px]">
               <Advert withoutPadding adLocation={advertLocations.bottom_article.name} />
            </div>
         </div>
         {loggedIntoWP ? <EditArticleButton articleId={story?.id} /> : null}
      </Layout>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   let { slug } = context.params;
   let report = await getReport(context.req, slug);
   return { props: { session, report } };
}
