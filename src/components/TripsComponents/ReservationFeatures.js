import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ButtonTrips from "./ButtonTrips";
import styles from "./Trip.module.css";
import toPersianDigits from "@/src/utils/toPersianDigits";
export default function ReservationFeatures({ totalPrice }) {
  return (
    <Box
      className={styles.boxBtnsPay}
      sx={{
        width: "100%",
        borderTop: "1px solid #E6E7F2",
        marginTop: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        className={styles.priceBox}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          className={styles.price}
          sx={{ display: "flex", alignItems: "center", margin: "16px 0" }}
        >
          <Typography
            variant="h1"
            component="h6"
            color="secondary"
            ml={1}
          >
            {toPersianDigits(totalPrice)}
          </Typography>
          <Typography variant="subtitle2" component="h6" color="secondary">
            تومان
          </Typography>
        </Box>
        <Box
          bgcolor="info.main"
          sx={{
            cursor: "pointer",
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "18px",
            marginBottom: "12px",
          }}
        >
          <Typography variant="subtitle2" component="h6" color="primary">
            مشاهده فاکتور
          </Typography>
        </Box>
      </Box>
      <Box
        className={styles.btnSocialsBox}
        sx={{
          width: "100%",
          paddingTop: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "110px",
        }}
      >
        <Box
          className={styles.btnSocialsBoxFirst}
          sx={{ width: "100%", display: "flex" }}
        >
          <ButtonTrips className={styles.Hidebtns} text="صفحه اگهی" />
          <ButtonTrips color="red" text="لغو درخواست" />
        </Box>
        <Box
          className={styles.btnSocialsBoxSecond}
          sx={{ width: "100%", display: "flex" }}
        >
          <ButtonTrips text="گفتگوی آنلاین" />
          <ButtonTrips color="#CECFDC" text="تماس تلفنی" disable="disableBtn" />
        </Box>
      </Box>
    </Box>
  );
}
