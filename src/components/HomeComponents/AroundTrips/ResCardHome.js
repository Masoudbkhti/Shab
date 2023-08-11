"use client";
import { Box, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
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
      <Paper
        elevation={1}
        sx={{
          paddingBottom: "4px",
          overflow: "hidden",
          marginLeft: "24px",
        }}
      >
        <img src={img} alt={name} height="240px"/>
        <Box sx={{ padding: "10px" }}>
          <Typography
            sx={{ marginBottom: "10px", textAlign: "right" }}
            variant="subtitle1"
            component="h6"
          >
            {name}
          </Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <RoomOutlinedIcon fontSize="medium" sx={{ color: "#969696" }} />
            <Typography variant="body1" component="p">
              {location}
            </Typography>
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
                variant="body1"
                component="p"
              >{`${type}، ${room} خواب تا ${person} نفر`}</Typography>
            </Box>
            <Box>
              <Rate rate={rate} />
            </Box>
          </Box>
          <Box>{fastreserve && <ReservationChip />}</Box>
          <Divider sx={{ marginTop: "24px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Typography
              color="black"
              variant="body1"
              component="p"
              sx={{ fontWeight: "bold" }}
            >
              هر شب از
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography color="black" variant="subtitle1" component="h6">
                {price}
              </Typography>
              <Typography color="#969696" variant="body1" component="p">
                تومان
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Link>
  );
}
