export default function SuggestedCategories() {
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
