"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TripsBoxIcon from "./TripsBoxIcon";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DoneIcon from "@mui/icons-material/Done";
import Image from "next/image";
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
      <Box sx={{ width: "100%" }}>
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
          title="تاریخ سفر"
        />
        <Box
          sx={{
            margin: "12px 0",
            width: "220px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1" color="secondary">
              1402/07/12
            </Typography>
            <Typography variant="body2" color="secondary.light">
              ساعت 15:00:00
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1" color="secondary">
              1402/07/12
            </Typography>
            <Typography variant="body2" color="secondary.light">
              ساعت 18:00:00
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
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
              src="/../public/assets/images/userIcon.png"
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
      <Box sx={{ display: "flex" , alignItems :"center"}}>
        <Box
          sx={{
            width: "50%",
            padding: "8px 0",
            backgroundColor: "#E5FFEB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
            cursor :"pointer"
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
        <Typography variant="h5" color="secondary" sx={{ marginRight: "12px" }}>
          {hours}:{minutes}:{seconds}
        </Typography>
      </Box>
    </>
  );
}
