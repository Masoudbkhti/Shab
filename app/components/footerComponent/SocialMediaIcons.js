"use client"
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";
const socialMediaIcon = [
  { id: 1, icon: <TelegramIcon color="info" /> },
  { id: 2, icon: <TwitterIcon  color="info" /> },
  { id: 3, icon: <InstagramIcon  color="info" /> },
  { id: 1, icon: <LinkedInIcon  color="info" /> },
];
export default function SocialMediaIcons() {
  return (
    <Box  sx={{ display: "flex", flexDirection: "column" ,width: { xs: "100%", lg: "23%" },}}>
      <Typography variant="h5" color="secondary" sx={{display :{xs:"none" , sm :"flex" , paddingBottom :"12px"}}}>
        شبکه‌های اجتماعی شب
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: { xs: "nowrap", sm: "wrap" },
          paddingBottom: "20px",
          width: { xs: "100%", sm: "250px" },
        }}
      >
        {socialMediaIcon.map((icons) => (
          <Box
            key={icons.key}
            sx={{
              border: "1px solid #f4f5ff",
              width: "100px",
              maxWidth: "130px",
              margin: { xs: "0 6px", sm: "0 6px 12px 6px" },
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
    </Box>
  );
}
