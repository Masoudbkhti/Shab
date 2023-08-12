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
import truncateText from "@/src/utils/truncateText";
import Loading from "@/src/utils/loading";
import { useState, setTimeout, useEffect } from "react";
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
  const [loadData, setLoadData] = useState(false);
  const dispatch = useDispatch();
  const carts = useSelector((store) => store.SaveCard.carts);
  const cartItem = carts.find((item) => item.id === id);
  const isBookmark = cartItem ? cartItem.isBookmark : false;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoadData(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  const changeSaveIconHandler = useCallback(() => {
    dispatch(changeIconState(id));
  }, []);

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
    "&:hover": { backgroundColor: "rgba(107, 98, 95, 0.2)" },
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link href={`/houses/${id}`}>
        <Paper elevation={1} sx={{ overflow: "hidden", position: "relative" }}>
          {loadData ? (
            <SwiperSlider img={img} name={name} />
          ) : (
            <Loading variant={"rectangular"} width={"100%"} height={"300px"} />
          )}
          {!isBookmark ? (
            <Box sx={truncateTextStyle}>
              <TurnedInNotIcon key={id} onClick={changeSaveIconHandler} />
            </Box>
          ) : (
            <Box sx={truncateTextStyle}>
              <BookmarkIcon key={id} onClick={changeSaveIconHandler} />
            </Box>
          )}
          <Box
            sx={{
              padding: "10px",
              height: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {loadData ? (
              <Typography sx={{ marginBottom: "10px", fontWeight: "bold" }}>
                {truncateText(name, 40)}
              </Typography>
            ) : (
              <Loading variant={"text"} width={"250px"} height={"20px"} />
            )}
            <Box sx={{ display: "flex", gap: "5px" }}>
              <RoomOutlinedIcon fontSize="medium" sx={{ color: "#969696" }} />
              {loadData ? (
                <Typography variant="body1" component="p" color="secondary">
                  {location}
                </Typography>
              ) : (
                <Loading variant={"text"} width={"170px"} height={"20px"} />
              )}
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
                {loadData ? (
                  <Typography
                    variant="body1"
                    component="p"
                    color="secondary"
                  >{`${type}، ${room} خواب تا ${person} نفر`}</Typography>
                ) : (
                  <Loading variant={"text"} width={"180px"} height={"20px"} />
                )}
              </Box>
              <Box>
                {loadData ? (
                  <Rate rate={rate} />
                ) : (
                  <Loading
                    variant={"rectangular"}
                    width={"56px"}
                    height={"30px"}
                  />
                )}
              </Box>
            </Box>
            {loadData ? (
              <Box sx={{ display: "flex", gap: "10px", marginY: "10px" }}>
                {fastreserve && <ReservationChip />}
                {hospitable && <HospitableChip />}
              </Box>
            ) : (
              <Loading variant={"rectangular"} width={"56px"} height={"30px"} />
            )}

            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
                height: "32px",
              }}
            >
              <Typography color="black" sx={{ fontWeight: "bold" }}>
                هر شب از
              </Typography>
              {loadData ? (
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
              ) : (
                <Loading variant={"text"} width={"70px"} height={"20px"} />
              )}
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
}
