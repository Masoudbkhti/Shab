import React from 'react'
import ReservationFeatures from "./ReservationFeatures";
import DetailsTrip from "./DetailsTrip";
import LocationDetails from "./LocationDetails";
import { Box } from '@mui/material';
export default function TripItem() {
  return (
    <Box
      bgcolor="primary.main"
      sx={{
        width: { xs: "100%", sm: "580px" },
        borderRadius: "12px",
        boxShadow: "0px 1px 2px 0px rgba(15, 20, 51, 0.16)",
        padding: "24px 20px 32px 24px",
      }}
    >
      <LocationDetails />
      <DetailsTrip />
      <ReservationFeatures />
    </Box>
  );
}
