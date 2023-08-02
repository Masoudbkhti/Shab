import {
  Container,
  Box,
  Grid,
  Paper,
  Typography,
  
} from "@mui/material";
export default function TopBanner() {
  const iconStyle= {marginTop: "15px", fontWeight: "bold"}
  // const ImagHover = {
  //   boxShadow:3,
  //   "&:hover":{
  //     transform: scale(1.3),
  //     color:"black"
  //   }
  // }
  return (
    <Container
      sx={
        {
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // flexDirection: "column",
        }
      }
    >
      <Box
        sx={{
          display: "flex",
          marginTop: "50px",
          gap: "15px",
          // bgcolor: "green",
        }}
      >
        <Box
          sx={{
            borderRadius: "15px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // bgcolor: "red",
            // height: "100%",
            // width: "",
          }}
        >
          <img
            sx={{ width: "100%", height: "100%"}}
            src="https://s3gw.at.shab.cloud/production/banners/TC9oLBJbdPSPwlsXE2GCfojnATeadoInWREliWcr.png"
            alt="تضمین قیمت"
            className="BannerImag"
          />
        </Box>
        <Box>
          <Grid
            lg={1}
            spacing={5}
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              justifyContent: "center",
              height:"100%",
              // width:"100%"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                // gap: "15px",
                // bgcolor: "blue",
                height: "100%",
                // width:"100%",
              }
            }

            >
              <img
                src="https://s3gw.at.shab.cloud/production/banners/6wuOKTYwf2EW62MBZoWCC29JUlyju4rHdlbXhoSB.png"
                alt="اقامت بلند مدت"
                className="BannerImag"
              />
              <img
                src="https://s3gw.at.shab.cloud/production/banners/BLwDKLIwX9sQS3KF4AKAmVxmxhvDN1yamDv5QVCj.png"
                alt="اقامتگاه رزرو آنی"
                className="BannerImag"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                // width:"20%"
                // bgcolor: "yellow",
              }}
            >
              <img
                  src="https://i.ibb.co/xCzVfmk/summer.png"
                  // src="https://imgtr.ee/images/2023/07/31/7b3be10dbecdf59efd1828575417c381.png"
                  alt="مناسب فصل تابستان"
                  className="BannerImag BorderImag"
                />
              <img
                src="https://s3gw.at.shab.cloud/production/banners/drzARrMsa6DCa1lTW5auLKSuErVLqwvXDAdc1wqf.png"
                alt="رایگان میزبان شوید"
                className="BannerImag"
              />
            </Box>
          </Grid>
        </Box>
      </Box>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
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
          <Typography
            sx={iconStyle}
            variant="body1"
          >
            بیمه رایگان اقامت
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            marginTop: "20px",
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
          <Typography
            sx={iconStyle}
            variant="body1"
          >
            گفت‌وگو با میزبان پیش از پرداخت
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            marginTop: "20px",
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
          <Typography
            sx={iconStyle}
            variant="body1"
          >
            تضمین نظافت اقامتگاه
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            marginTop: "20px",
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
          <Typography
            sx={iconStyle}
            variant="body1"
          >
            پشتیبانی تا پایان سفر
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
