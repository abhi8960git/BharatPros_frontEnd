import React from "react";
import CustomText from "./CustomText";

const CategorySection = ({ categories }) => {
//   if (!categories || !Array.isArray(categories) || categories.length !== 2) {
//     // Handle invalid categories prop
//     return null;
//   }

  return (
    <div className="">
      <CustomText>{categories[0].categoryName}</CustomText>
      <div className="bg-gray-100 rounded-md shadow-md grid grid-cols-3 p-2 gap-y-3">
        {categories[1].names.map((category, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            {/* <img src={`/${category.image}`} alt={category.name} width={60} /> */}
            <img src={`/Electrician.png`} alt={category.name} width={60} />
            <p className="text-[1em]">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
