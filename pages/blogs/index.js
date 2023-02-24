import StoryCard from "@/components/common/Content/StoryCard";
import Layout from "@/components/common/Layout/Layout";
import { getBlogsList } from "@/utils/api-calls";
import { getTimeAgo, loader } from "@/utils/helper";
import { getUserSession } from "@/utils/user";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogPage(props) {
   let topStories = props.blogs.slice(0, 2);
   let otherStories = props.blogs.slice(2, props.blogs.length);
   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="px-[220px] pb-[150px]">
            <div className="text-center mb-[40px]">
               <p className="text-content font-semibold uppercase text-sm mb-[5px]">
                  Blog
               </p>
               <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">
                  Announcements and More
               </h1>
            </div>
            <TopBlogs stories={topStories} />
            <BlogsList initialBlogs={otherStories} />
         </div>
      </Layout>
   );
}

function BlogsList({ initialBlogs }) {
   const [blogs, setBlogs] = useState(initialBlogs || []);
   const [page, setPage] = useState(2);
   const [loading, setLoading] = useState(false);

   async function fetchMoreBlogs() {
      setLoading(true);
      let moreBlogs = await getBlogsList(null, page, 15);
      setBlogs([...blogs, ...moreBlogs]);
      setPage(page + 1);
      setLoading(false);
   }

   return (
      <div>
         <div className="mt-[50px] grid grid-cols-3 gap-x-[30px] gap-y-[50px] mb-[50px]">
            {blogs.slice(0, blogs.length - 1).map((blog, index) => (
               <StoryCard
                  key={index}
                  story={blog}
                  withExcerpt={false}
                  withImage
                  imagePosition="top"
                  customClass="blog-post-card"
                  withCategory={false}
               />
            ))}
         </div>
         <button
            className={`font-medium text-blue mt-[50px] rounded-sm border-[1.5px] border-blue border-solid block mx-auto py-[11px] px-[20px] font-outfit ${
               loading && "opacity-50"
            }`}
            onClick={fetchMoreBlogs}
            disabled={loading}
         >
            See More
         </button>
      </div>
   );
}

function TopBlogs({ stories }) {
   return (
      <div className="grid grid-cols-2 gap-[30px]">
         {stories.map((blog, index) => (
            <div key={index}>
               <Image
                  src={blog?.image_url}
                  height={300}
                  width={1000}
                  className="rounded-md mb-[15px]"
                  loader={loader}
               />
               <h2 className="text-heading text-2xl font-bold leading-[35px]">
                  {blog?.post_title}
               </h2>
               <div className={`text-smalltext text-sm mt-[5px]`}>
                  <p>
                     <Link
                        href={
                           blog?.authors[0]?.data?.url
                              ? blog?.authors[0]?.data?.url
                              : ""
                        }
                     >
                        <span className="text-capitalize hover:text-black">
                           {blog?.authors[0]?.data?.display_name}
                        </span>
                     </Link>{" "}
                     | <span>{getTimeAgo(blog?.post_date)}</span> |{" "}
                     <span>
                        {blog?.time_to_read}{" "}
                        {blog?.time_to_read == 1 ? "min" : "mins"} read
                     </span>
                  </p>
               </div>
            </div>
         ))}
      </div>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   let blogs = await getBlogsList(context.req, 1, 15);
   return { props: { session, blogs } };
}
