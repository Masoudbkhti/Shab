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
import { Box, Container } from "@mui/material";

export default function Slider({data}) {
//  console.log(data.cities)
// console.log(data.residence)
  return (
    <Container sx={{my:4, bgcolor: "salmon", padding: "1rem", }} >
      <Grid container justifyContent="center" spacing={1} mt={4}>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            // Set different slide count for different screen sizes
            1024: {
              slidesPerView: 3, // Show 3 slides on larger screens
            },
            768: {
              slidesPerView: 2, // Show 2 slides on medium-sized screens
            },
            320: {
              slidesPerView: 1.2, // Show 1.2 slides on smaller screens
            },
          }}
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
