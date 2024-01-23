import React from "react";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  return (
    <>
      <div className="mx-2 flex flex-col gap-3 justify-center items-center mb-4">
        <p>You have not yet setup a profile, please add some info..</p>
        <Link to="/create-profile" className=" btn-grad w-[70%] px-1 py-1 rounded-lg active:scale-105 duration-300 transitions-all  text-center font-bold  text-xl
        ">
          Create Profile
        </Link>
      </div>
    </>
  );
};

export default CreateProfile;
