"use client";

import visit from "/json/db.json";

// import React, {useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./PopularSlider.css";

// import required modules
import { Keyboard, FreeMode, Navigation } from "swiper/modules";
import CityCards from "/src/components/HomeComponents/PopularCity/CityCards";
import Link from "next/link";
export default function PopularSlider() {
  return (
    <>
      <Swiper
        freeMode={true}
        dir="rtl"
        slidesPerView={1.5}
        spaceBetween={24}
        breakpoints={{
          310: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4.3,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 5.7,
            spaceBetween: 24,
          },
        }}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard, FreeMode]}
        className="mySwiper"
      >
        {visit.cities.map((city, key) => (
          <SwiperSlide key={key}>
            <Link href={`/search/city/${city.name}`}>
              <CityCards
                image={city.image}
                name={city.name}
                number={city.number}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
  return (
    <>
      <Swiper
        freeMode={true}
        dir="rtl"
        slidesPerView={1.5}
        spaceBetween={24}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4.3,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 5.7,
            spaceBetween: 24,
          },
        }}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard, FreeMode]}
        className="mySwiper"
      >
        {visit.cities.map((city, key) => (
          <SwiperSlide key={key} style={{ width: "200px" }}>
            <Link href={`/search/city/${city.name}`} style={{ width: "100%" }}>
              <CityCards
                image={city.image}
                name={city.name}
                number={city.number}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
