"use client";
import { Box, Typography } from "@mui/material";
import ReservationGuide from "./ReservationGuide";
import TripItem from "./TripItem";
import { useSelector } from "react-redux";
export default function page() {
  const { trip } = useSelector((store) => store.Reserve);
  console.log(trip);
  return (
    <Box
      bgcolor="info.light"
      sx={{
        width: " 100%",
        padding: { xs: "70px 10px", sm: "70px 0" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: { xs: "60px", md: "80px" },
      }}
    >
      <ReservationGuide />
      <TripItem />
    </Box>
  );
}
