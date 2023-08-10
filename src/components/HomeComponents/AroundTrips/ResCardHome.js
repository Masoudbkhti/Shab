"use client";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import SwiperSlider from "@/src/components/SearchComponents/SwiperSlider";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rate from "@/src/components/GlobalComponents/ReusableComponents/Rate";
import ReservationChip from "@/src/components/GlobalComponents/ReusableComponents/ReservationChip";
import Link from "next/link";
export default function ResCardHome({
  name,
  img,
  location,
  type,
  room,
  person,
  rate,
  price,
  fastreserve,
  id,
}) {
  return (
    <Link href={`/houses/${id}`}>
      <Paper elevation={1} sx={{paddingBottom :"8px", overflow: "hidden" , height :"480px" , border :"2px solid red"}}>
        <img src={img} alt={name} />
        <Box sx={{ padding: "10px" }}>
          <Typography sx={{ marginBottom: "10px", textAlign: "right" }}>
            {name}
          </Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <RoomOutlinedIcon fontSize="medium" sx={{ color: "#969696" }} />
            <Typography sx={{ fontSize: "12px" }}>{location}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: "5px" }}>
              <MapsHomeWorkOutlinedIcon
                fontSize="small"
                sx={{ color: "#969696" }}
              />
              <Typography
                sx={{ fontSize: "12px" }}
              >{`${type}، ${room} خواب تا ${person} نفر`}</Typography>
            </Box>
            <Box>
              <Rate rate={rate} />
            </Box>
          </Box>
          <Box>{fastreserve && <ReservationChip />}</Box>
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
    </Link>
  );
}
