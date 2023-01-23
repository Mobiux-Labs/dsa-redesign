import { useState } from "react";
import { sections } from "@/constants";
import { createHeader } from "@/utils/network";

export default function SectionBar({}) {
   const [value, setValue] = useState(false);

   return (
      <div className="px-[120px] py-[20px] bg-[#35a7e90d] flex items-center text-darkgray relative">
         <ThemeSwitchButton />
         {/* Divider */}
         <div className="bg-lightgray h-[38px] w-[1px] ml-[25px]"></div>
         {/* Region selector */}
         <RegionSelector />
         {/* Scrollable sections buttons */}
         {sections.slice(0, 7).map((section) => (
            <SectionButton
               key={section.title}
               imgSrc={section.icon}
               name={section.title}
               link={section.link}
               slug={section.slug}
            />
         ))}
         {/* Right Arrow to scroll the buttons */}
         <button className="absolute right-[120px]">
            <img src="icons/right-arrow.svg" alt="" />
         </button>
      </div>
   );
}

function RegionSelector({}) {
   return (
      <div className="cursor-pointer flex flex-col mr-[45px] ml-[20px]">
         <img src={`icons/location.svg`} alt="" className="h-[16px]" />
         <div className="flex items-center mt-[12px]">
            <button
               id="dropdownDefaultButton"
               data-dropdown-toggle="regions-dropdown"
               className="flex items-center"
            >
               Select Region
               <span>
                  <img src="icons/dropdown.svg" className="ml-[8px]" alt="" />
               </span>
            </button>
            {/* Dropdown menu */}
            <div
               id="regions-dropdown"
               className="hidden bg-white p-3 shadow-md"
            >
               <ul aria-labelledby="dropdownDefaultButton">
                  <li>India</li>
                  <li>Indonesia</li>
                  <li>Malaysia</li>
                  <li>Philippines</li>
               </ul>
            </div>
         </div>
      </div>
   );
}

function SectionButton({ imgSrc, name, link, slug }) {
   async function handleCategoryClick() {
      const res = await fetch(`/api/subs/favourite/`, {
         method: "POST",
         headers: createHeader(),
         body: JSON.stringify({
            category_slug: slug,
            category_title: name,
            category_url: link,
            email: "roshin@mobiux.in",
         }),
      });
      const data = await res.json();
      console.log(data);
   }

   return (
      <div
         className="cursor-pointer flex flex-col mr-[45px]"
         onClick={() => handleCategoryClick()}
      >
         <img src={`icons/${imgSrc}`} alt={name} className="h-[16px]" />
         <div className="flex items-center mt-[12px]">
            <span className="mr-[8px]">{name}</span>
            <span>
               <img src="icons/star.svg" alt="" />
            </span>
         </div>
      </div>
   );
}

function ThemeSwitchButton() {
   return (
      <div className="theme-switch-btn flex items-center flex-col">
         <div>
            <label className="relative inline-flex items-center cursor-pointer">
               <input type="checkbox" value="" className="sr-only peer" />
               <div className="w-[30px] h-[16px] bg-gray rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:rounded-full after:h-[12px] after:w-[12px] after:transition-all peer-checked:bg-blue"></div>
            </label>
         </div>
         <span>Default</span>
      </div>
   );
}
