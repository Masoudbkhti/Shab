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
        slidesPerView={1.4}
        breakpoints={{
          310: {
            slidesPerView: 1.4,
          },
          375: {
            slidesPerView: 1.6,
          },
          425: {
            slidesPerView: 1.8,
          },
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 2.4,
          },
          1440: {
            slidesPerView: 3.6,
          },
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Keyboard, Navigation, Mousewheel, FreeMode]}
      >
        {filteredData.map((res) => (
          <SwiperSlide key={res.id} sx={{ width: "190px" }}>
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
