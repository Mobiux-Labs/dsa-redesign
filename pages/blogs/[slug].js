import Layout from "@/components/common/Layout/Layout";
import { getBlog, getLastReadStories } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import AuthorInfo from "@/components/story/AuthorInfo";
import ShareIcons from "@/components/story/ShareIcons";
import { loader } from "@/utils/helper";
import Image from "next/image";
import HorizontalSection from "@/components/home/HorizontalSection";

export default function Blog(props) {
   let blog = props.blogData;
   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="w-[800px] mx-auto">
            <h1 className="text-heading font-bold text-3xl leading-[55px] mt-[5px]">
               {blog?.post_title}
            </h1>
            {/* Author info and the share icons */}
            <div className="flex justify-between py-[20px] items-center sticky bg-white top-[80px]">
               <AuthorInfo story={blog} />
               <ShareIcons
                  story={blog}
                  bookmarked={props?.session?.bookmarked}
               />
            </div>
            {/* Excerpt */}
            <p className="font-serif font-medium leading-[28px] text-content">
               {blog?.post_excerpt}
            </p>
            {/* Image */}
            <Image
               className="my-[30px] h-[488px] w-full object-cover rounded-md"
               src={blog?.image_url}
               width={1000}
               height={488}
               loader={loader}
            />
            {/* Content */}
            <div
               className="font-serif text-content text-lg leading-[28px] article-content"
               dangerouslySetInnerHTML={{ __html: blog?.post_content }}
            />
            <div className="divider mt-[70px]"></div>
         </div>
         {/* Last read */}
         {props.lastReadStories?.length > 0 ? (
            <HorizontalSection
               stories={props.lastReadStories}
               title="Last Read"
               background={false}
            />
         ) : null}
      </Layout>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const slug = context.params.slug;
   const blogData = await getBlog(context.req, slug);
   const lastReadStories = await getLastReadStories(context.req);
   return { props: { session, blogData, lastReadStories } };
}
