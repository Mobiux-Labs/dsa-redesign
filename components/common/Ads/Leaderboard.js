export default function LeaderboardAd({ withoutPadding = false }) {
   return (
      <div
         className={`bg-[#d5d5d519] ${withoutPadding ? "py-0" : "py-[25px]"}`}
      >
         <img
            src="https://media.dealstreetasia.com/uploads/poster/prod/Climate_tech-leaderboard.jpg?fit=931,93"
            alt=""
            className="mx-auto rounded-[16px] h-fit"
         />
      </div>
   );
}
