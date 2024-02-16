import React, { useState } from "react";
import { Link } from "react-router-dom";

const DummyComponent = () => {
  const [status, setStatus] = useState("");
  const [changeStatus, setChangeStatus] = useState("");

  // Dummy data
  const professional = {
    professionals: [
      {
        _id: 1,
        name: "John Doe",
        service: "Service A",
        sector: "Sector X",
        status: "Active",
        address: {
          pincodeData: {
            city: "City A",
            district: "District X",
            stateName: "State Y",
            pincode: "123456",
          },
          cityDistrictTown: "City A",
          landmark: "Landmark A",
          locality: "Locality A",
        },
      },
      {
        _id: 2,
        name: "Jane Smith",
        service: "Service B",
        sector: "Sector Y",
        status: "Expired",
        address: {
          pincodeData: {
            city: "City B",
            district: "District Y",
            stateName: "State Z",
            pincode: "654321",
          },
          cityDistrictTown: "City B",
          landmark: "Landmark B",
          locality: "Locality B",
        },
      },
    ],
  };

  // Dummy function, replace with actual implementation
  const onProfessionalUpdate = (id) => {
    console.log("Professional updated with id:", id);
  };

  return (
    <div className="mx-auto max-w-md text-center">
      {Object.keys(professional.professionals).length === 0 ? (
        <div>No Professionals</div>
      ) : (
        <div className="">
          <div className=" flex justify-between items-center mx-4">
            <Link to="/professionals" className="btn btn-light">
              <i className="fas fa-graduation-cap text-primary" /> Assign
              Professional
            </Link>
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="block my-4 p-1 px-2 rounded-lg bg-black/10"
            >
              <option value={""}>All</option>
              <option key={"applied"} value={"applied"}>
                {" "}
                Applied{" "}
              </option>
              <option key={"active"} value={"active"}>
                {" "}
                Active{" "}
              </option>
              <option key={"expired"} value={"expired"}>
                {" "}
                Expired{" "}
              </option>
            </select>
          </div>
          {professional.professionals.map((proItem, index) => (
            <div key={index} className="bg-black/5  rounded-md p-4 mb-4">
              <div className="flex justify-between mb-2">
                <h2 className="text-lg font-semibold">{proItem.name}</h2>
                <span
                  className={`px-2 py-1 pt-1.5 rounded-full text-xs ${
                    proItem.status === "Active"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {proItem.status}
                </span>
              </div>
              <div className="mb-2 text-start ml-4">
                <p>
                  <span className="font-semibold">Service:</span>{" "}
                  {proItem.service}
                </p>
                <p>
                  <span className="font-semibold">Sector:</span>{" "}
                  {proItem.sector}
                </p>
              </div>
              <div className="mb-2">
                <p>
                  <span className="font-semibold  -ml-7 text-start">Location:</span>{" "}
                  {proItem.address.cityDistrictTown}, {proItem.address.landmark}
                  , {proItem.address.locality}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <select
                    onChange={(e) => setChangeStatus(e.target.value)}
                    className="block my-2 bg-black/10 p-1 px-2  rounded-lg"
                  >
                    <option> Select Status</option>
                    <option key={"applied"} value={"applied"}>
                      {" "}
                      Applied{" "}
                    </option>
                    <option key={"active"} value={"active"}>
                      {" "}
                      Active{" "}
                    </option>
                    <option key={"expired"} value={"expired"}>
                      {" "}
                      Expired{" "}
                    </option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={() => onProfessionalUpdate(proItem._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DummyComponent;
