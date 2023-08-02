"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ResCardHome from "./ResCardHome";
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
      <Grid container justifyContent="center" spacing={2} mt={4}>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {data.residence.map((res) => (
                  <SwiperSlide ><ResCardHome 
                  img={res.image.cover}
                  name={res.title}
                  location={res.location}
                  type={res.type}
                  person={res.person}
                  room={res.room}
                  rate={res.rate}
                  price={res.price}
                  fastreserve={res.fastreserve}
                />
                
                 </SwiperSlide>
            
          ))}

            
        </Swiper>
      </Grid>
    </Container>
  );
}
