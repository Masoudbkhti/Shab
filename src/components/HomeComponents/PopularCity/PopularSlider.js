'use client'

import visit from '/json/db.json'

// import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './PopularSlider.css';

// import required modules
import { Keyboard, FreeMode, Navigation} from 'swiper/modules';
import CityCards from "/src/components/HomeComponents/PopularCity/CityCards";

export default function PopularSlider() {
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
                    <SwiperSlide key={key}>
                        <CityCards
                            image={city.image}
                            name={city.name}
                            number={city.number}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
