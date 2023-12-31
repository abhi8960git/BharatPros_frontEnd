import React from "react";
import CustomText from "./CustomText";

const CategorySection = ({ categories }) => {
  //   if (!categories || !Array.isArray(categories) || categories.length !== 2) {
  //     // Handle invalid categories prop
  //     return null;
  //   }

  return (
    <div className="">
      <CustomText fontSize="text-lg">{categories[0].categoryName}</CustomText>
      <div className=" rounded-md grid grid-cols-3 p-2 gap-y-3">
        {categories[1].names.map(
          (category, index) =>
            (index < 5 || category.name === "See more") && (
              <div
                key={index}
                className="flex flex-col justify-center items-center cursor-pointer"
              >
                <div className={`overflow-hidden rounded-lg border-1 border-zinc-300 ${category.name === "See more" ? "border-none":""} `}>
                  {" "}
                  <img
                    src={`${category.image}`}
                    alt={category.name}
                    width={85}
                  />
                </div>
                {/* <img src={`/Electrician.png`} alt={category.name} width={60} /> */}
                <p className="text-[0.9em] mt-1">{category.name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CategorySection;
