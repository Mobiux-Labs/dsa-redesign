import { getTimeAgo } from "@/utils/helper";
import Image from "next/image";
import CategoryBadge from "./CategoryBadge";

export default function StoryCard({ story }) {
  const authors = story?.authors;
  const timeToRead = story?.time_to_read;
  return (
    <div className="content flex flex-col h-full justify-between">
      <div>
        <CategoryBadge category={story?.category} />
        <h2 className="text-heading font-bold text-2xl my-[5px]">
          {story?.post_title}
        </h2>
        <p className="font-serif text-lg text-content">{story?.post_excerpt}</p>
      </div>
      {/* Bottom info Author, time ago and minutes read */}
      <div className="text-sm text-smalltext mt-[5px]">
        <p>
          <span className="text-capitalize">
            {authors[0]?.data?.display_name}
          </span>{" "}
          | <span>{getTimeAgo(story?.post_date)}</span> |{" "}
          <span>
            {timeToRead} {timeToRead == 1 ? "min" : "mins"} read
          </span>
        </p>
      </div>
    </div>
  );
}
