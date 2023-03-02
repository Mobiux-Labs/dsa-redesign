import { MultiSelect, Select } from "@mantine/core";
import { categories, regions } from "@/constants";
import { useState, useEffect } from "react";
import DropdownArrowIcon from "../common/DropdownArrow";
import { useRouter } from "next/router";
import { removeElementFromArray } from "@/utils/helper";
import { dropdownStyles } from "@/constants";

export default function FiltersAndSorts({
   initialCountries,
   initialSections,
   initialSortBy,
   initialSectors,
   initialStorySections,
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
   let sortByOptions = [
      { label: "Sort By: Latest", value: "recent" },
      { label: "Sort By: Relevant", value: "relevant" },
   ];

   function seperateOutSectorsAndStorySections(options) {
      let sectors = [];
      let storySections = [];
      let sections = [];
      options.forEach((option) => {
         let category = categories.find(
            (category) => category.value === option
         );
         if (!category) return;
         if (category.type === "sector") sectors.push(option);
         if (category.type === "section") sections.push(option);
         if (category.type === "story-section") storySections.push(option);
      });
      return { sectors, storySections, sections };
   }

   function createQuery() {
      let queryText = router.query.s;
      let { sectors, storySections, sections } =
         seperateOutSectorsAndStorySections(selectedOptions);
      sectors = sectors.length ? sectors.join(",") : "";
      storySections = storySections.length ? storySections.join(",") : "";
      sections = sections.length ? sections.join(",") : "";
      let regions = selectedRegions.length
         ? selectedRegions.map((region) => region).join(",")
         : "";
      let sort = sortBy === "recent" ? "recent" : sortBy;
      let query = `?s=${queryText}&sections=${sections}&countries=${regions}&sortBy=${sort}`;
      if (sectors) query += `&sectors=${sectors}`;
      if (storySections) query += `&storySections=${storySections}`;
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
      if (initialSectors) {
         initialSectors.forEach((sector) => {
            initialOptions.push(sector);
         });
      }
      if (initialStorySections) {
         initialStorySections.forEach((storySection) => {
            initialOptions.push(storySection);
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
