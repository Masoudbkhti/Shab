"use client"
import styles from "./header.module.css"
import React from "react";
import { Box, Stack } from "@mui/material";
import MoreBox from "./MoreBox";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { useState } from "react";
import Image from "next/image";
import MoreModal from "./MoreModal";
import SearchMenu from "./SearchMenu";
export default function Menu({data}) {
  const [fix, setFix] = useState(false);
  function setfixed() {
    if (window.scrollY >= 90) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setfixed);
  return (
    <>
      <Box
        height={80}
        className={`${fix && styles.menuFixed}`}
        px={3}
        sx={{
          backgroundColor: "transparent",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          // zIndex: "tooltip",
          // boxShadow: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {fix ? (
          <>
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
          </>
        ) : (
          <Image
            className={styles.logoHeader}
            src="/../public/assets/images/logo-white.png"
            width={100}
            height={30}
            alt="Picture of logo"
          />
        )}
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
            className={`${!fix && styles.colorWhite}`}
            sx={{ display: { xs: "none", sm: "flex" }, marginLeft: "40px" }}
          >
            <Link href="/trips">سفر های من</Link>
          </Typography>
          <MoreBox fixMenu={fix && "#4156d9"}>
            <MoreModal />
          </MoreBox>
        </Stack>
      </Box>
    </>
  );
}
