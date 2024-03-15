import React, { useState, useEffect,useRef } from "react";
import { MdLogin } from "react-icons/md";
import { Modal } from "antd";
import { MuiTelInput } from "mui-tel-input";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { GrPowerShutdown } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
const Navitems = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [showLogout, setShowLogout] = useState(false);
  const logoutRef = useRef(null);

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const handleSelectChange = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    setShowLogout(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (logoutRef.current && !logoutRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-white border-b border-b-black/10  flex justify-center lg:px-3 items-center py-3.5 z-40 sticky top-0">
        <div className="flex justify-between items-center md:w-[90%] lg:w-[70%]">
          <div className="flex items-center justify-center gap-1">
            <img src="bharatPros_logo.png" alt="bharat_pros" width={22} />
            <div className="mt-2">
              <p className="text-gradient text-2xl font-semibold">BharatPros</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="hover:text-blue-400">Register as Service Provider</p>
            {
              false ? (
                <button
                  className="flex items-center justify-center gap-1 px-3 py-2 rounded-[5px] shadow-sm border border-black/15  text-black transition-all duration-200 font-bold"
                  onClick={showModal}
                >
                  Login
                  <MdLogin />
                </button>
              ) : (
                <div>
                  <button
                    className=" relative flex items-center justify-center gap-1 px-3 py-2 rounded-[5px] shadow-sm border border-black/15  text-black transition-all duration-200 font-bold"
                    onClick={handleSelectChange}
                  >
                    <p className="flex items-center">Abhishek 
                    {
                      !showLogout ? <span className="text-xl"><MdKeyboardArrowDown/></span> : <span className="text-xl"z><MdKeyboardArrowUp/></span> 
                    }
                    </p>
                    {/* <MdLogin /> */}
                  </button>

                  {showLogout && (
                    <div ref={logoutRef} className="absolute border border-black/10  mt-1 rounded-md bg-white w-[200px] h-[100px] right-3">
                      <p className="text-xl p-3 font-bold" >Abhishek </p>
                      <hr />
                     <div className="flex   items-center p-3 gap-1  text-lg " onClick={handleLogout}>
                     <button  className="">Logout</button>
                      <GrPowerShutdown/>
                      </div>
                    </div>
                  )}
                </div>


              )
            }
          </div>
        </div>
      </div>

      <Modal
        title="Login / SignUp"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-10 gap-2">
            <div className="col-span-7">
              <MuiTelInput
                className="phone-input"
                size="small"
                defaultCountry="IN"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <button className="col-span-3 border border-black px-[1.2em] rounded-md flex items-center justify-center gap-1 text-black hover:text-white hover:bg-black transition-all duration-200">
              LogIn
              <MdLogin />
            </button>
          </div>
          <div className="grid grid-cols-10 gap-2">
            <input
              type="number"
              id="numberInput"
              name="numberInput"
              placeholder="Enter OTP .."
              className="col-span-7 outline-blue-600 text-[15px] border border-zinc-300 rounded-[4px] px-[9px] text-md py-[7px]"
            />
            <button className="col-span-3 border border-black px-[1em] rounded-md flex items-center justify-center gap-1 text-black hover:text-white hover:bg-black transition-all duration-200 py-[7px]">
              Verify
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navitems;
