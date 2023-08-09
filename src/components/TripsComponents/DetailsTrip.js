"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TripsBoxIcon from "./TripsBoxIcon";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DoneIcon from "@mui/icons-material/Done";
import Image from "next/image";
import styles from "./Trip.module.css";
import ButtonTrips from "./ButtonTrips";
import avatarIcon from "./../../assets/images/userIcon.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
export default function DetailsTrip() {
  const [time, setTime] = useState(3 * 60 * 60); // زمان به ثانیه
  useEffect(() => {
    if (time > 0) {
      const timerId = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timerId); // تابع پاکسازی برای useEffect
    }
  }, [time]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return (
    <>
      <Box className={styles.detailsWrapper}>
        <Box className={styles.boxDetails}>
          <Box
            className={styles.hostBox}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TripsBoxIcon
                icon={
                  <EventAvailableIcon
                    sx={{
                      color: "secondary.light",
                      fontSize: "1.2rem",
                      marginLeft: "8px",
                    }}
                  />
                }
                title="مشخصات"
              />
              <Typography variant="body2" color="secondary">
                سه اتاق , دربست
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TripsBoxIcon
                icon={
                  <EventAvailableIcon
                    sx={{
                      color: "secondary.light",
                      fontSize: "1.2rem",
                      marginLeft: "8px",
                    }}
                  />
                }
                title="میزبان شما"
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image
                  src={avatarIcon}
                  width={24}
                  height={24}
                  alt="Picture of user icon"
                  style={{ marginLeft: "12px" }}
                />
                <Typography variant="body2" color="secondary.main">
                  ابوالفضل پور باقر
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ margin: "12px 0" }}>
            <TripsBoxIcon
              icon={
                <EventAvailableIcon
                  sx={{
                    color: "secondary.light",
                    fontSize: "1.2rem",
                    marginLeft: "8px",
                  }}
                />
              }
              title=" رزرو برای"
            />
            <Typography variant="body2" color="secondary">
              2 نفر + 0 نفر اضافه
            </Typography>
          </Box>
        </Box>
        <Box
          className={styles.BtnPaybox}
          sx={{ display: "flex", alignItems: "center", width: "100%" }}
        >
          <Box
            className={styles.BtnPay}
            sx={{
              width: "50%",
              padding: "8px 0",
              backgroundColor: "#E5FFEB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              cursor: "pointer",
            }}
          >
            <DoneIcon
              sx={{ color: "#24D941", fontSize: "1.2rem", marginLeft: "8px" }}
            />
            <Typography
              variant="body1"
              color="#24D941"
              sx={{ fontSize: { xs: ".8rem", sm: "1rem" } }}
            >
              در انتظار تایید میزبان
            </Typography>
          </Box>
          <Typography
            variant="h5"
            color="secondary"
            sx={{ marginRight: "12px" }}
          >
            {hours}:{minutes}:{seconds}
          </Typography>
          <ButtonTrips
            icon={
              <KeyboardBackspaceIcon color="info" sx={{ fontSize: "20px" }} />
            }
            className={styles.HidebtnsSm}
            text=" مشاهده صفحه اگهی"
          />
        </Box>
      </Box>
    </>
  );
}
