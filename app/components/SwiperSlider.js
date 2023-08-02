"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSlider({ img, name }) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {Object.entries(img).map(([key, value]) => (
        <SwiperSlide key={key}>
          <img key={key} src={value} alt={name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
