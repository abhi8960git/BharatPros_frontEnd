import React from "react";
import Search from "./Search";
import { IoBag } from "react-icons/io5";
import JobItem from "./JobItem";
import JobItemInfo from './JobsInfo.json';
import { AvatarGenerator } from 'random-avatar-generator';
import JobsInfo from './JobsInfo.json';
 
const jobs = () => {

  const generator = new AvatarGenerator();
  const timestampSeed = Date.now();
  generator.generateRandomAvatar();
  const randomAvatar1 = generator.generateRandomAvatar(timestampSeed);

  console.log(randomAvatar1);
  
  console.log(JobsInfo);

  return (
    <div className=" w-full flex flex-col ">
      <div className="w-full flex justify-center ">
        <Search inputCategory="Search Jobs" />
      </div>
      <div className="mt-3">
        {[0,1,2].map((e) => (
          <JobItem   />
        ))}
      </div>

      
    </div>

  );
};

export default jobs;
