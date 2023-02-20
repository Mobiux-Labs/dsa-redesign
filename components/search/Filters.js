import { MultiSelect, Select } from "@mantine/core";
import { categories, regions } from "@/constants";
import { useState } from "react";
import CustomIcon from "@/utils/icon-mapping";
import DropdownArrowIcon from "../common/DropdownArrow";

export default function FiltersAndSorts({}) {
   const [selectedOptions, setSelectedOptions] = useState([]);

   let dropdownStyles = {
      dropdown: {
         borderRadius: "0",
      },
      item: {
         fontFamily: "Montserrat",
         fontSize: "14px",
         padding: "5px 10px",
         color: "#B3B3B3",
      },
      placeholder: {
         fontWeight: "600",
      },
   };
   let sortByOptions = [
      { label: "Sort By: Latest", value: "recent" },
      { label: "Sort By: Relevant", value: "relevant" },
   ];

   function addToSelectedOptions(value) {
      if (selectedOptions.includes(value)) return;
      setSelectedOptions((prev) => [...prev, value]);
   }

   return (
      <div>
         <div className="flex justify-between mt-[15px]">
            <div className="flex gap-[15px]">
               <Select
                  placeholder="All Regions"
                  data={regions}
                  className="rounded-md mantine-select-dropdown"
                  rightSection={<DropdownArrowIcon />}
                  styles={dropdownStyles}
                  value={regions[0]}
                  onChange={(value) => addToSelectedOptions(value)}
               />
               <Select
                  placeholder="All Category"
                  data={categories}
                  className="mantine-select-dropdown"
                  rightSection={<DropdownArrowIcon />}
                  styles={dropdownStyles}
                  value={categories[0]}
                  onChange={(value) => addToSelectedOptions(value)}
               />
            </div>
            <Select
               placeholder="Sort By: Latest"
               data={sortByOptions}
               className="mantine-select-dropdown"
               rightSection={<DropdownArrowIcon />}
               styles={dropdownStyles}
            />
         </div>
         <div>
            <MultiSelect
               data={selectedOptions}
               value={selectedOptions}
               className="mt-[5px] ring-0 mantine-multiselect"
               rightSection={<></>}
               styles={{
                  input: {
                     fontFamily: "Montserrat",
                     border: "none",
                  },
                  value: {
                     textTransform: "capitalize",
                     borderRadius: "5px",
                     background: "rgba(230, 230, 230, 0.5)",
                     color: "#B3B3B3",
                     margin: 0,
                     fontSize: "14px",
                     fontWeight: "500",
                     padding: "6px 0 6px 5px",
                     marginRight: "17px",
                     display: "flex",
                  },
               }}
            />
         </div>
      </div>
   );
}
