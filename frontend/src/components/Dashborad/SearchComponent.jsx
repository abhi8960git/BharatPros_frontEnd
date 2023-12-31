import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchComponent = (props) => {
    const {placeholderText} = props;
    return (
      <div className="flex items-center border border-gray-300 p-1 rounded-[10px] w-[95%] bg-white hover:border-gray-300 transition-all duration-200">
        <CiSearch className="bg-white ml-1 text-2xl" />
        <input
          type="text"
          placeholder={placeholderText}
          className="px-2 py-1 rounded focus:outline-none bg-white"
          // onChange={onChange}
        />
      </div>
    );
  };

  export default SearchComponent;