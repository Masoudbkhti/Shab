// "use client";
import styles from "./header.module.css";
import React from "react";
import { Box, Stack } from "@mui/material";
import MoreBox from "./MoreBox";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import SearchMenu from "./SearchMenu";
import MoreModal from "./MoreModal";
export default function Menu({ data }) {
  return (
    <>
      <Box
        height={80}
        className={`${styles.menu}`}
        px={3}
        sx={{
          backgroundColor: "white",
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
          src="/../public/assets/images/logo-rgb.png"
          width={100}
          height={30}
          alt="Picture of logo"
        />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <SearchMenu data={data} />
        </Box>
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
            sx={{ display: { xs: "none", sm: "flex" }, marginLeft: "40px" }}
          >
            <Link href="/trips">سفر های من</Link>
          </Typography>
          <MoreBox fixMenu={"#4156d9"}>
            <MoreModal />
          </MoreBox>
        </Stack>
      </Box>
    </>
  );
}
