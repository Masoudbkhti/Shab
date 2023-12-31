"use client";
import { Button, Box, Typography } from "@mui/material";
import Link from "next/link";
import SortXs from "./SortXs";
import { useState } from "react";
export default function Sort() {
  const [defaultColor, setDefaultColor] = useState("blue");
  const buttonStyle = {
    color: "secondary.main",
    borderRadius: "50px",
    paddingY: "10px",
    width: "100px",
    "&:hover": { backgroundColor: "#F8F8FE" },
    "&:active": { color: "blue" },
    "&:focus": { color: "blue" },
  };
  const changeDefaultColor = () => {
    setDefaultColor("secondary.main");
  };

  return (
    <>
      <Box
        sx={{
          width: "60%",
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          marginY: "50px",
          zIndex: "99",
        }}
      >
        <SortXs />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          alignItems: "center",
          gap: "8px",
          marginY: "50px",
        }}
      >
        <Typography
          variant="subtitle1"
          component="body1"
          sx={{ width: "100px" }}
        >
          مرتب سازی:
        </Typography>
        <Link
          href={{
            query: { sortBy: "5" },
          }}
        >
          <Button sx={{ ...buttonStyle, color: `${defaultColor}` }}>
            <Typography
              variant="subtitle1"
              component="body1"
              sx={{ width: "100px" }}
            >
              محبوب‌ترین
            </Typography>
          </Button>
        </Link>
        <Link href={{ query: { sortBy: "3" } }}>
          <Button sx={buttonStyle} onClick={changeDefaultColor}>
            <Typography
              variant="subtitle1"
              component="body1"
              sx={{ width: "100px" }}
            >
              ارزان‌ترین
            </Typography>
          </Button>
        </Link>
        <Link href={{ query: { sortBy: "2" } }}>
          <Button sx={buttonStyle} onClick={changeDefaultColor}>
            <Typography
              variant="subtitle1"
              component="body1"
              sx={{ width: "100px" }}
            >
              گران‌ترین
            </Typography>
          </Button>
        </Link>
        <Link href={{ query: { sortBy: "4" } }}>
          <Button sx={buttonStyle} onClick={changeDefaultColor}>
            <Typography
              variant="subtitle1"
              component="body1"
              sx={{ width: "100px" }}
            >
              بالاترین امتیاز
            </Typography>
          </Button>
        </Link>
      </Box>
    </>
  );
}
