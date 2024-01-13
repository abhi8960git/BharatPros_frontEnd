import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Grid, Typography } from "@mui/material";
import TextArea from "antd/es/input/TextArea";
import { FiPlusCircle } from "react-icons/fi";
import { RiHome5Line } from "react-icons/ri";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdPayment } from "react-icons/md";

export function Register() {
  // State variables for form fields
  const [sectors, setSectors] = useState([]);

  const [selectedSector, setSelectedSector] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  // ...other state variables

  // ...fetch data for sectors and services

  return (
    <Box className="p-4">
      <div className="bg-[#f5f5f5] flex justify-center p-5 mb-3 rounded-md font-bold text-xl text-gray-600">
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
            className="mt-2 bg-[#f5f5f5]  flex items-center gap-2 justify-center p-5 mb-3 rounded-md font-bold text-xl text-gray-600"
          >
            Your Address Details
            <span className="text-2xl">
              <RiHome5Line />
            </span>{" "}
          </p>
          {/* ...address fields */}
          <div class="bg-[#f5f5f581] border border-gray-200 rounded-md flex flex-col justify-center items-center  gap-0 py-4">
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

            <div class="flex gap-1">
              <span class="word-span font-normal text-center block mb-2">
                Post
              </span>
              <span class="word-span font-normal text-center block mb-2">
                Office:
              </span>
              <span class="word-span font-normal text-center block mb-2">
                Bhanala
              </span>
            </div>

            <div class="flex gap-1">
              <span class="word-span font-normal text-center block mb-2">
                Shahpur
              </span>
              <span class="word-span font-normal text-center block mb-2">
                Kangra,
              </span>
              <span class="word-span font-normal text-center block mb-2">
                Himachal
              </span>
              <span class="word-span font-normal text-center block mb-2">
                Pradesh
              </span>
            </div>

            <div class="flex  gap-1">
              <span class="word-span font-normal text-center block mb-2">
                Pincode:
              </span>
              <span class="word-span font-normal text-center block mb-2">
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
            className="mb-2 mt-5 bg-[#f5f5f5] flex items-center gap-2 justify-center p-5 mb-3 rounded-md font-bold text-xl text-gray-600"
          >
           Invoice Details
            <span className="text-2xl">
              <LiaFileInvoiceDollarSolid />
            </span>{" "}
          </p>  </div>

        <div className="referral-code-input">
          <div
            className="referral-code-button mx-2"
            onClick={() => {
              /* Handle referral code input */
            }}
          >
            Having a referral? <button className="text-gray-500 hover:to-blue-500">Click here </button> to enter your referral code.
          </div>
          {/* Add referral code input field here (if applicable) */}
        </div>

        <div className="payment-options">
        <p
            variant="h6"
            className=" my-2 mt-4 bg-[#f5f5f5] flex items-center gap-2 justify-center p-5 mb-3 rounded-md font-bold text-xl text-gray-600"
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
            Pay Via UPI <img src="upi_icon.webp" alt="upi_icon" width={35}/>
          </button>
        </div>
      </div>
    </Box>
  );
}
