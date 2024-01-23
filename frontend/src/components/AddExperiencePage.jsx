import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const AddExperiencePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { title, company, location, from, to, current, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <h1 className="text-center py-3 text-xl font-bold text-gray-900 bg-black/20">
        Add An Experience
      </h1>
      <p className="text-xs text-gray-600 mx-2">
        <i className="fas fa-code-branch" /> Add any developer/programming
        positions that you have had in the past
      </p>
      <small className="mx-2">* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          // Assuming addExperience is a function that adds the experience
          // Pass appropriate arguments, such as formData and history
          // addExperience(formData, history);
        }}
      >
        <div className="flex flex-col mx-2  py-1 gap-2 mt-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Add Your Job title
          </label>
          <input
            type="text"
            id="title"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
            className="outline-none border-2 border-black/10 w-full px-2 py-1"
          />
        </div>

        <div className="flex flex-col mx-2  py-1 gap-2 mt-2">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-600"
          >
            Add Your Company
          </label>
          <input
            type="text"
            id="company"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
            required
            className="outline-none border-2 border-black/10 py-1 px-2"
          />
        </div>

        <div className="flex flex-col mx-2  py-1 gap-2 mt-2">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-600"
          >
            Add Your Location
          </label>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
            className="outline-none border-2 border-black/10 py-1 px-2"
          />
        </div>

        <div className="flex  w-full justify-center gap-2 mt-3">
          <div className="">
            <h4>* From Date</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={onChange}
              className="  px-2  py-1 flex gap-2 border-2 border-black/10  "
            />
          </div>

          <div className="">
            <h4>To Date</h4>
            <input
              type="date"
              name="to"
              value={to}
              onChange={onChange}
              disabled={current}
              className="  px-2  py-1 flex gap-2 border-2 border-black/10 "
            />
          </div>
        </div>

        <p className="text-gray-600 ">
          <input
            type="checkbox"
            name="current"
            checked={current}
            value={current}
            onChange={() => {
              setFormData({ ...formData, current: !current });
            }}
            className="mx-3 mt-4 text-gray-600"
          />{" "}
          Current Job
        </p>
        <div className="flex flex-col gap-2 mx-2 ">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={onChange}
            className="bg-black/5 p-2"
          />
        </div>
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

export default AddExperiencePage;
