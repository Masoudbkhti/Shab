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
  const rateNum = toEnglishDigits(rate);
  console.log(rateNum);
  return (
    <Grid item md={6} lg={3}>
      <Paper elevation={1} sx={{ overflow: "hidden", position: "relative" }}>
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
            {hospitable && <Typography>مهمان نواز</Typography>}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
