import { Box, Typography} from "@mui/material";
import ReservationGuide from "./ReservationGuide";
import TripItem from "./TripItem";
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
      }}
    >
      <ReservationGuide />
      <TripItem />
    </Box>
  );
}
