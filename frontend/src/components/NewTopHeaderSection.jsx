import React from "react";

const NewTopHeaderSection = () => {
  return (
    <div className="relative flex justify-center items-center">
      <img src="HeaderBackground.png" alt="HeaderBackground" />
      <div className="absolute z-50  top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
        <div className="bg-white flex gap-[2em] p-3 px-[6em] h-[120px] rounded-lg">
          {[0, 1, 2].map((e, index) => (
            <div className="flex flex-col items-center gap-2">
              <div
                className={`bg-gray-400 p-2 px-4 flex h-[110px] flex-col rounded-lg items-center ${
                  index === 1 ? "-mt-[6em]" : "-mt-[4em]"
                } shadow-md`}
              >
                <img src="Home3D.png" alt="home" width={90} />
              </div>
              <p>kdlsk</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewTopHeaderSection;
