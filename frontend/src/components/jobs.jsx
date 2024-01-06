import React from "react";
import Search from "./Search";
import { IoBag } from "react-icons/io5";
import JobItem from "./JobItem";
import JobItemInfo from './JobsInfo.json';

const jobs = () => {
  return (
    <div className=" w-full flex flex-col ">
      <div className="w-full flex justify-center ">
        <Search inputCategory="Search Jobs" />
      </div>
      <div className="mt-3 bg-[#f5f5f5]">
        {[0,1,2].map((e) => (
          <JobItem />
        ))}
      </div>
    </div>
  );
};

export default jobs;
