import React from "react";
import userProfileData from "./userProfile.json"; // Rename the variable to avoid conflicts
import { LuCircleDot } from "react-icons/lu";

const UserProfile = () => {
  // Access data from the JSON file
  const { username, level, bio, skills, experience, education } =
    userProfileData.userProfile;
  console.log(userProfileData.userProfile, level, bio);
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex gap-2 flex-col">
        <div className=" border mx-2 rounded-md border-[#d1cece]">
          <div className="border-b  border-[#d1cece] flex justify-between px-1 items-center bg-[#f5f5f5]">
            <p className="text-sm text-gray-600">@ {username}</p>
            <p className="text-[0.8em] text-gray-500 bg-green-300 p-1 m-1 rounded-full px-4 shadow-md shadow-green-100">
              {level}
            </p>
          </div>
          <div className=" mx-2 py-1  ">
            <p className="text-md font-semibold py-1">{username}</p>
            <p className="text-sm text-gray-600">{bio}</p>
          </div>
        </div>

        <div className="border mx-2 rounded-md border-[#d1cece] ">
          <div className=" py-1 font-semibold border-b  border-[#d1cece] flex justify-between px-1 items-center bg-[#f5f5f5]">
            Skills
          </div>
          <p className="text-sm p-1">{skills.join(", ")}</p>
        </div>

        <div className="border mx-2 rounded-md border-[#d1cece] ">
          <div className="py-1 font-semibold border-b  border-[#d1cece] flex justify-between px-1 items-center bg-[#f5f5f5]">
            <p>Experience</p>
          </div>
          <ul className="mx-2 py-2 ">
            {experience.map((exp, index) => (
              <div className="flex item-start gap-2  ">
                <span className="mt-1  text-gray-500 text-sm">
                  <LuCircleDot />
                </span>
                <li key={index} className="text-[0.8em] py-[1px]">
                  {exp.position} at {exp.company}{" "}
                  <span className="text-gray-600">({exp.duration})</span>
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="border mx-2 rounded-md border-[#d1cece] ">
          <div className="py-1 font-semibold border-b  border-[#d1cece] flex justify-between px-1 items-center bg-[#f5f5f5]">
            <p className="">Education</p>
          </div>
          <ul className="mx-2 py-2 ">
            {education.map((edu, index) => (
              <div className="flex item-start gap-2  ">
                <span className="mt-[0.2em] text-gray-500 text-sm">
                  <LuCircleDot />
                </span>
                <li key={index} className="text-[0.8em] py-[1px]">
                  <span className="text-gray-600">{edu.institution} ({edu.duration})</span> - {edu.course} in{" "}
                  {edu.fieldOfStudy}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
