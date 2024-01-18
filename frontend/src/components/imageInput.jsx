import React, { useState } from "react";

const ImageInput = () => {
  const [imgSrcList, setImageSrcList] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImgSrcList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        newImgSrcList.push({ id: i, src: reader.result });
        if (newImgSrcList.length === files.length) {
          setImageSrcList(imgSrcList.concat(newImgSrcList));
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const removeImage = (id) => {
    const updatedImgSrcList = imgSrcList.filter((img) => img.id !== id);
    setImageSrcList(updatedImgSrcList);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ margin: "10px 0" }}
        multiple
      />

      {imgSrcList.length > 0 && (
        <div className="flex space-x-4">
          {imgSrcList.map((img) => (
            <div key={img.id} className="relative border border-dashed border-gray-400 m-3 p-3 rounded-lg shadow-sm ">
              <span
                className="absolute top-0 right-0 cursor-pointer p-1 bg-red-500 text-white rounded"
                onClick={() => removeImage(img.id)}
              >
                &#x2715;
              </span>
              <img src={img.src} alt={`preview-${img.id}`} style={{ maxWidth: "100%" }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageInput;
