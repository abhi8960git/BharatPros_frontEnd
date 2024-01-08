import React from "react";

const CustomText = ({ children , fontSize, height }) => {
  return (
    <div className={` ml-1 flex gap-1  my-3 ${height}`}>
      {/* <div className="bg-black w-[3px] h-full ">.</div> */}
      <p className={`${fontSize} font-[600] `}>{children}</p>
    </div>
  );
};

export default CustomText;
