import { MultiSelect, Select } from "@mantine/core";
import { categories, regions } from "@/constants";
import { useState, useEffect } from "react";
import DropdownArrowIcon from "../common/DropdownArrow";
import { useRouter } from "next/router";
import { removeElementFromArray } from "@/utils/helper";

export default function FiltersAndSorts({
   initialCountries,
   initialSections,
   initialSortBy,
}) {
   const [selectedOptions, setSelectedOptions] = useState([]);
   const [selectedRegions, setSelectedRegions] = useState(
      initialCountries || []
   );
   const [selectedCategories, setSelectedCategories] = useState(
      initialSections || []
   );
   const [sortBy, setSortBy] = useState(initialSortBy || "recent");
   const router = useRouter();

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

   function createQuery() {
      let queryText = router.query.s;
      let categories = selectedCategories.length
         ? selectedCategories.map((category) => category).join(",")
         : "";
      let regions = selectedRegions.length
         ? selectedRegions.map((region) => region).join(",")
         : "";
      let sort = sortBy === "recent" ? "recent" : sortBy;
      let query = `?s=${queryText}&sections=${categories}&countries=${regions}&sortBy=${sort}`;
      return query;
   }

   function handleRemoveOption(value) {
      let removedValue = selectedOptions.filter(
         (option) => !value.includes(option)
      )[0];
      setSelectedOptions(value);
      if (selectedRegions.includes(removedValue)) {
         setSelectedRegions(
            removeElementFromArray(selectedRegions, removedValue)
         );
      }
      if (selectedCategories.includes(removedValue)) {
         setSelectedCategories(
            removeElementFromArray(selectedCategories, removedValue)
         );
      }
   }

   useEffect(() => {
      let query = createQuery();
      router.push(query);
   }, [selectedOptions, sortBy]);

   useEffect(() => {
      let initialOptions = [];
      if (initialCountries) {
         initialCountries.forEach((country) => {
            initialOptions.push(country);
         });
      }
      if (initialSections) {
         initialSections.forEach((section) => {
            initialOptions.push(section);
         });
      }
      setSelectedOptions(initialOptions);
   }, []);

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
                  onChange={(value) => {
                     setSelectedRegions([...selectedRegions, value]);
                     setSelectedOptions([...selectedOptions, value]);
                  }}
               />
               <Select
                  placeholder="All Category"
                  data={categories}
                  className="mantine-select-dropdown"
                  rightSection={<DropdownArrowIcon />}
                  styles={dropdownStyles}
                  value={categories[0]}
                  onChange={(value) => {
                     setSelectedCategories([...selectedCategories, value]);
                     setSelectedOptions([...selectedOptions, value]);
                  }}
               />
            </div>
            <Select
               placeholder="Sort By: Latest"
               data={sortByOptions}
               className="mantine-select-dropdown"
               rightSection={<DropdownArrowIcon />}
               styles={dropdownStyles}
               value={sortBy}
               onChange={(value) => setSortBy(value)}
            />
         </div>
         <div>
            <MultiSelect
               data={selectedOptions}
               value={selectedOptions}
               className="mt-[5px] ring-0 mantine-multiselect"
               onChange={(value) => handleRemoveOption(value)}
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
