import { Box, Typography } from "@mui/material";
import React from "react";
import SameResSlider from "/src/components/HousesComponents/HouseShow/SameResSlider";

const SameHouses = ({data,resdata}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
        }}
      >
        <Typography variant="h6" component="h2" fontWeight={"bold"} lineHeight={"42px"} marginBottom={"12px"}>
          اقامتگاه های مشابه
        </Typography>
        <SameResSlider data={data} resdata={resdata}/>
      </Box>
    </>
  );
};
export default SameHouses;
