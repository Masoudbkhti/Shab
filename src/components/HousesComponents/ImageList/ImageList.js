"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./../../HousesComponents/HouseShow/house.module.css";
import "swiper/css";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
import { Pagination } from "swiper/modules";
import "./Slider.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import arrow from "../../../assets/icons/arrow-prev.svg";
export default function ImageList({ data, toggleDrawer, dataImage }) {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="ImageListSwiper"
      >
        {data.slice(0,7).map((img) => (
          <SwiperSlide key={img.key}>
            <img src={img.value} onClick={toggleDrawer("bottom", true)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        className="ImageListNotSwiper"
        sx={{
          display: "flex",
          height: "560px",
          flexDirection: "row",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "50%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        >
          <img
            src={dataImage.image.cover}
            alt={"image"}
            className={styles.img1}
            onClick={toggleDrawer("bottom", true)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            height: "100%",
            margin: "0 4px",
          }}
        >
          <img
            src={dataImage.image["img-1"]}
            alt="image"
            className={styles.img2}
            style={{ marginBottom: "4px" }}
            onClick={toggleDrawer("bottom", true)}
          />
          <img
            src={dataImage.image["img-2"]}
            alt="image"
            className={styles.img2}
            onClick={toggleDrawer("bottom", true)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "25%",
            height: "100%",
          }}
        >
          <img
            src={dataImage.image["img-3"]}
            alt="image"
            className={styles.img3}
            style={{ marginBottom: "4px", cursor: "pointer" }}
            onClick={toggleDrawer("bottom", true)}
          />

          <article
            className={styles.article}
            onClick={toggleDrawer("bottom", true)}
          >
            <img
              src={dataImage.image["img-4"]}
              alt="image"
              className={styles.img4}
            />
            <h1 className={styles.header}>
              <Typography
                variant="caption"
                component="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                مشاهده تمام تصاویر
                <Image
                  src={arrow}
                  alt="arrow"
                  width="20"
                  height="20"
                  style={{ cursor: "pointer" }}
                />
              </Typography>
            </h1>
          </article>
        </Box>
      </Box>
    </>
  );
}
