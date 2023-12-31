import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Modal } from "antd";
const SearchComponent = () => {
  return (
    <div className="flex items-center border border-gray-300 p-1 rounded-[10px] w-[95%] bg-white hover:border-gray-300 transition-all duration-200">
      <CiSearch className="bg-white ml-1 text-2xl" />
      <input
        type="text"
        placeholder="Search..."
        className="px-2 py-1 rounded focus:outline-none bg-white"
        // onChange={onChange}
      />
    </div>
  );
};

const Navitems = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // handler function for modal ---> start

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // handler function for modal ---> end
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    console.log("toggle open");
  };

  const toggleCloseMobileMenu = () => {
    setMobileMenuOpen(false); // Set to false to close the mobile menu
    console.log("toggle close");
  };

  return (
    <>
      <div className="bg-zinc-100 shadow-sm flex justify-between px-3 items-center py-3 z-40">
        <div>
          <h1 className="text-lg font-bold text-[#111111]">Himachal Pradesh</h1>
          <span className="flex items-center gap-1 ml-[2px] cursor-pointer hover:bg-zinc-400 transition-all duration-200">
            {" "}
            Chamba
            <IoIosArrowDown />
          </span>
        </div>
        <span className="text-3xl cursor-pointer" onClick={toggleMobileMenu}>
          <GiHamburgerMenu />
        </span>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-[60%] bg-white transform traslate-x-full transition-transform duration-300 ease-in-out z-50 ">
          <span
            className="absolute right-5 top-5 text-xl hover:border-2 hover:border-black active transition-all duration-200"
            onClick={toggleCloseMobileMenu}
          >
            <RxCross1 />
          </span>
          <div className="py-4 px-8 mt-[30px]">
            <button
              className=" border-[1px] border-black px-3 py-1 rounded-[9px] shadow-md hover:bg-black hover:text-white transition-all duration-200"
              onClick={showModal}
            >
              Login
            </button>
            {/* Add more menu items as needed */}

            {/* modal */}
            <Modal
              title="Login / SignUp"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer = {null}
            >
              <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <input
                  type="number"
                  id="numberInput"
                  name="numberInput"
                  className="outline-none border border-zinc-400 rounded-md px-2 text-md py-1 "
                  // value={numberValue}
                  // onChange={handleInputChange}
                />
                <button className=" bg-zinc-400 text-[1.2em] px-3 rounded-md hover:bg-transparent text-white hover:text-black hover:border hover:border-gray-400 transition-all duration-200 ">LogIn</button>
              </div>
              <div className="flex gap-4">
                <input
                  type="number"
                  id="numberInput"
                  name="numberInput"
                  className="outline-none border border-zinc-400 rounded-md px-2 text-md py-1 "
                  // value={numberValue}
                  // onChange={handleInputChange}
                />
                <button className=" bg-zinc-400 text-[1.2em] px-3 rounded-md hover:bg-transparent text-white hover:text-black hover:border hover:border-gray-400 transition-all duration-200 ">Verify OTP</button>
              </div>
              </div>
            </Modal>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center mt-3">
        <SearchComponent />
      </div>
    </>
  );
};

export default Navitems;
