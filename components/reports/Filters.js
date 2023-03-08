import { Select } from "@mantine/core";
import { dropdownStyles } from "@/constants";
import DropdownArrowIcon from "../common/DropdownArrow";

export default function ReportFilters() {
   return (
      <div className="flex mb-[50px]">
         <Select
            placeholder="All Countries"
            data={[]}
            label="Countries"
            className="rounded-md mantine-select-dropdown w-[270px] mr-[25px]"
            rightSection={<DropdownArrowIcon />}
            styles={dropdownStyles}
         />
         <Select
            placeholder="All Types"
            data={[]}
            label="Types"
            className="rounded-md mantine-select-dropdown w-[270px]"
            rightSection={<DropdownArrowIcon />}
            styles={dropdownStyles}
         />
      </div>
   );
}
