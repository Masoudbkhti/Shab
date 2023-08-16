import Link from "next/link";
import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./not-found.module.css";

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          position: "static",
          paddingTop: "80px",
          height: "720px",
          maxWidth: "1300px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "350px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flexStart",
          }}
        >
          <Box>
            <Typography
              fontSize="60px"
              component="h2"
              fontWeight="bold"
              color="#333333"
              lineHeight="85px"
            >
              یافت نشد!
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize="30px"
              component="h3"
              fontWeight="500"
              color="#333333"
              lineHeight="40px"
            >
              صفحه موردنظر شما پیدا نشد.
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize="18px"
              component="h4"
              color="#333333"
              fontWeight="500"
              lineHeight="40px"
            >
              پیشنهادهای ما برای شما:
            </Typography>
          </Box>
          <Box>
            <Link href="/">
              <Typography component="a" className={styles.link}>
                صفحه ی اصلی
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link href={`/search/city/تهران`}>
              <Typography component="a" className={styles.link}>
                اقامتگاه در تهران
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link href={`/search`}>
              <Typography component="a" className={styles.link}>
                جست و جو
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            width: "550px",
            height: "400px",
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.shab.ir/img/Iran_location_map.png"
            alt="iran-map"
            className={styles.image}
          />
        </Box>
      </Box>
    </>
  );
};
export default NotFound;
