import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import SocialMediaIcons from './SocialMediaIcons';
import PhoneIcon from "@mui/icons-material/Phone";
const IntroductionLinks = [
  { link: " درباره شب", id: 1 },
  { link: "تماس با پشتیبانی", id: 2 },
  { link: "سوالات متداول", id: 3 },
  { link: "حقوق کاربران", id: 4 },
  { link: "قوانین استفاده از شب", id: 5 },
  { link: "قواعد باز پرداخت وجه", id: 6 },
  { link: "وبلاگ شب", id: 7 },
  { link: "میزبان شوید", id: 8 },
  { link: "نحوه کار شب", id: 9 },
  { link: "همکاری سازمانی", id: 10 },
  { link: "فرصت های شغلی", id: 11 },
];
export default function IntroductionFooter() {
  return (
    <Box
      backgroundColor="white"
      sx={{
        display: "flex",
        padding: "40px 0",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
      }}
    >
      <Box
        className="Introduction"
        sx={{
          width: { xs: "100%", lg: "42%" },
          height: "100%",
          paddingBottom: { xs: "40px", lg: "0" },
        }}
      >
        <Typography
          variant="h6"
          color="initial"
          component="h6"
          sx={{ marginBottom: "20px" }}
        >
          با شب بیشتر آشنا شوید
        </Typography>
        <Box
          className="Introduction-Links"
          sx={{
            maxWidth: "542px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {IntroductionLinks.map((links) => (
            <Typography
              key={links.id}
              variant="body2"
              component="h3"
              color="secondary.light"
              sx={{
                width: { xs: "180px", lg: "150px" },
                paddingBottom: "12px",
              }}
            >
              <Link href="/">{links.link}</Link>
            </Typography>
          ))}
        </Box>
      </Box>
      <Box
        className="socialMedia"
        border
        sx={{
          width: {
            xs: "100%",
            lg: "35%",
            paddingBottom: { xs: "10px", lg: "0" },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <Typography
            variant="h6"
            color="initial"
            component="h6"
            sx={{ marginLeft: "12px" }}
          >
            تلفن پشتیبانی{" "}
          </Typography>
          <Typography variant="body2" color="secondary" component="h4">
            پاسخگویی ۹ صبح تا ۱ شب
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <Typography
            variant="h5"
            color="initial"
            component="h4"
            sx={{
              marginLeft: "16px",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          >
            88 12 11 28 - 021
          </Typography>
          <Box
            sx={{
              border: "1px solid #f4f5ff",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <PhoneIcon color="info" />
          </Box>
        </Box>
        <Box>
          <Typography
            variant="body2"
            color="secondary"
            component="h4"
            sx={{ paddingBottom: "20px" }}
          >
            تهران، خیابان شریعتی، کوچه پروین، پلاک ۱۸، واحد ۶
          </Typography>
        </Box>
      </Box>
      <SocialMediaIcons />
    </Box>
  );
}
