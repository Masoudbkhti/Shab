"use client";
import { Box, Typography } from "@mui/material";
import ReservationGuide from "@/src/components/TripsComponents/ReservationGuide";
import TripItem from "@/src/components/TripsComponents/TripItem";
import { useSelector } from "react-redux";
import toPersianDigits from "@/src/utils/toPersianDigits";
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
      {trip.map((item) => (
        <TripItem
          count={item.count}
          enterDate={item.enterDate}
          exitDate={item.exitDate}
          totalPrice={toPersianDigits(item.sumResult)}
        />
      ))}
    </Box>
  );
}