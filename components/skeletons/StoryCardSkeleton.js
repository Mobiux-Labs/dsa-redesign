import { Skeleton } from "@mantine/core";
export default function StoryCardSkeleton({}) {
   return (
      <div>
         <Skeleton height={26} radius={5} mb={5} width={50} />
         <Skeleton height={100} radius={5} mb={5} />
         <Skeleton height={26} radius={5} mb={5} />
         <Skeleton height={20} radius={5} width={"50%"} />
      </div>
   );
}
