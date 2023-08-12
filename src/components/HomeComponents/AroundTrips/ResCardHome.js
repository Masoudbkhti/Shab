"use client";
import { Box, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rate from "@/src/components/GlobalComponents/ReusableComponents/Rate";
import ReservationChip from "@/src/components/GlobalComponents/ReusableComponents/ReservationChip";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { changeIconState } from "@/src/redux/features/SaveCardSlice";
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
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.SaveCard.carts);
  const cartItem = carts.find((item) => item.id === id);
  const isBookmark = cartItem ? cartItem.isBookmark : false;
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };
  const truncateTextStyle = {
    position: "absolute",
    left: "5px",
    top: "5px",
    zIndex: "2",
    cursor: "pointer",
    borderRadius: "5px",
    color: "white",
    bgcolor: "rgba(107, 98, 95, 0.7)",
    width: "28px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s",
    "&:hover": { backgroundColor: "#9E9E9E" },
  };


  const changeSaveIconHandler = useCallback(() => {
    dispatch(changeIconState(id));
  }, []);

  return (
      <Paper
        elevation={0}
        sx={{
          width: "350px",
          paddingBottom: "4px",
          overflow: "hidden",
          marginLeft: "12px",
          marginBottom: "5px",
          position: "relative",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
             {!isBookmark ? (
            <TurnedInNotIcon
              key={id}
              sx={truncateTextStyle}
              onClick={changeSaveIconHandler}
            />
          ) : (
            <BookmarkIcon
              key={id}
              sx={truncateTextStyle}
              onClick={changeSaveIconHandler}
            />
          )}
    <Link href={`/houses/${id}`} sx={{width:"100%"}}>
        <img src={img} alt={name} height="240px"/>
        <Box sx={{ padding: "10px", height: "170px", display:"flex", justifyContent:"space-between",flexDirection:"column" }}>
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
          <Divider sx={{ marginTop: "10px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "5px",
              height: "28px",
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
        </Link>
      </Paper>
    
  );
}
