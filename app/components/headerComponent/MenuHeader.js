// "use client";
import styles from "./header.module.css";
import React from "react";
import { Box, Stack } from "@mui/material";
import ProfileBox from "./ProfileBox";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import ProfileModal from "./ProfileModal";
export default function Menu({ data }) {
  return (
    <>
      <Box
        height={80}
        px={3}
        sx={{
          backgroundColor: "transparent",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          className={styles.logoHeader}
          src="/../public/assets/images/logo-white.png"
          width={100}
          height={30}
          alt="Picture of logo"
        />
        <Stack
          direction="row"
          sx={{
            disply: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            component="h2"
            color="secondary"
            className={`${styles.colorWhite}`}
            sx={{ display: { xs: "none", sm: "flex" }, marginLeft: "40px" }}
          >
            <Link href="/trips">سفر های من</Link>
          </Typography>
          <ProfileBox fixMenu={"#fff"}>
            <ProfileModal />
          </ProfileBox>
        </Stack>
      </Box>
    </>
  );
}
