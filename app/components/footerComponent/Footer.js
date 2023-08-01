import { Box, Typography } from "@mui/material";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import SocialMediaIcons from "./SocialMediaIcons";
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

export default function Footer() {

  return (
    <Box
      backgroundColor="info.main"
      sx={{ with: "100%", paddingBottom: "40px" }}
    >
      <Box
        backgroundColor="white"
        sx={{
          margin: { xs: "0", sm: "0 5%" },
          //   height: "",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        <Box
          className="Introduction"
          border={1}
          sx={{
            width: { xs: "100%", lg: "38%" },
            height: "100%",
            padding: "40px 0",
          }}
        >
          <Typography
            variant="h6"
            color="initial"
            sx={{ marginBottom: "20px" }}
          >
            با شب بیشتر آشنا شوید
          </Typography>
          <Box
            className="Introduction-Links"
            sx={{
              maxWidth: "542px",
              display: "flex",
              border: "1px solid green",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {IntroductionLinks.map((links) => (
              <Typography
                key={links.id}
                variant="body2"
                color="secondary.light"
                sx={{
                  width: { xs: "180px", lg: "148px" },
                  paddingBottom: "12px",
                  //   border: "1px solid red",
                }}
              >
                <Link href="/">{links.link}</Link>
              </Typography>
            ))}
          </Box>
        </Box>
        <Box className="socialMedia">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "20px",
              border: "3px solid orange",
            }}
          >
            <Typography
              variant="h6"
              color="initial"
              sx={{ marginLeft: "12px" }}
            >
              تلفن پشتیبانی{" "}
            </Typography>
            <Typography variant="body2" color="secondary">
              پاسخگویی ۹ صبح تا ۱ شب
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "20px",
              border: "3px solid blue",
            }}
          >
            <Typography
              variant="h5"
              color="initial"
              sx={{
                marginLeft: "16px",
                fontSize: "1.8rem",
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
              }}
            >
              <PhoneIcon color="info" />
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color="secondary"
              sx={{ paddingBottom: "20px", border: "2px solid red" }}
            >
              تهران، خیابان شریعتی، کوچه پروین، پلاک ۱۸، واحد ۶
            </Typography>
          </Box>
          <SocialMediaIcons/>
        </Box>
      </Box>
    </Box>
  );
}
