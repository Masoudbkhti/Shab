"use client";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import FiberSmartRecordSharpIcon from "@mui/icons-material/FiberSmartRecordSharp";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CloseIcon from "@mui/icons-material/Close";
import React, { useCallback, useEffect, useState } from "react";
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
    path: "/search",
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
    path: "/trips",
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
    path: "/bookmarks",
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
  const [ADVERTISING, setADVERTISING] = useState(true);
  const handleCLick = useCallback(() => setADVERTISING(false), []);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 10) {

        setShowNavbar(true);
      } else if (currentScrollPos < prevScrollPos || currentScrollPos <= 10) {
        setShowNavbar(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {showNavbar ? null : (
        <>
          <Box
            bgcolor="info.main"
            className={`${!ADVERTISING && styles.ADVERTISINGBox}`}
            sx={{
              padding: "0 12px",
              alignItems: "center",
              justifyContent: "space-between",
              position: "fixed",
              bottom: "60px",
              height: "36px",
              zIndex: "tooltip",
              width: "100%",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" color="primary" component="h2">
                تخفیف ها ویژه فقط در اپلیکیشن شب !
              </Typography>
              <Box
                mr={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "46px",
                  height: "26px",
                  borderRadius: "8px",
                  backgroundColor: "#94A0EA",
                }}
              >
                <Typography variant="body2" color="initial" component="h3">
                  <Link href="/">دانلود</Link>
                </Typography>
              </Box>
            </Box>
            <CloseIcon
              color="primary"
              sx={{ cursor: "pointer" }}
              onClick={handleCLick}
            />
          </Box>
          <Paper
            elevation={3}
            sx={{
              position: "fixed",
              zIndex: "tooltip",
              bottom: "0",
              width: "100%",
              display: { xs: "block", md: "none" },
            }}
          >
            <Box
              height={60}
              pt="2px"
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
                      component="h2"
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
        </>
      )}
    </>
  );
}
