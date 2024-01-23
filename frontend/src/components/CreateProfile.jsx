import React from "react";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  return (
    <>
      <div className="mx-2 flex flex-col gap-3 justify-center items-center mb-4">
        <p>You have not yet setup a profile, please add some info..</p>
        <Link to="/create-profile" className="bg-black/10 w-[70%] px-2 py-2 rounded-lg active:scale-105 duration-300 transitions-all  text-center font-bold border border-gray-300
        ">
          Create Profile
        </Link>
      </div>
    </>
  );
};

export default CreateProfile;
