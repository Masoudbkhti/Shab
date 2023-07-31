"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./TopAccommodations.css";
import { Box, Typography, Button } from "@mui/material";

export default function App({ data }) {
    function toEnglishDigits(str) {
      const persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
      const arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
      const englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

      return str
        .split("")
        .map(
          (c) =>
            englishNumbers[persianNumbers.indexOf(c)] ||
            englishNumbers[arabicNumbers.indexOf(c)] ||
            c
        )
        .join("");
    }
  const filteredTopresidence = data.residence.filter((city) => {
    return toEnglishDigits(city.rate) > 4.6;
  });
  const chooseTopresidenceImage = filteredTopresidence.map((city) => {
    return city.image["img-1"];
  });
  // console.log(filteredTopresidence);
  // console.log(chooseTopresidenceImage);

  return (
    <>
      <Box
        backgroundColor="info.light"
        sx={{ margin: { xs: "0", sm: "0 5%" } }}
      >
        <Box
          className="swiper-continer"
          paddingY={2}
          paddingX={1}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6" color="initial">
            اقامتگاه های برتر این ماه
          </Typography>
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper"
            centeredSlidesBounds
            centeredSlides
            slideActiveClass="activeSlide"
          >
            {filteredTopresidence.map((city, index) => (
              <SwiperSlide>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="imageslider"
                    src={chooseTopresidenceImage[index]}
                    style={{
                      borderRadius: "50%",
                      border: "6px solid white",
                      boxShadow: "0 10px 20px 0 rgb(8,10,26,24%)",
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="initial"
                    mt={2}
                    sx={{ whiteSpace: "pre-wrap", padding: "0 10px" }}
                  >
                    {city.title.slice(0, 16)}...
                  </Typography>
                  <Typography variant="caption" color="secondary" mt={1}>
                    {city.cityName}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            style={{
              border: "1px solid #4156d9",
              padding: "8px",
              backgroundColor: "white",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="button"
              color="info.main"
              sx={{ cursor: "pointer" }}
            >
              نمایش همه
            </Typography>
          </button>
        </Box>
      </Box>
    </>
  );
}
