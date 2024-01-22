import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

// Import the common styling from AddExperiencePage
// import './AddExperiencePage.css';

const AddEducationPage = () => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { school, degree, fieldofstudy, from, to, current, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <h1 className="text-center py-3 text-xl font-bold text-gray-900 bg-black/20">
        Add Your Education
      </h1>
      <p className="text-xs text-gray-600 mx-2">
        <i className="fas fa-code-branch" /> Add any school or bootcamp that you
        have attended
      </p>
      <small className="mx-2">* = required field</small>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          // Assuming addEducation is a function that adds education details
          // Pass appropriate arguments, such as formData and history
          // addEducation(formData, history);
        }}
      >
        <div className="mx-2  px-2  py-1 flex gap-2 border-2 border-black/10 mt-2">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
            className="outline-none"
          />
        </div>
        <div className="mx-2  px-2  py-1 flex gap-2 border-2 border-black/10 mt-2">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
            className="outline-none"
          />
        </div>
        <div className="mx-2  px-2  py-1 flex gap-2 border-2 border-black/10 mt-2">
          <input
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
            className="outline-none"
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
              className="  px-2  py-1 flex gap-2 border-2 border-black/10 "
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
          />{' '}
          Current School
        </p>
        <div className="flex flex-col gap-2 mx-2 ">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
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

export default AddEducationPage;
