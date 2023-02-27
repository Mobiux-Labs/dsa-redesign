import { Select } from "@mantine/core";
import DropdownArrowIcon from "../common/DropdownArrow";
import { jobs } from "@/constants";

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
   label: {
      fontFamily: "Montserrat",
      color: "#363E48",
      fontWeight: "600",
      marginBottom: "15px",
   },
};

export default function JobsListings() {
   return (
      <div className="w-[800px] mx-auto mt-[100px]">
         <h2 className="text-heading text-4xl leading-[60px] font-bold">
            Opportunities with us
         </h2>
         <div className="flex mt-[40px]">
            <Select
               placeholder="All Locations"
               label="Select location"
               data={[]}
               className="rounded-md mantine-select-dropdown w-[270px] mr-[25px]"
               rightSection={<DropdownArrowIcon />}
               styles={dropdownStyles}
            />
            <Select
               placeholder="All Category"
               label="Select category"
               data={[]}
               className="mantine-select-dropdown w-[270px]"
               rightSection={<DropdownArrowIcon />}
               styles={dropdownStyles}
            />
         </div>
         <div className="mt-[35px]">
            {jobs.map((job, index) => (
               <div
                  className="py-[25px] grid grid-cols-3 border-b-[1px] border-[#D5D5D5] cursor-pointer"
                  key={index}
               >
                  <p className="text-darkblue font-bold text-xl leading-[30px]">
                     {job.title}
                  </p>
                  <p className="text-center text-base text-heading">
                     {job.team}
                  </p>
                  <p className="text-right text-base text-heading">
                     {job.location}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
}
