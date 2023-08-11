"use client";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import SwiperSlider from "../../SearchComponents/SwiperSlider";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rate from "./Rate";
import ReservationChip from "./ReservationChip";
import HospitableChip from "./HospitableChip";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { changeIconState } from "@/src/redux/features/SaveCardSlice";
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
    <Grid item md={6} lg={3}>
      <Link href={`/houses/${id}`}>
        <Paper elevation={1} sx={{ overflow: "hidden", position: "relative" }}>
          <SwiperSlider img={img} name={name} />
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
          <Box
            sx={{
              padding: "10px",
              height: "190px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="subtitle1"
              component="h6"
              color="secondary"
              sx={{ marginBottom: "10px" }}
            >
              {truncateText(name, 40)}
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <RoomOutlinedIcon fontSize="medium" sx={{ color: "#969696" }} />
              <Typography variant="body1" component="p" color="secondary">
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
                  color="secondary"
                >{`${type}، ${room} خواب تا ${person} نفر`}</Typography>
              </Box>
              <Box>
                <Rate rate={rate} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", marginY: "10px" }}>
              {fastreserve && <ReservationChip />}
              {hospitable && <HospitableChip />}
            </Box>

            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              <Typography
                color="secondary"
                variant="body1"
                component="p"
                sx={{ fontWeight: "bold" }}
              >
                هر شب از
              </Typography>
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                {oldprice && (
                  <Typography
                    variant="h6"
                    component="h6"
                    color="secondary.disabled"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {oldprice}
                  </Typography>
                )}
                <Typography variant="h6" component="h6" color="secondary">
                  {price}
                </Typography>
                <Typography
                  color="secondary.light"
                  variant="body1"
                  component="p"
                >
                  تومان
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
}
