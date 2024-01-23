import React from 'react';

const formatDate = (date) => {
  // Implement your date formatting logic here
  return date;
};

const ProfileEducation = () => {
  const school = "Sample University";
  const from = "2022-01-01"; // Replace with actual date
  const to = null; // Replace with actual date if applicable
  const degree = "Bachelor's Degree";
  const fieldofstudy = "Computer Science";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <div className="flex item-start gap-2 border-b border-black/10 mx-2 ">
      <li className="text-[0.8em] py-[10px] list-none ">
       <div className='flex gap-3'>
       <h3 className="text-dark">{school}</h3>
        <p className='font-bold'>
       ( {formatDate(from)} - {to ? formatDate(to) : 'Now'} )
        </p>
       </div>
        <p>
          {degree ? <div> <strong>Degree: </strong> {degree} </div> : null}
        </p>
        <p>
          {fieldofstudy ? <div> <strong>Field of study: </strong> {fieldofstudy} </div> : null}
        </p>
        <p>
          {description ? <div> <strong>Description: </strong> {description} </div> : null}
        </p>
        {/* <span className="text-gray-600">({formatDate(from)} - {to ? formatDate(to) : 'Now'})</span> */}
      </li>
    </div>
  );
};

export default ProfileEducation;
