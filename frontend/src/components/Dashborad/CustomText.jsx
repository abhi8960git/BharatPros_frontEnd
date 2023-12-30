import React from "react";

const CustomText = ({ children , fontSize, height }) => {
  return (
    <div className={`flex gap-1 items-center my-3 ${height}`}>
      <div className="bg-black w-1 h-full ">.</div>
      <p className={`${fontSize} font-[500] `}>{children}</p>
    </div>
  );
};

export default CustomText;
