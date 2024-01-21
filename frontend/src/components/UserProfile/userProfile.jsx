import React, { useState } from "react";
import userProfileData from "./userProfile.json"; // Rename the variable to avoid conflicts
import { LuCircleDot } from "react-icons/lu";
import ServicesCard from "../ServicesCard";
import { FaPlus } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";

import { CiAirportSign1, CiCirclePlus } from "react-icons/ci";
import ProfessionalServiceCard from "../ProfessionalServiceCard";

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const [openSkill, setOpenSkill] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [addExperience, SetAddExperience] = useState(false);
  const [addEducation, SetAddEducation] = useState(false);

  // Access data from the JSON file
  const { username, level, bio, skills, experience, education } =
    userProfileData.userProfile;
  console.log(skills[0]);
  const OpenDailogHandler = () => {
    setOpen(!open);
  };
  const SkillsOpenDailogHandler = () => {
    setOpenSkill(!openSkill);
  };
  const ExpericenceOpenDailogHandler = () => {
    setOpenExperience(!openExperience);
  };
  const EducationOpenDailogHandler = () => {
    setOpenEducation(!openEducation);
  };

  const AddExperienceHandler = () => {
    SetAddExperience(!addExperience);
  };
  const AddEducationHandler = () => {
    SetAddEducation(!addEducation);
  };

  return (
    <div className="flex gap-2 flex-col">
      <div className="bg-black/10  h-[150px] -mt-3  rounded-b-full relative">
        <p className="text-md font-semibold py-1 text-3xl absolute left-1/2 transform -translate-x-1/2 top-3 w-full text-center text-black/70">
          {username}
        </p>
        <p className="text-md  text-gray-600 text-center top-12 absolute left-1/2 transform -translate-x-1/2 ">
          @ {username}
        </p>
        <div className="w-[6.5em] absolute -bottom-[5em] left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-2 rounded-full border-black/10">
          <img
            src="/profile.png"
            alt="profile_image"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex gap-2 flex-col mt-6">
        <div className=" mx-2  border-2 border-black/10">
          <div className=" flex justify-between px-1 items-center bg-black/10  py-1 ">
            <div className=" text-xl py-1 font-semibold  flex justify-center px-1 items-center  ">
              Bio
            </div>
            <p className="text-[0.8em] text-gray-500 bg-green-300 p-1 m-1 rounded-full px-4 shadow-sm shadow-green-100">
              {level}
            </p>
          </div>
          <div className=" mx-2 py-1 ">
            <p className="text-[0.8em] text-gray-800  py-2 tracking-normal ">
              {bio}
            </p>
          </div>
        </div>

        <div className="mx-2  border-2 border-black/10 ">
          <div className=" px-2 text-xl py-1 font-semibold  flex  justify-between  items-center bg-black/10   ">
            <p>Skills</p>
            <span>
              <FaPlus
                onClick={OpenDailogHandler}
                className="active:rotate-45 transition-all duration-200"
              />
            </span>
          </div>

          {open && (
            <div className="flex  flex-wrap mx-2 p-2 gap-3 py-42">
              {skills.map((e, index) => (
                <p className="text-sm p-2 px-3  rounded-full bg-blue-100">
                  {e}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className=" mx-2  border-2 border-black/10">
          <div className="py-1 px-2 font-semibold flex  justify-between px-1 items-center bg-black/10 ">
            <p className="text-xl">Experience</p>
            <span className="">
              <FaPlus
                onClick={ExpericenceOpenDailogHandler}
                className="active:rotate-45 transition-all duration-200"
              />
            </span>
          </div>
          {openExperience && (
            <ul className="mx-2 py-2 ">
              {experience.map((exp, index) => (
                <div className="flex item-start gap-2 border-b border-black/10 ">
                  <span className="mt-1  text-gray-500 text-sm">
                    {/* <LuCircleDot /> */}
                  </span>
                  <li key={index} className="text-[0.8em] py-[10px]">
                    {exp.position} at {exp.company}{" "}
                    <span className="text-gray-600">({exp.duration})</span>
                  </li>
                </div>
              ))}

              <div
                className="flex  items-center justify-center item-start  gap-2 py-3 bg-black/10 active:scale-[1.015] transitions-all duration-400 "
                onClick={AddExperienceHandler}
              >
                <li className="text-lg">Add Experience</li>
                {addExperience ? <span className="text-2xl"><CiCircleMinus/></span> : <span className="text-2xl"><CiCirclePlus /></span> }
              </div>

              {addExperience && <div className="overflow-hidden transition-all duration-500 max-h-40">kldj</div>}
            </ul>
          )}
        </div>

        <div className=" mx-2  border-2 border-black/10 ">
          <div className="py-1 font-semibold  flex justify-between px-2  px-1 items-center bg-black/10 ">
            <p className="text-xl">Education</p>
            <span>
              <FaPlus
                onClick={EducationOpenDailogHandler}
                className="active:rotate-45 transition-all duration-200"
              />
            </span>
          </div>
          {openEducation && (
            <ul className="mx-2 py-2 ">
              {education.map((edu, index) => (
                <div className="flex item-start gap-2 border-b border-black/10  ">
                  <span className="mt-[0.2em] text-gray-500 text-sm">
                    {/* <LuCircleDot /> */}
                  </span>
                  <li key={index} className="text-[0.8em] py-[10px]">
                    <span className="text-gray-600">
                      {edu.institution} ({edu.duration})
                    </span>{" "}
                    - {edu.course} in {edu.fieldOfStudy}
                  </li>
                </div>
              ))}
              <div className="flex  items-center justify-center item-start  gap-2 py-3 bg-black/10 active:scale-[1.015] transitions-all duration-400 ">
                <li className="text-lg">Add Education</li>
                <span className="text-2xl">
                  <CiCirclePlus />
                </span>
              </div>
            </ul>
          )}
        </div>
      </div>
      <ServicesCard />
      <ProfessionalServiceCard/>
    </div>
  );
};

export default UserProfile;
