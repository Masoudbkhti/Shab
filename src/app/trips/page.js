"use client";
import { Box, Typography } from "@mui/material";
import ReservationGuide from "@/src/components/TripsComponents/ReservationGuide";
import TripItem from "@/src/components/TripsComponents/TripItem";
import { useSelector } from "react-redux";
import Navbar from "@/src/components/GlobalComponents/StickyComponents/Navbar";
export default function page() {
  const { trip } = useSelector((store) => store.Reserve);
  return (
    <>
      <Navbar />
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
            key={item.id}
            count={item.count}
            enterDate={item.enterDate}
            exitDate={item.exitDate}
            totalPrice={item.sumResult}
            host={item.host}
            title={item.title}
            number={item.number}
            location={item.cityname}
            image={item.image}
          />
        ))}
      </Box>
    </>
  );
}
