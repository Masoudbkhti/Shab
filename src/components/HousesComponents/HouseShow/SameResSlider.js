import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./samslider.module.css";
import "./sameslider.css";
import { Keyboard, Navigation, Mousewheel, FreeMode } from "swiper/modules";
import SameResCards from "/src/components/HousesComponents/HouseShow/SameResCards";
import { Grid } from "@mui/material";

export default function SameResSlider({ data, resdata }) {
  // Make sure data and resdata are defined and not null
  if (!data || !resdata) {
    return null; // Return something meaningful if the data is missing
  }

  const filteredData = resdata.filter((item) => data.cityid === item.cityid);

  return (
    <Grid>
      <Swiper
        freeMode={true}
        cssMode={true}
        className={styles.myResSwiper}
        navigation={true}
        dir="rtl"
        spaceBetween={30}
        mousewheel={true}
        keyboard={true}
        modules={[Keyboard, Navigation, Mousewheel, FreeMode]}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          400: {
            slidesPerView: 1.8,
          },
          500: {
            slidesPerView: 2.2,
          },
          550: {
            slidesPerView: 2.5,
          },

          700: {
            slidesPerView: 2.9,
          },
          800: {
            slidesPerView: 3.3,
          },
          900: {
            slidesPerView: 2.3,
          },
          1000: {
            slidesPerView: 2.7,
          },
          1200: {
            slidesPerView: 3.2,
          },
        }}
      >
        {filteredData.map((res) => (
          <SwiperSlide key={res.id}>
            <SameResCards
              img={res.image.cover}
              title={res.title}
              location={res.cityName}
              type={res.type}
              person={res.person}
              room={res.room}
              price={res.price}
              oldprice={res.oldprice}
              fastreserve={res.fastreserve}
              id={res.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
}
