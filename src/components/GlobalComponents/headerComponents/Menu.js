"use client";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProfileBox from "./ProfileBox";
import styles from "./header.module.css";
import SearchMenu from "./SearchMenu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoWhite from "../../../assets/images/logo-white.png";
import logoRgb from "../../../assets/images/logo-rgb.png";
export default function Menu({ data }) {
  const [fix, setFix] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
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
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  return (
    <>
      <Box
        height={80}
        className={`${styles.menu} ${
          !fix && pathname === "/" && styles.menuHeader
        } ${
          (pathname === "/trips" || pathname === "/bookmarks") &&
          windowWidth < 700 &&
          styles.menuTrips
        }
        `}
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
          <Link href="/" style={{ cursor: "pointer" }}>
            <Image
              className={styles.logoHeader}
              src={logoWhite}
              width={100}
              height={30}
              alt="Picture of logo"
            />
          </Link>
        ) : pathname === "/trips" && windowWidth < 900 ? (
          <>
            <Typography variant="subtitle2" color="initial" component="h6">
              سفر ها من
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <SearchMenu data={data} />
            </Box>
          </>
        ) : pathname === "/bookmarks" && windowWidth < 900 ? (
          <>
            <Typography variant="body3" color="initial" component="p">
              علاقه مندی ها
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <SearchMenu data={data} />
            </Box>
          </>
        ) : (
          <>
            <Link href="/" style={{ cursor: "pointer" }}>
              <Image
                className={styles.logoHeader}
                src={logoRgb}
                width={100}
                height={30}
                alt="Picture of logo"
              />
            </Link>

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
            variant="subtitle2"
            component="p"
            color="secondary"
            className={`${!fix && pathname === "/" && styles.colorWhite}`}
            sx={{ display: { xs: "none", sm: "flex" }, marginLeft: "40px" }}
          >
            {(pathname === "/bookmarks" && windowWidth < 900) ||
            (pathname === "/trips" && windowWidth < 900) ? (
              ""
            ) : (
              <Link href="/trips">سفر های من</Link>
            )}
          </Typography>
          <ProfileBox
            fixMenu={!fix && pathname === "/" && "white"}
          ></ProfileBox>
        </Stack>
      </Box>
    </>
  );
}
