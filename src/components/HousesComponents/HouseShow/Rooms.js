import { Box, Typography } from "@mui/material";
import React from "react";
import RoomSlider from "/src/components/HousesComponents/HouseShow/RoomSlider";

const Rooms = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          component="h6"
          fontWeight="bold"
          color="secondary"
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
