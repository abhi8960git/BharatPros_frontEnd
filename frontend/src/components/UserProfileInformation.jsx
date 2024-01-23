import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const UserProfileInformation = () => {
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");

  const [formData, setFormData] = useState({
    status: "",
    // Add other form fields with default values if needed
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    status,
    // Add other form fields here
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <Fragment className="">
      <h1 className="text-center py-3 text-xl font-bold text-gray-900 bg-black/20 ">
        Create Your Profile
      </h1>
      <p className="text-xs text-gray-600 mx-2">
        <i className="fas fa-user" />
        Let's get some information to make your profile standout
      </p>
      <small className="mx-2">* = required field</small>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="flex flex-col gap-2 mx-2">
          <select
            className="p-2"
            name="status"
            value={status}
            onChange={(e) => onChange(e)}
          >
            <option>* Select Professional Status</option>
            <option value="Employer">Employer</option>
            <option value="Professional">Professional</option>
            <option value="Employee">Employee</option>
            <option value="Intern">Intern</option>
            <option value="LookingForJobs">Looking for Jobs</option>
            <option value="Student or Learning">Student</option>
            <option value="Other">Other</option>
          </select>
          <small>Give us an idea of where you are at in your career</small>
        </div>

        {/* Add other form fields here */}

        <div className="flex flex-col gap-2 mx-2 mt-2">
          <textarea
            placeholder="A short bio of yourself.."
            name="bio"
            value={formData.bio || ""}
            onChange={(e) => onChange(e)}
            className="bg-black/5 p-2"
          />
          <small>Tell us a little about yourself</small>
        </div>

        <div className="mt-3 mx-2 bg-black/10 text-center py-2 ">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
          >
            Add Social Network Links
          </button>
          <span className="ml-2 text-sm text-gray-500">Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className=" mx-2  flex flex-col  px-2  py-1  gap-1  mt-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-600"
              >
                Twitter URL
              </label>
              <div className="border-2 border-black/10 flex gap-2 px-2 py-2 ">
                <img src="twitter_logo.png" alt="twitter_logo" width={24} />
                <input
                  type="text"
                  // placeholder="Twitter URL"
                  name="twitter"
                  value={twitter || ""}
                  onChange={(e) => onChange(e)}
                  className="outline-none"
                />
              </div>
            </div>

            <div className="mx-2  flex flex-col  px-2  py-1  gap-1  mt-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-600"
              >
                Facebook URL
              </label>
              <div className="border-2 border-black/10 flex gap-2 px-2 py-2 ">
                <img src="Facebook_logo.png" alt="facebook_logo" width={24} />

                <input
                  type="text"
                  // placeholder="Facebook URL"
                  name="facebook"
                  value={facebook || ""}
                  onChange={(e) => onChange(e)}
                  className="outline-none"
                />
              </div>
            </div>

            <div className="mx-2  flex flex-col  px-2  py-1  gap-1  mt-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-600"
              >
                Youtube URL
              </label>
              <div className="border-2 border-black/10 flex gap-2 px-2 py-2 ">
                <img src="YouTube_logo.png" alt="twitter_logo" width={24} />

                <input
                  type="text"
                  // placeholder="YouTube URL"
                  name="youtube"
                  value={youtube || ""}
                  onChange={(e) => onChange(e)}
                  className="outline-none"
                />
              </div>
            </div>

            <div className="mx-2  flex flex-col  px-2  py-1  gap-1  mt-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-600"
              >
                Linkedin URL
              </label>
              <div className="border-2 border-black/10 flex gap-2 px-2 py-2 ">
                <img src="Linkedin_logo.png" alt="linkedin_logo" width={24} />

                <input
                  type="text"
                  // placeholder="Linkedin URL"
                  name="linkedin"
                  value={linkedin || ""}
                  onChange={(e) => onChange(e)}
                  className="outline-none"
                />
              </div>
            </div>

            <div className="mx-2  flex flex-col  px-2  py-1  gap-1  mt-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-600"
              >
                Instagram URL
              </label>
              <div className="border-2 border-black/10 flex gap-2 px-2 py-2 ">
                <img src="Instagram_logo.png" alt="instagram_logo" width={24} />

                <input
                  type="text"
                  // placeholder="Instagram URL"
                  name="instagram"
                  value={instagram || ""}
                  onChange={(e) => onChange(e)}
                  className="outline-none"
                />
              </div>
            </div>
          </Fragment>
        )}

        <div className="w-full flex justify-center gap-5 mt-3">
          <Link
            className="  p-[0.4em] px-5 rounded-md bg-green-400 active:scale-95 transitions-all duration-200 "
            to="/dashboard"
          >
            Go Back
          </Link>

          <input className=" p-1 px-6 rounded-md bg-blue-400" type="submit" />
        </div>
      </form>
    </Fragment>
  );
};

export default UserProfileInformation;
