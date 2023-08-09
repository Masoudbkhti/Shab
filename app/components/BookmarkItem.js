"use client";
import { Box, Grid, Paper, Typography, Rating } from "@mui/material";
import SwiperSlider from "./SwiperSlider";
import FastUse from "@/app/components/FastUse";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import truncateText from "@/utils/truncateText";
import toEnglishDigits from "@/utils/toEnglishDigits";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { changeIconState } from "@/redux/features/SaveCardSlice";

export default function BookmarkItem({
  id,
  img,
  name,
  location,
  rate,
  price,
  oldprice,
  fastreserve,
  hospitable,
  commentNum,
}) {
  const dispatch = useDispatch();
  const rateNum = toEnglishDigits(rate);
  const carts = useSelector((store) => store.SaveCard.carts);
  const cartItem = carts.find((item) => item.id === id);
  const isBookmark = cartItem ? cartItem.isBookmark : true;
  const changeSaveIconHandler = useCallback(() => {
    dispatch(changeIconState(id));
  }, []);
  console.log(carts);
  return (
    <Grid item md={6} lg={3}>
      <Paper elevation={1} sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            width: "30px",
            height: "30px",
            zIndex: "3",
            position: "absolute",
            top: "5px",
            left: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {isBookmark ? (
            <FavoriteIcon
              key={id}
              sx={{ color: "red" }}
              onClick={changeSaveIconHandler}
            />
          ) : (
            <FavoriteBorderIcon key={id} />
          )}
        </Box>
        <SwiperSlider img={img} name={name} />

        <Box
          sx={{
            padding: "10px",
            height: "190px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {fastreserve && <FastUse />}

            <Typography sx={{ fontSize: "12px", color: "#969696" }}>
              {truncateText(location, 40)}
            </Typography>
          </Box>
          <Link href={`/houses/${id}`}>
            <Typography sx={{ marginBottom: "10px", fontWeight: "bold" }}>
              {name}
            </Typography>
          </Link>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <Box>
              <Typography
                display="inline"
                sx={{
                  fontWeight: "bold",
                  color: "#969696",
                  textDecoration: "line-through",
                }}
              >
                {oldprice && (
                  <Typography color="#969696" sx={{ fontWeight: "bold" }}>
                    هر شب از {oldprice} تومان
                  </Typography>
                )}
              </Typography>
            </Box>
            {oldprice ? (
              <Box>
                <Typography>امشب {price} تومان </Typography>
              </Box>
            ) : (
              <Box>
                <Typography>هر شب {price} تومان </Typography>
              </Box>
            )}
          </Box>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Rating name="read-only" value={toEnglishDigits(rate)} readOnly />
            <Typography>{rate}</Typography>
            <Typography>({commentNum} نظر) . </Typography>
            {hospitable && (
              <Typography
                sx={{
                  typography: {
                    sm: "body1",
                    xs: "body2",
                    md: "11px",
                    lg: "11px",
                  },
                }}
              >
                مهمان نواز
              </Typography>
            )}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
