import React from "react";

const MobileUserSideNav = ({ onClose }) => {

    const menuItems = [
        {
          id: 1,
          label: "MyProfile",
          icon: "/user_profile_icon.svg",
          link: "/profile",
        },
        {
          id: 2,
          label: "My Services",
          icon: "/services_icon.svg",
          link: "/services",
        },
        { id: 3, label: "Logout", icon: "/logout_icon.svg", link: "/logout" },
        { id: 4, label: "About Us", icon: "/about_icon.svg", link: "/about" },
      ];
    return (
      <div
        onClick={onClose} // Close the mobile side nav when clicking anywhere on the overlay
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
          background: "white", // semi-transparent black background
          zIndex: 0,
        }}
        className="bg-[#cfcdcd] h-full z-50 overflow-hidden "
      >
        {/* Your mobile side navigation content goes here */}
        <div className=" bg-[#f5f5f5] pt-[30px] h-full lg:max-w-[70%] m-auto  mt-[4.5em] ">
          {/* header div */}
          <div className="bg-[#cfcdcd] py-2  flex items-center mx-2 rounded-md shadow-md mb-2 ">
            <img src="mobile_user_icon.png" alt="user_icon" width={80} />
            <div className="flex flex-col justify-center  ">
              <p className="font-bold text-gray-600 px-2 text-2xl ">
                Welcome Abhishek!
              </p>
              <p className="text-gray-800 font-bold px-2 ">8219136329</p>
            </div>
          </div>
  
          <div className="lg:w-[60%] md:w-[60%] w-full m-auto ">
            <ul className="w-full grid grid-cols-2 ">
              {menuItems.map((item) => (
                <li key={item.id} className="col-span-1">
                  <div className="flex flex-col gap-2 py-3 lg:py-8 md:py-8 px-2 font-bold text-xl justify-center items-center m-2 bg-blue-100 shadow-sm border border-gray-500 rounded-md hover:bg-slate-300 transition-all duration-200">
                    <img src={item.icon} alt={`${item.label}_icon`} width={50} />
                    {item.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
  
          <div className="px-3 mt-3 flex flex-col text-center">
            <p className="font-extrabold text-3xl text-gray-400 flex items-center gap-2 justify-center mt-4">
              {" "}
              <img src="bharatPros_logo.png" alt="bharatPros" width={30} />
              BharatPros
            </p>
            <p className="mt-5">Terms and Conditions </p>
            <p className="flex items-center justify-center gap-2 mt-1">
              Customer Care
              <img src="customer_care.svg" alt="customer_care" />
            </p>
          </div>
  
          <div className="w-full flex gap-5 justify-center items-center mt-4">
            <img src="WhatsApp_logo.png" alt="Whatsapp_logo" width={40} />
            <img src="Instagram_logo.png" alt="Instagram_logo" width={42} />
            <img src="Facebook_logo.png" alt="Facebook_logo" width={40} />
          </div>
  
          
  
  
  
        </div>
      </div>
    );
  };

  export default MobileUserSideNav;