import React, { useCallback } from "react";
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

// Dropzone configuration
const dropzoneOptions = {
  url: "/", // Use a local endpoint or leave it blank
  paramName: "file",
  maxFilesize: 5, // MB
  acceptedFiles: "image/*", // Specify accepted file types
  dictDefaultMessage: "Drop files here or click to upload",
  autoProcessQueue: false, // Disable automatic upload
};

// Dropzone component
const DropzoneComponent = () => {
  const dropzoneRef = useCallback((node) => {
    if (node) {
      const dropzone = new Dropzone(node, dropzoneOptions);

      dropzone.on("addedfile", (file) => {
        // Handle when a file is added to the dropzone
        // You can customize this logic to store the file locally

        // Example: Store the file in the local storage
        const reader = new FileReader();
        reader.onload = (event) => {
          const fileContent = event.target.result;
          localStorage.setItem(file.name, fileContent);
          console.log("File stored locally:", file.name);
        };
        reader.readAsDataURL(file);

        // Add a button to cancel or remove the file after adding
        const cancelButton = Dropzone.createElement(
          '<button class="dz-cancel-btn bg-black text-white p-1 px-2  rounded-full text-sm mt-2 ml-6 ">Cancel</button>'
        );
        file.previewElement.appendChild(cancelButton);

        cancelButton.addEventListener("click", () => {
          dropzone.removeFile(file);
          console.log("File canceled:", file);
          // Handle canceled file, e.g., update state or trigger another action

          // Remove the file from the local server or storage
          // Add your logic here to remove it from the local server or storage
        });
      });

      dropzone.on("success", (file) => {
        // Handle successful upload
        console.log("File uploaded successfully:", file);

        // Remove the file from the local storage (if needed)
        localStorage.removeItem(file.name);
      });

      dropzone.on("error", (file, errorMessage) => {
        // Handle upload error
        console.error("Error uploading file:", errorMessage);
      });

      // Manually trigger the upload process when needed
      document.getElementById("uploadButton").addEventListener("click", () => {
        dropzone.processQueue();
      });
    }
  }, []);

  return (
    <div className="-w-full relative mx-2">
      <div ref={dropzoneRef} className="dropzone"></div>
      <button
        id="uploadButton"
        className="bg-black text-white mt-2 p-2 px-6  rounded-full  absolute right-2 active:scale-95 transition-all duration-200 "
      >
        Upload
      </button>
    </div>
  );
};

export default DropzoneComponent;
