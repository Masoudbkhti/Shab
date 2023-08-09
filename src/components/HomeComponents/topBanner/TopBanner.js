import { Container, Box, Paper, Typography } from "@mui/material";

export default function TopBanner() {
  const iconStyle = { marginTop: "15px", fontWeight: "bold", textAlign:"center" };
  return (
    <Box sx={{
      width: { xs: "95%", sm: "80%", md: "70%" },
      margin: "30px auto",
    }}>
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
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          // justifyContent: "space-around",
          gap:"140px",
          // marginTop: "20px",
          margin:"20px 0 0 0",
          borderRadius: "8px",
          padding: "20px",
          // overflowY:"hidden",
          overflowX:"scroll"
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            width:"300px"
            // justifyContent: "space-between",
          }}
        >
          <Container
            sx={{
              width: "90px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="https://www.shab.ir/images/product/insurance.svg?w=96&q=75" />
          </Container>
          <Typography sx={iconStyle} variant="body1">
            بیمه رایگان اقامت
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            // justifyContent: "space-between",
            marginTop: "20px",
            width:"300px"
          }}
        >
          <Container
            sx={{
              width: "90px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="https://www.shab.ir/images/product/discussion.svg?w=48&q=75" />
          </Container>
          <Typography sx={iconStyle} variant="body1">
            گفت‌وگو با میزبان پیش از پرداخت
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            // justifyContent: "space-between",
            marginTop: "20px",
            width:"300px"
          }}
        >
          <Container
            sx={{
              width: "90px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="https://www.shab.ir/images/product/clean-house.svg?w=48&q=75" />
          </Container>
          <Typography sx={iconStyle} variant="body1">
            تضمین نظافت اقامتگاه
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            // justifyContent: "space-between",
            marginTop: "20px",
            width:"300px"
          }}
        >
          <Container
            sx={{
              width: "90px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="https://www.shab.ir/images/product/customer-service.svg?w=96&q=75"
              sx={{ width: "100%", height: "100%" }}
            />
          </Container>
          <Typography sx={iconStyle} variant="body1">
            پشتیبانی تا پایان سفر
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
