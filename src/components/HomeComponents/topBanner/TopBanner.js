import { Box } from "@mui/material";
import UnderTopBanner from "./UnderTopBanner";

export default function TopBanner() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        padding: { xs: "32px 14px", sm: "32px 5%" },
        bgcolor: "#F4F4FF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", xs: "column", md: "row" },
        }}
      >
        <Box className="applypadding" sx={{ width: { sm: "100%", md: "50%" } }}>
          <img
            sx={{ width: "100%", height: "100%" }}
            src="https://s3gw.at.shab.cloud/production/banners/TC9oLBJbdPSPwlsXE2GCfojnATeadoInWREliWcr.png"
            alt="تضمین قیمت"
            className="BannerImag BorderImag"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: { sx: "100%", md: "50%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <Box className="applypadding">
              <img
                src="https://s3gw.at.shab.cloud/production/banners/BLwDKLIwX9sQS3KF4AKAmVxmxhvDN1yamDv5QVCj.png"
                alt="اقامتگاه رزرو آنی"
                className="BannerImag BorderImag"
              />
            </Box>
            <Box className="applypadding">
              <img
                src="https://s3gw.at.shab.cloud/production/banners/6wuOKTYwf2EW62MBZoWCC29JUlyju4rHdlbXhoSB.png"
                alt="اقامت بلند مدت"
                className="BannerImag BorderImag"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <Box className="applypadding">
              <img
                src="https://i.ibb.co/xCzVfmk/summer.png"
                alt="مناسب فصل تابستان"
                className="BannerImag BorderImag"
              />
            </Box>
            <Box className="applypadding">
              <img
                src="https://s3gw.at.shab.cloud/production/banners/drzARrMsa6DCa1lTW5auLKSuErVLqwvXDAdc1wqf.png"
                alt="رایگان میزبان شوید"
                className="BannerImag BorderImag"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <UnderTopBanner />
    </Box>
  );
}
