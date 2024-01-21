import React from "react";
import userProfileData from "./userProfile.json"; // Rename the variable to avoid conflicts
import { LuCircleDot } from "react-icons/lu";
import ServicesCard from "../ServicesCard";

const UserProfile = () => {
  // Access data from the JSON file
  const { username, level, bio, skills, experience, education } =
    userProfileData.userProfile;
  console.log(skills[0]);
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex gap-2 flex-col">
        <div className=" mx-2  border-2 border-black/10">
          <div className=" flex justify-between px-1 items-center bg-black/10  py-1 ">
            <p className="text-md  text-gray-600">@ {username}</p>
            <p className="text-[0.8em] text-gray-500 bg-green-300 p-1 m-1 rounded-full px-4 shadow-sm shadow-green-100">
              {level}
            </p>
          </div>
          <div className=" mx-2 py-1  ">
            <p className="text-md font-semibold py-1 text-xl">{username}</p>
            <p className="text-sm text-gray-600">{bio}</p>
          </div>
        </div>

        <div className="mx-2  border-2 border-black/10 ">
          <div className=" text-xl py-1 font-semibold  flex justify-center px-1 items-center bg-black/10   ">
            Skills
          </div>

          <div className="flex  flex-wrap mx-2 p-2 gap-2">
            {skills.map((e, index) => (
              <p className="text-sm p-1 px-2 rounded-full bg-blue-200">{e}</p>
            ))}
          </div>

        </div>

        <div className=" mx-2  border-2 border-black/10">
          <div className="py-1 font-semibold flex justify-center px-1 items-center bg-black/10 ">
            <p className="text-xl">Experience</p>
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

        <div className=" mx-2  border-2 border-black/10 ">
          <div className="py-1 font-semibold  flex justify-center px-1 items-center bg-black/10 ">
            <p className="text-xl">Education</p>
          </div>
          <ul className="mx-2 py-2 ">
            {education.map((edu, index) => (
              <div className="flex item-start gap-2  ">
                <span className="mt-[0.2em] text-gray-500 text-sm">
                  <LuCircleDot />
                </span>
                <li key={index} className="text-[0.8em] py-[1px]">
                  <span className="text-gray-600">
                    {edu.institution} ({edu.duration})
                  </span>{" "}
                  - {edu.course} in {edu.fieldOfStudy}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    <ServicesCard/>

    </div>
  );
};

export default UserProfile;
