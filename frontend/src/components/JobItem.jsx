import React, { useState } from "react";
import { IoBag } from "react-icons/io5";
import { CiSquareInfo } from "react-icons/ci";
import { Button, Modal } from "antd";
import { FaRegBookmark } from "react-icons/fa";
const JobItem = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 my-2 grid grid-cols-10">
        <div className="text-3xl col-span-1 flex   justify-center  ">
          <div className="grid grid-row-2">
            <div className="row-span-1 mt-1">
              <img src="jobs.png" alt="job" />
              {/* <IoBag/> */}
            </div>
          </div>
        </div>

        <div
          className="col-span-8 gap-0 cursor-pointer ml-2"
          onClick={() => setOpen(true)}
        >
          <p className="text-md font-bold">Full Stack Developer</p>

          <p className="text-sm ">Upleers</p>
          <p className="text-sm text-slate-500">
            <span>Uteep</span>, <span>PowerHouse</span>, <span>Chamba</span>
          </p>
          <p className="text-green-500 text-[12px]  mt-1">Posted 6 hrs ago</p>
          <div className="h-[1.2px] bg-slate-300  my-1 w-[110%]"></div>
        </div>

        <div className="col-span-1 text-xl mt-3">
          {/* <FaRegBookmark /> */}
        </div>
      </div>

      <Modal
        title="Full Stack Developer"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        okText="Apply"
        okButtonProps={{ style: { background: "black" } }}
        // footer={false}
      >
        <p>
          The job description should specify education, previous job experience,
          certifications and technical skills required for the role. You should
          also include soft skills, like communication and problem solving, that
          are required. Do not specify a minimum number of years' experience in
          job descriptions.
        </p>
        <p className="text-md font-bold my-3 text-gray-500 ">
          Posted on <span>17/4/023</span>
        </p>
      </Modal>
    </div>
  );
};

export default JobItem;
