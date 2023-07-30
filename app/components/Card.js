"use client";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import SwiperSlider from "./SwiperSlider";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rate from "./Rate";
export default function Card({
  name,
  img,
  location,
  type,
  room,
  person,
  rate,
  price,
}) {
  return (
    <Grid item xs={3}>
      <Paper elevation={3} sx={{ overflow: "hidden" }}>
        <SwiperSlider img={img} name={name} />
        <Box sx={{ padding: "10px" }}>
          <Typography sx={{ marginBottom: "10px" }}>{name}</Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <RoomOutlinedIcon fontSize="medium" sx={{ color: "#969696" }} />
            <Typography sx={{ fontSize: "12px" }}>{location}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <MapsHomeWorkOutlinedIcon
              fontSize="small"
              sx={{ color: "#969696" }}
            />
            <Typography
              sx={{ fontSize: "12px" }}
            >{`${type}، ${room} خواب تا ${person} نفر`}</Typography>
            <Rate rate={rate} />
          </Box>
          <Divider sx={{ marginTop: "30px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Typography color="black" sx={{ fontWeight: "bold" }}>
              هر شب از
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography color="black" sx={{ fontWeight: "bold" }}>
                {price}
              </Typography>
              <Typography color="#969696">تومان</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
