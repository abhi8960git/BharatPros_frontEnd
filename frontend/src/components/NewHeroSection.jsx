import React from "react";

const NewHeroSection = () => {
  return (
    <div className=" flex justify-evenly items-center">
      {/* first section */}
      <div className="flex flex-col gap-2.5">
        <p className="text-3xl font-bold">Get Services in Himachal Pradesh</p>
        <div className="flex flex-col gap-2 border border-black/30 p-4 rounded-lg shadow-md ">
          <p className="text-gray-500 font-bold">
            Services you are looking for ?
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { imgName: "Home3D.png", serviceName: "Homestays" },
              { imgName: "Home3D.png", serviceName: "Homestays" },
              { imgName: "Home3D.png", serviceName: "Homestays" },
              { imgName: "Home3D.png", serviceName: "Homestays" },
              { imgName: "Home3D.png", serviceName: "Homestays" },
              { imgName: "Home3D.png", serviceName: "Homestays" },
            ].map((e, index) => (
              <div
                className="flex flex-col flex-wrap  justify-center  items-center    cursor-pointer "
                key={index}
              >
              <div
                  className="bg-black/5 rounded-lg border border-gray-200 p-2 px-3 m"

               >
              <img
                  src={`${e.imgName}`}
                  alt={`${e.imgName}`}
                  width={90}
                  height={90}
                />
                </div>
                <p className="text-sm">{e.serviceName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* seconed section */}
      <div className="grid grid-cols-2 gap-3 mt-3">
        {[
          { imgName: "RajMistri.jpeg", roundness: "rounded-tl-lg" },
          { imgName: "RajMistri.jpeg", roundness: "rounded-tr-lg" },
          { imgName: "RajMistri.jpeg", roundness: "rounded-bl-lg" },
          { imgName: "RajMistri.jpeg", roundness: "rounded-br-lg" },
        ].map((e, index) => (
          <div key={index}>
            <img
              src={e.imgName}
              alt={e.imgName}
              width={175}
              height={175}
              className={`${e.roundness}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewHeroSection;
