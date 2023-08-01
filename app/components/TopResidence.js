"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./TopResidence.css";
import { Box, Typography, Button } from "@mui/material";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import HomeIcon from "@mui/icons-material/Home";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
export default function TopResidence({ data }) {
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
  const SiteHistory = [
    {
      id: 1,
      icon: <NightsStayIcon color="info" />,
      title: "1366000",
      subtitle: "شب اقامت",
      caption: "روزانه بیش از 15000 نفر، سایت شب را می‌بینند",
    },
    {
      id: 2,
      icon: <HomeIcon color="info" />,
      title: "12949",
      subtitle: "خانه فعال",
      caption: "خانه‌هایی که نظافت و امنیت‌شان تایید شده است.",
    },
    {
      id: 3,
      icon: <TextsmsOutlinedIcon color="info" />,
      title: "229000",
      subtitle: "نظر ثبت شده",
      caption: "نظراتی که مهمانان در مورد اقامت‌شان ثبت کرده‌اند.",
    },
    {
      id: 4,
      icon: <VerifiedUserOutlinedIcon color="info" />,
      title: "6سال",
      subtitle: "سابقه درخشان",
      caption: "در خدمت به شما مهمانان و میزبانان گرامی",
    },
  ];
  return (
    <>
      <Box
        backgroundColor="info.light"
        sx={{ with: "100%", padding: "45px 0" }}
      >
        <Box
          className="TopResidence-Container"
          sx={{
            margin: { xs: "0", sm: "0 5%" },

            height: "404px",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box
            className="swiper-container"
            paddingY={2}
            paddingX={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              width: { xs: "100%", md: "55%", lg: "44%" },
              height: "100%",
              borderRadius: { xs: "0 16px", md: "16px" },
              order: { xs: "2", md: "1" },
              marginTop: { xs: "-5px", md: "0" },
            }}
          >
            <Typography
              variant="h6"
              color="initial"
              sx={{ fontWeight: "bold" }}
            >
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
          <Box
            backgroundColor="primary.main"
            sx={{
              display: "flex",
              height: "auto",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: { xs: "nowrap", md: "wrap" },
              alignItems: { xs: "center", md: "flex-start" },
              backgroundColor: "#ffffff",
              width: { xs: "100%", md: "45%", lg: "56%" },
              height: { xs: "490px", md: "100%" },
              borderRadius: { xs: "16px 0", md: "16px" },
              order: { xs: "1", md: "2" },
              marginRight: { md: "12px" },
              padding: { xs: "30px  12px", md: "20px" },
            }}
          >
            {SiteHistory.map((detail) => (
              <>
                <Box
                  sx={{
                    border: { xs: "1px solid #f4f5ff", md: "none" },
                    marginBottom: { xs: "12px", md: "0" },
                    borderRadius: "12px",
                    width: { xs: "300px", md: "50%" },
                    padding: "16px 8px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      marginBottom: "6px",
                      flexDirection: { xs: "row", md: "column" },
                      alignItems: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <Box
                      sx={{
                        marginLeft: "8px",
                        marginBottom: { md: "12px" },
                        backgroundColor: "#f4f5ff",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "6px",
                      }}
                    >
                      {detail.icon}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="h5"
                        color="initial"
                        sx={{ fontWeight: "bold", marginLeft: "4px" }}
                      >
                        {detail.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="initial"
                        sx={{ fontSize: { md: ".9rem" } }}
                      >
                        {detail.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="caption"
                    color="initial"
                    sx={{ fontSize: { md: ".9rem" } }}
                  >
                    {detail.caption}
                  </Typography>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
