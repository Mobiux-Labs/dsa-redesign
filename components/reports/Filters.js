import { NativeSelect, Select } from "@mantine/core";
import { dropdownStyles } from "@/constants";
import DropdownArrowIcon from "../common/DropdownArrow";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ReportFilters() {
   const countries = [
      { label: "All Countries", value: "all" },
      { label: "India", value: "india" },
      { label: "World", value: "world" },
      { label: "Greater China", value: "china-hk" },
      { label: "Southeast Asia", value: "southeast-asia" },
   ];
   const types = [
      { label: "All Types", value: "all" },
      { label: "Company", value: "company" },
      { label: "Thematic", value: "thematic" },
      { label: "Tracker", value: "tracker" },
      { label: "Others", value: "others" },
   ];
   const router = useRouter();
   const { country, type } = router.query;

   const onCountrySelect = (value) => {
      router.push(`/reports?country=${value}${type ? `&type=${type}` : ""}`);
   };

   const onTypeSelect = (value) => {
      router.push(`/reports?type=${value}${country ? `&country=${country}` : ""}`);
   };

   return (
      <div className="flex mb-[50px]">
         <Select
            placeholder="All Countries"
            data={countries}
            label="Countries"
            className="rounded-md w-[270px] mr-[25px] mantine-select-dropdown"
            rightSection={<DropdownArrowIcon />}
            value={country || "all"}
            onChange={(value) => onCountrySelect(value)}
            styles={dropdownStyles}
         />
         <Select
            placeholder="All Types"
            data={types}
            label="Types"
            className="rounded-md mantine-select-dropdown w-[270px]"
            rightSection={<DropdownArrowIcon />}
            value={type || "all"}
            onChange={(value) => onTypeSelect(value)}
            styles={dropdownStyles}
         />
      </div>
   );
}
