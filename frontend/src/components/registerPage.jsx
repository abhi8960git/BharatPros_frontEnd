import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Grid } from "@mui/material";
import TextArea from "antd/es/input/TextArea";
import { FiPlusCircle } from "react-icons/fi";
import { RiHome5Line } from "react-icons/ri";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdAddCircleOutline, MdPayment, MdRemoveCircle } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import ImageInput from "./imageInput";
import Invoice from "./Invoice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SearchComponent from "./Dashborad/SearchComponent";

export function Register() {
  // State variables for form fields
  const [sectors, setSectors] = useState([]);
  const [isreferralOpen, setIsReferralOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [address, setAddress] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [floorDetails, setFloorDetails] = useState("");
  const [landmark, setLandmark] = useState("");

  const [reachablePerson, setReachablePerson] = useState("");
  const [reachableNumber, setReachableNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [postoffice, setPostoffice] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const [availablePostOffices, setAvailablePostOffices] = useState([]);

  const [showAdditionalAddressFields, setShowAdditionalAddressFields] =
    useState(false);
  const [buildingDetails, setBuildingDetails] = useState("");

  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const setAddressOpenHandler = () => {
    setIsAddressOpen(!isAddressOpen);
  };

  const setIsReferralOpenHandler = () => {
    setIsReferralOpen(!isreferralOpen);
  };

  const handlePincodeChange = (e) => {
    const enteredPincode = e.target.value;
    setPincode(enteredPincode);
    const postOfficeData = {
      110001: ["Connaught Place", "Janpath", "Barakhamba Road"],
      110002: ["Indraprastha", "Civil Lines", "Model Town"],
      // Add more entries as needed
    };
    setAvailablePostOffices(postOfficeData[enteredPincode] || []);

    // setPincode(enteredPincode);
    // setPostoffice(pincodeData.postoffice);
    // setCity(pincodeData.city);
    // setDistrict(pincodeData.district);
    // setState(pincodeData.state);
  };

  const handleCompleteAddressClick = () => {
    setShowAdditionalAddressFields(!showAdditionalAddressFields);
    // Implement logic for complete address
    const completeAddress = `${reachablePerson}, ${reachableNumber}, ${postoffice}, ${city}, ${district}, ${state}`;
    console.log("Complete Address:", completeAddress);
  };

  const handleSubmit = () => {
    // Implement logic for form submission
    console.log("Form submitted!");
  };

  return (
    <Box className="p-4">
      <div className="bg-[#dcd8d8fe] flex justify-center p-5 mb-3 rounded-md font-bold text-xl text-gray-600">
        <p className="flex gap-2 items-center ">
          Add service with details
          <span className="text-2xl">
            <FiPlusCircle />
          </span>
        </p>
      </div>
      <Grid container spacing={0.7}>
        {/* Sectors Autocomplete */}
        <Grid item xs={12} sm={3}>
          <Autocomplete
            options={sectors}
            onChange={(event, newValue) => setSelectedSector(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="All Sectors" variant="outlined" />
            )}
          />
        </Grid>
        {/* Services Autocomplete */}
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={services}
            onChange={(event, newValue) => setSelectedService(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Service"
                variant="outlined"
              />
            )}
          />
        </Grid>
        {/* Other fields using Tailwind classes for styling */}
        <Grid item xs={12}>
          <TextField
            label="FirmName (If any)"
            variant="outlined"
            className="w-full"
          />
        </Grid>
        <Grid item xs={12}>
          <TextArea
            placeholder="Add Description"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        {/* Address section */}
        <Grid item xs={12} className="mt-4">
          <p
            variant="h6"
            className="mt-2 bg-[#dcd8d8fe]  flex items-center gap-2 justify-center p-5 mb-3 rounded-md font-bold text-xl text-gray-600"
          >
            Your Address Details
            <span className="text-2xl">
              <RiHome5Line />
            </span>{" "}
          </p>
          {/* ...address fields */}
          {/* ... (existing code) */}

          <div class="bg-[#f5f5f5] border border-gray-200 rounded-md flex flex-col justify-center items-center  gap-0 py-4">
            <div class="flex gap-1">
              <span class="word-span font-semibold text-center block mb-2">
                Archit
              </span>
              <span class="word-span font-semibold text-center block mb-2">
                Mahajan
              </span>
              <span class="word-span font-semibold text-center block mb-2">
                +917018268807
              </span>
            </div>

            <div class="flex gap-1 text-[0.8em]">
              <span class="word-span font-normal text-center block ">Post</span>
              <span class="word-span font-normal text-center block ">
                Office:
              </span>
              <span class="word-span font-normal text-center block ">
                Bhanala
              </span>
            </div>

            <div class="flex gap-1 text-[0.8em]">
              <span class="word-span font-normal text-center block ">
                Shahpur
              </span>
              <span class="word-span font-normal text-center block ">
                Kangra,
              </span>
              <span class="word-span font-normal text-center block">
                Himachal
              </span>
              <span class="word-span font-normal text-center block ">
                Pradesh
              </span>
            </div>

            <div class="flex  gap-1 text-[0.8em]">
              <span class="word-span font-normal text-center block ">
                Pincode:
              </span>
              <span class="word-span font-normal text-center block ">
                176206
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="container">
        <div className="invoice-details">
          <p
            variant="h6"
            className="mb-2 mt-5 bg-[#dcd8d8fe] flex items-center gap-2 justify-center p-5 mb-3 rounded-md font-bold text-xl text-gray-600"
          >
            Invoice Details
            <span className="text-2xl">
              <LiaFileInvoiceDollarSolid />
            </span>{" "}
          </p>{" "}
        </div>

        <div className="referral-code-input flex flex-col justify-center items-center">
          <div className="referral-code-button mx-2 text-sm transition-all duration-200 ">
            Having a referral?{" "}
            <button
              onClick={() => {
                /* Handle referral code input */
                setIsReferralOpenHandler();
              }}
              className="text-blue-500 hover:to-blue-500 transition-all duration-200 "
            >
              Click here{" "}
            </button>{" "}
            to enter your referral code.
          </div>

          {isreferralOpen && (
            <input
              type="number"
              placeholder="Referral Code"
              className="w-full flex items-center justify-center py-2 px-3 mx-2 my-1 rounded-md border border-gray-300 "
            />
          )}
          {/* Add referral code input field here (if applicable) */}
        </div>

        <div className="payment-options">
          <p
            variant="h6"
            className=" my-2 mt-4 bg-[#dcd8d8fe] flex items-center gap-2 justify-center p-5 mb-3 rounded-md font-bold text-xl text-gray-600"
          >
            Payment Options
            <span className="text-2xl">
              <MdPayment />
            </span>{" "}
          </p>
          <button
            className="flex items-center gap-2 bg-[#f5f5f581] border-2 border-gray-200 justify-center w-full py-2 rounded-md text-lg font-semibold "
            onClick={() => {
              /* Handle UPI payment logic */
            }}
          >
            Pay Via UPI <img src="upi_icon.webp" alt="upi_icon" width={35} />
          </button>
        </div>
      </div>

      <div className="bg-[#dcd8d8fe] flex justify-center p-5 mb-3 rounded-md font-bold text-xl text-gray-600 mt-4">
        <button
          className="flex gap-2 items-center "
          onClick={() => setAddressOpenHandler()}
        >
          Add address details
          <span className="text-2xl">
            {isAddressOpen ? <IoMdRemoveCircleOutline /> : <FiPlusCircle />}
          </span>
        </button>
      </div>

      {isAddressOpen && (
        <div className="  rounded-md p-1 ">
          <Grid item xs={12} sm={6}>
            <Autocomplete
              options={services}
              onChange={(event, newValue) => setSelectedService(newValue)}
              className="mb-2"
              renderInput={(params) => (
                <TextField {...params} label="Search..." variant="outlined" />
              )}
            />
          </Grid>
          <div className="mb-2">
            <label
              htmlFor="reachablePerson"
              className="block text-sm font-medium text-gray-600"
            >
              Reachable Person
            </label>
            <input
              type="text"
              id="reachablePerson"
              className="mt-1 p-2 w-full border rounded-md"
              value={reachablePerson}
              onChange={(e) => setReachablePerson(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="reachableNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Reachable Number
            </label>
            {/* <input
              type="number"
              id="reachableNumber"
              className="mt-1 p-2 w-full border rounded-md"
              value={reachableNumber}
              onChange={(e) => setReachableNumber(e.target.value)}
            />  */}

            <PhoneInput
              // containerStyle={{ backgroundColor: "lightgray" }}
              buttonStyle={{ border: "1px solid #e4e4e4" }}
              inputStyle={{
                padding: "20px",
                paddingInline: "50px",
                border: "1px solid #e4e4e4",
                width: "100%",
              }}
              country={"us"}
              // value={this.state.phone}
              // onChange={(phone) => this.setState({ phone })}
            />
          </div>

          <div className="flex gap-2">
            {/* Pincode input */}
            <div className="mb-2">
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-600"
              >
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                className="mt-1 p-2 w-full border rounded-md"
                value={pincode}
                onChange={handlePincodeChange}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="postoffice"
                className="block text-sm font-medium text-gray-600"
              >
                Post Office
              </label>
              <select
                id="postoffice"
                className="mt-1 p-2 w-full border rounded-md"
                value={postoffice}
                onChange={(e) => setPostoffice(e.target.value)}
              >
                <option value="" disabled>
                  Select Post Office
                </option>
                {availablePostOffices.map((office) => (
                  <option key={office} value={office}>
                    {office}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="mb-2">
              <label
                htmlFor="city"
                className="   block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className=" bg-[#f5f5f5] mt-1 p-2 w-full border rounded-md"
                value={city}
                readOnly
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-600"
              >
                District
              </label>
              <input
                type="text"
                id="district"
                className=" bg-[#f5f5f5] mt-1 p-2 w-full border rounded-md"
                value={district}
                readOnly
              />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              className=" bg-[#f5f5f5] mt-1 p-2 w-full border rounded-md"
              value={state}
              readOnly
            />
          </div>

          {showAdditionalAddressFields && (
            <div>
              <div>
                {/* Complete Address */}
                <div className="mb-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Complete Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                {/* Building Area Details */}
                <div className="mb-3">
                  <label
                    htmlFor="buildingArea"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Building Area Details
                  </label>
                  <input
                    type="text"
                    id="buildingArea"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={buildingArea}
                    onChange={(e) => setBuildingArea(e.target.value)}
                  />
                </div>

                {/* Floor Details */}
                <div className="mb-3">
                  <label
                    htmlFor="floorDetails"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Floor Details
                  </label>
                  <input
                    type="text"
                    id="floorDetails"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={floorDetails}
                    onChange={(e) => setFloorDetails(e.target.value)}
                  />
                </div>

                {/* Landmark */}
                <div className="mb-3">
                  <label
                    htmlFor="landmark"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Landmark
                  </label>
                  <input
                    type="text"
                    id="landmark"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center">
            <button
              type="button"
              className="bg-black text-white hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all duration-200 py-2 px-4 rounded-md mr-2"
              onClick={handleCompleteAddressClick}
            >
              Complete Address
            </button>

            <button
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded-md"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <ImageInput />
      <div className="flex justify-center items-center w-full">
        <Invoice />
      </div>
    </Box>
  );
}
