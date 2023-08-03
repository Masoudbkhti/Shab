"use client";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import SwiperSlider from "./SwiperSlider";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rate from "./Rate";
import ReservationChip from "./ReservationChip";
import HospitableChip from "./HospitableChip";
import Link from "next/link";
export default function Card({
  name,
  img,
  location,
  type,
  room,
  person,
  rate,
  price,
  oldprice,
  fastreserve,
  hospitable,
  id,
}) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };

  const truncateTextStyle = {
    position:"absolute", 
    left:"5px", 
    top:"5px",
    zIndex:"2", 
    cursor:"pointer", 
    borderRadius:"5px",
    color:"white", 
    bgcolor:"rgba(107, 98, 95, 0.7)", 
    width:"28px", 
    height:"30px", 
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
    transition: "background-color 0.3s",
    "&:hover": { backgroundColor: "#9E9E9E" },
  }
  return (
    <Grid item md={6} lg={3}>
      <Paper elevation={1} sx={{ overflow: "hidden", position:"relative" }}>
        <SwiperSlider img={img} name={name} />
         <TurnedInNotIcon key={id} sx={truncateTextStyle}/>
        <Box sx={{ padding: "10px", height:"190px", display:'flex', flexDirection:"column", justifyContent:'space-between' }}>
          <Link href={`/houses/${id}`}>
            <Typography sx={{ marginBottom: "10px", fontWeight:"bold" }}>{truncateText(name, 40)}</Typography>
          </Link>
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
          <Box sx={{ display: "flex", gap: "10px", marginY: "10px"}}>
               {fastreserve && <ReservationChip />}
              {hospitable && <HospitableChip />}
            </Box>

          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop:"5px"
              
            }}
          >
            <Typography color="black" sx={{ fontWeight: "bold" }}>
              هر شب از
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              {oldprice && (
                <Typography
                  color="#969696"
                  sx={{ textDecoration: "line-through" }}
                >
                  {oldprice}
                </Typography>
              )}
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
