import React from "react";

const NewHeroSection = () => {
  return (
    <div className="  flex justify-center lg:gap-[9em] items-center mb-5 mt-8">
      {/* first section */}
      <div className="flex flex-col gap-2.5">
        <p className="text-4xl  font-bold mb-5">Get Services of your surrounding <br/> online </p>
        <div className="flex flex-col gap-2 border border-black/10 p-4 rounded-lg ">
          <p className="text-gray-500 text-xl font-bold mb-3">
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
                  className="bg-black/5 rounded-lg p-2 px-3 m"

               >
              <img
                  src={`${e.imgName}`}
                  alt={`${e.imgName}`}
                  width={110}
                  height={110}
                />
                </div>
                <p className="text-sm mt-2">{e.serviceName}</p>
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
          <div key={index} className="w-[280px] h-[280px]">
            <img
              src={e.imgName}
              alt={e.imgName}
            sizes="full"
              className={`${e.roundness}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewHeroSection;
