"use client";
import { Box, Grid, Paper, Typography } from "@mui/material";
import SwiperSlider from "./SwiperSlider";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Card({ name, img, location }) {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <SwiperSlider img={img} name={name} />
        <Typography>{name}</Typography>
        <Box sx={{ display: "flex" }}>
          <RoomOutlinedIcon fontSize="small" sx={{ color: "#969696" }} />
          <Typography sx={{ fontSize: "14px" }}>{location}</Typography>
        </Box>
        <Box>
          <MapsHomeWorkOutlinedIcon
            fontSize="small"
            sx={{ color: "#969696" }}
          />
          <Typography sx={{ fontSize: "14px" }}></Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
