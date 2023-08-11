import { Box, Typography } from "@mui/material";
import React from "react";
import RoomSlider from "/src/components/HousesComponents/HouseShow/RoomSlider";

const Rooms = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          component="h2"
          fontWeight={"bold"}
          display={"flex"}
        >
          اتاق‌ها
        </Typography>
        <RoomSlider />
      </Box>
    </>
  );
};
export default Rooms;
