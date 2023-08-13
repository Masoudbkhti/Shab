"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./swiperslider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./swiperslider.module.css"

export default function SwiperSlider({ img, name }) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className={style.SwiperSearch}
    >
      {Object.entries(img).map(([key, value]) => (
        <SwiperSlide className={style.SwiperSearchSlider} key={key}>
          <img key={key} src={value} alt={name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
