"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function NavTab() {
  return (
    <Box sx={{ width: "100%", marginBottom: "10px" }}>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        variant="fullWidth"
      >
        <Link href={"#image"} passHref >
          <Tab label="تصاویر" />
        </Link>
        <Link href={"#information"} passHref >
          <Tab label="مشخصات" />
        </Link>
        <Link href={"#rules"} passHref>
          <Tab label="قوانین" />
        </Link>
        <Link href={"#comments"} passHref>
          <Tab label="نظرات" />
        </Link>
      </Tabs>
    </Box>
  );
}
