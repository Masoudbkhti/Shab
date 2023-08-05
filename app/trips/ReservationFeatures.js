import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ButtonTrips from "./ButtonTrips";

export default function ReservationFeatures() {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "1px solid #E6E7F2",
        marginTop: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", margin: "16px 0" }}>
        <Typography variant="h4" color="secondary" ml={1}>
          3.525.145
        </Typography>
        <Typography variant="body2" color="secondary">
          تومان
        </Typography>
      </Box>
      <Box
        bgcolor="info.main"
        sx={{
          cursor: "pointer",
          width: "100%",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "18px",
          marginBottom :"12px"
        }}
      >
        <Typography variant="body1" color="primary">
          مشاهده فاکتور
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingTop: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "110px",
        }}
      >
        <Box sx={{ width: "100%", display: "flex" }}>
          <ButtonTrips text="صفحه اگهی" />
          <ButtonTrips color="red" text="لغو درخواست" />
        </Box>
        <Box sx={{ width: "100%", display: "flex" }}>
          <ButtonTrips text="گفتگوی آنلاین" />
          <ButtonTrips color="#CECFDC" text="تماس تلفنی" disable="disableBtn"/>
        </Box>
      </Box>
    </Box>
  );
}
