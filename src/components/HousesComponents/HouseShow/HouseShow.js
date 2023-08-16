"use client";
import React from "react";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import Information from "/src/components/HousesComponents/HouseShow/Information";
import HostDetails from "/src/components/HousesComponents/HouseShow/HostDetails";
import HouseDetails from "/src/components/HousesComponents/HouseShow/HouseDetails";
import OldPeople from "/src/components/HousesComponents/HouseShow/OldPeople";
import SameHouses from "/src/components/HousesComponents/HouseShow/SameHouses";
import HouseFeatures from "/src/components/HousesComponents/HouseShow/HouseFeatures";
import Rooms from "/src/components/HousesComponents/HouseShow/Rooms";

const HouseShow = ({ data, resdata }) => (
  <>
    <Box>
      <Box id="information">
        <Information data={data} />
      </Box>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <HostDetails data={data} />
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <HouseDetails data={data} />
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <OldPeople />
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <SameHouses data={data} resdata={resdata} />
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <HouseFeatures />
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <Rooms />
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
    </Box>
  </>
);
export default HouseShow;
