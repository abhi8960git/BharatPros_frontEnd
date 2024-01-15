import React, { useState } from "react";

const ImageInput = () => {
  const [imgSrc, setImageSrc] = useState("");
  {
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ margin: "10px 0" }}
      />

      {imgSrc && <div className="border border-dashed border-gray-400 m-3 p-3 rounded-lg shadow-sm ">
        <img src={imgSrc} alt="preview" style={{maxWidth:"100%"}}/>
        </div>}
    </div>
  );
};

export default ImageInput;
