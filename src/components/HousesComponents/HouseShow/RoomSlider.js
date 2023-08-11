"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from "./roomslider.module.css";
import { Box, Paper, Typography } from "@mui/material";

// import required modules

export default function RoomSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={5}
      >
        <SwiperSlide>
          <Paper
            className={styles.swiper}
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body2"
              component="h2"
              fontWeight={"bold"}
              marginTop={1}
              marginRight={1.5}
              display={"flex"}
            >
              پذیرایی
            </Typography>
            <Box
              marginTop={1}
              marginRight={1.5}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="subtitle2"
                component="p"
                color={"#565861"}
                marginTop={1}
              >
                کولرگازی، هیتر برقی
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                color={"#565861"}
                marginY={1}
              >
                طبقه همکف
              </Typography>
            </Box>
          </Paper>
        </SwiperSlide>
        <SwiperSlide>
          <Paper
            className={styles.swiper}
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body2"
              component="h2"
              fontWeight={"bold"}
              marginTop={1}
              marginRight={1.5}
            >
              اتاق خواب ۱
            </Typography>
            <Box>
              <Typography
                variant="subtitle2"
                component="p"
                marginRight={1.5}
                marginTop={1}
                color={"#565861"}
              >
                اسپیلت، هیتر گرمایشی
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                marginRight={1.5}
                marginTop={1}
                color={"#565861"}
              >
                ۲ تخت یک نفره
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                marginRight={1.5}
                marginY={1}
                color={"#565861"}
              >
                طبقه همکف
              </Typography>
            </Box>
          </Paper>
        </SwiperSlide>
        <SwiperSlide>
          <Paper
            className={styles.swiper}
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body2"
              component="h2"
              fontWeight={"bold"}
              marginTop={1}
              marginRight={1.5}
            >
              اتاق خواب ۲
            </Typography>
            <Box>
              <Typography
                variant="subtitle2"
                component="p"
                marginRight={1.5}
                marginTop={1.5}
                color={"#565861"}
              >
                اسپیلت، هیتر گرمایشی
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                marginRight={1.5}
                marginTop={1}
                color={"#565861"}
              >
                ۱ تخت یک نفره
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                marginRight={1.5}
                marginY={1}
                color={"#565861"}
              >
                طبقه همکف
              </Typography>
            </Box>
          </Paper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
