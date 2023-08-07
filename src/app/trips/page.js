import { Box, Typography} from "@mui/material";
import ReservationGuide from "@/src/components/TripsComponents/ReservationGuide";
import TripItem from "@/src/components/TripsComponents/TripItem";
export default function page() {
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
