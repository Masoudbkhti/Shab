"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import Grid from "@mui/material/Grid";

// Rest of the code...

// import { getLocalData } from '@/json/lib/localdata';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { Container } from "@mui/material";

export default function Slider({data}) {
//  console.log(data.cities)
  return (
    <Container>
      <Grid container>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {data.cities.map((city,index) => (
           
              <SwiperSlide key={index}>
              <Card img={city.image} name={city.name} />
              
            </SwiperSlide>
            
           ))}
          
        </Swiper>
      </Grid>
    </Container>
  );
}
