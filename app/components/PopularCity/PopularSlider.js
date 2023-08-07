'use client'
import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './PopularSlider.css';

import {Keyboard, FreeMode, Navigation} from 'swiper/modules';
import ResCardHome from "@/app/components/ResCardHome";
import CityCards from "@/app/components/PopularCity/CityCards";

export default function PopularSlider({data}) {
    return (
        <>
            <Swiper
                navigation={true}
                freeMode={true}
                loop={true}
                dir="rtl"
                slidesPerView={1.5}
                spaceBetween={24}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                keyboard={true}
                modules={[Keyboard, FreeMode, Navigation]}
                className="mySwiper"
            >
                {data.cities.map((city, key) => (
                    <SwiperSlide key={key}>
                        <CityCards data={city}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
