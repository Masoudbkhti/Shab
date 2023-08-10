"use client"
import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from './roomslider.module.css'
import {Box, Paper, Typography} from "@mui/material";

// import required modules

export default function RoomSlider() {
    return (
        <>
            <Swiper
                className={styles.swiper}
                slidesPerView={1.5}
                spaceBetween={20}
                breakpoints={{
                    600: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide>
                    <Paper
                        variant="outlined"
                        sx={{
                            display: "flex",
                            flexDirection:"column",
                        }}
                    >
                            <Typography
                                variant="body2"
                                component="h2"
                                fontWeight={"bold"}
                                marginTop={2}
                                marginRight={1.5}
                                display={"flex"}
                                alignItems={"center"}
                            >
                                پذیرایی
                            </Typography>
                            <Box>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    کولرگازی، هیتر برقی
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    طبقه همکف
                                </Typography>
                            </Box>
                        </Paper>
                </SwiperSlide>
                <SwiperSlide>
                    <Paper
                        variant="outlined"
                        sx={{
                            display: "flex",
                            flexDirection:"column",
                        }}
                    >
                        <Typography
                            variant="body2"
                            component="h2"
                            fontWeight={"bold"}
                            marginTop={2}
                            marginRight={1.5}
                            display={"flex"}
                            alignItems={"center"}
                        >
                            اتاق خواب ۱
                        </Typography>
                        <Box>
                            <Typography
                                variant="subtitle2"
                                component="p"
                                marginRight={1.5}
                                marginTop={1}
                                color={"#565861"}
                                display={"flex"}
                                alignItems={"center"}
                            >
                                اسپیلت، هیتر گرمایشی
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                component="p"
                                marginRight={1.5}
                                marginTop={1}
                                color={"#565861"}
                                display={"flex"}
                                alignItems={"center"}
                            >
                                ۲ تخت یک نفره
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                component="p"
                                marginRight={1.5}
                                marginTop={1}
                                color={"#565861"}
                                display={"flex"}
                                alignItems={"center"}
                            >
                                طبقه همکف
                            </Typography>
                        </Box>
                    </Paper>
                </SwiperSlide>
                <SwiperSlide>
                        <Paper
                            variant="outlined"
                            sx={{
                                display: "flex",
                                flexDirection:"column",
                            }}
                        >
                            <Typography
                                variant="body2"
                                component="h2"
                                fontWeight={"bold"}
                                marginTop={2}
                                marginRight={1.5}
                                display={"flex"}
                                alignItems={"center"}
                            >
                                اتاق خواب ۲
                            </Typography>
                            <Box>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    اسپیلت، هیتر گرمایشی
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    ۱ تخت یک نفره
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    طبقه همکف
                                </Typography>
                            </Box>
                        </Paper>
                </SwiperSlide>
            </Swiper>
        </>
    )
        ;
}
