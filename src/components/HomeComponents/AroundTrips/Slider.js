"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ResCardHome from "./ResCardHome";
import "swiper/css";
import "swiper/css/navigation";
import StyleCss from "./slider.module.css";
import "./haloslider.css";
import { FreeMode, Navigation } from "swiper/modules";
import { Typography, Box, Button, SvgIcon } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Slider({ data }) {
  return (
    <Box
      bgcolor="primary"
      sx={{
        padding: { padding: "24px 10px", sm: "24px 5%" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "10px 0",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "6px",
        }}
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom={1}
            sx={{
              position: "relative",
              width: "100%",
            }}
          >
            <Box marginRight={2} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                component="h6"
                marginY={1}
                sx={{
                  marginLeft: {
                    sm: "40px",
                  },
                }}
              >
                سفر به اطراف
              </Typography>
              <Typography variant="h6" component="h6" marginY={1} marginX={2}>
                تهران
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                component="h6"
                marginY={1}
                sx={{
                  fontSize: "14px",
                  color: "#4156d9",
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                }}
              >
                مشاهده همه پیشنهادهای اطراف تهران
                <SvgIcon
                  component={ExpandMoreIcon}
                  sx={{
                    fontSize: 20,
                    marginLeft: 2,
                    transform: "rotate(90deg)",
                  }}
                />
              </Typography>
            </Box>
          </Box>
        </Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          navigation={true}
          modules={[Navigation, FreeMode]}
          freemode={true}
          breakpoints={{
            1024: {
              slidesPerView: 3.7,
            },
            768: {
              slidesPerView: 2.5,
            },
            600: {
              slidesPerView: 2.2,
            },
            480: {
              slidesPerView: 1.8,
            },
            310: {
              slidesPerView: 1.2,
            },
          }}
          className={`${StyleCss.swiper} mySwiper `}
        >
          {data.residence.map((res) => (
            <SwiperSlide className={StyleCss.swiperslide} key={res.id}>
              <ResCardHome
                img={res.image.cover}
                name={res.title}
                location={res.location}
                type={res.type}
                person={res.person}
                room={res.room}
                rate={res.rate}
                price={res.price}
                fastreserve={res.fastreserve}
                id={res.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
