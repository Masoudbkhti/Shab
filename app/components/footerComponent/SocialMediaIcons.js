"use client"
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
const socialMediaIcon = [
  { id: 1, icon: <TelegramIcon color="info" /> },
  { id: 2, icon: <TwitterIcon  color="info" /> },
  { id: 3, icon: <InstagramIcon  color="info" /> },
  { id: 1, icon: <LinkedInIcon  color="info" /> },
];
export default function SocialMediaIcons() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        paddingBottom: "20px",
        border: "3px solid orange",
      }}
    >
      {socialMediaIcon.map((icons) => (
        <Box
          key={icons.key}
          sx={{
            border: "1px solid #f4f5ff",
            width: { xs: "18%" , sm:"95px"},
            margin: "0 4px",
            height: "40px",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icons.icon}
        </Box>
      ))}
    </Box>
  );
}
