"use client";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import FiberSmartRecordSharpIcon from "@mui/icons-material/FiberSmartRecordSharp";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import React, { useEffect, useState } from "react";
const NavLinks = [
  {
    id: 1,
    title: "خانه",
    path: "/",
    icon: (
      <FiberSmartRecordSharpIcon
        fontSize="small"
        sx={{ color: "secondary", marginBottom: "4px" }}
      />
    ),
  },
  {
    id: 2,
    title: "اقامتگاه ها",
    path: "/aa",
    icon: (
      <SearchOutlinedIcon
        fontSize="small"
        sx={{ color: "secondary", marginBottom: "4px" }}
      />
    ),
  },
  {
    id: 3,
    title: "سفر ها",
    path: "/ee",
    icon: (
      <BackpackOutlinedIcon
        fontSize="small"
        sx={{ color: "secondary", marginBottom: "4px" }}
      />
    ),
  },
  {
    id: 4,
    title: "علاقه مندی ها",
    path: "/ee",
    icon: (
      <BookmarkBorderOutlinedIcon
        fontSize="small"
        sx={{ color: "secondary", marginBottom: "4px" }}
      />
    ),
  },
];
export default function Navbar() {
  const pathname = usePathname();
    // const [onCLick, setCLicked] = useState(false);
    // const handelClick = () => {
    //   setCLicked(true);
    // // };
    //             onClick={handelClick}
    //         className={`${onCLick ? styles.ripple : ""}`}
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };
  return (
    <>
      {scrollPosition > 0 ? null : (
        <Paper
          // className={styles.navbar}
          elevation={3}
          sx={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            display: { xs: "block", md: "none" },
          }}
        >
          {/* <Box
        height={30}
        sx={{
          display: "flex",
        }}
      ></Box> */}
          <Box
            height={60}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {NavLinks.map((link) => (
              <Link
                href={link.path}
                key={link.id}
                passHref
                style={{ width: "25%", height: "100%" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className={`${
                    pathname === link.path ? styles.activeLink : ""
                  }`}
                >
                  {link.icon}
                  <Typography
                    variant="caption"
                    // color="initial"
                    color="secondary"
                    sx={{ fontSize: ".6rem" }}
                    className={`${
                      pathname === link.path ? styles.activeText : ""
                    }`}
                  >
                    {link.title}
                  </Typography>
                </Box>
              </Link>
            ))}
          </Box>
        </Paper>
      )}
    </>
  );
}
