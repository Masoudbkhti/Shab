"use client";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProfileBox from "./ProfileBox";
import styles from "./header.module.css";
import SearchMenu from "./SearchMenu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Menu({ data }) {
  const [fix, setFix] = useState(false);
  const pathname = usePathname();
  function setfixed() {
    if (window.scrollY >= 90) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setfixed);
    return () => window.removeEventListener("scroll", setfixed);
  }, []);
  return (
    <>
      <Box
        height={80}
        className={`${styles.menu} ${
          !fix && pathname === "/" && styles.menuHeader
        }`}
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
        {!fix && pathname === "/" ? (
          <Image
            className={styles.logoHeader}
            src="/../public/assets/images/logo-white.png"
            width={100}
            height={30}
            alt="Picture of logo"
          />
        ) : (
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
            className={`${!fix && pathname === "/" && styles.colorWhite}`}
            sx={{ display: { xs: "none", sm: "flex" }, marginLeft: "40px" }}
          >
            <Link href="/trips">سفر های من</Link>
          </Typography>
          <ProfileBox
            fixMenu={!fix && pathname === "/" && "white"}
          ></ProfileBox>
        </Stack>
      </Box>
    </>
  );
}
