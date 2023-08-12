import { Box, Typography } from "@mui/material";
export default function UnderTopBannerNormal() {
  const iconStyle = {
    marginTop: "5px",
    marginBottom: "10px",
    fontWeight: "normal",
    textAlign: "center",
    width: "130px",
  };
  return (
    <Box
      elevation={1}
      sx={{
        display: "flex",
        // justifyContent:"space-evenly",
        // gap: { md: "10", lg: "15px" },
        width: "100%",
        // margin: "30px auto",
        padding: "15px",
        overflowX: { xs: "scroll", lg: "visible" },
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // marginTop: "20px",
          width: "300px",
          // justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "90px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="https://www.shab.ir/images/product/insurance.svg?w=96&q=75" />
        </Box>
        <Typography sx={iconStyle} variant="body1">
          بیمه رایگان اقامت
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "space-between",
          // marginTop: "20px",
          width: "300px",
        }}
      >
        <Box
          sx={{
            width: "90px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="https://www.shab.ir/images/product/discussion.svg?w=48&q=75" />
        </Box>
        <Typography sx={iconStyle} variant="body1">
          گفت‌وگو با میزبان پیش از پرداخت
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "space-between",
          // marginTop: "20px",
          width: "300px",
        }}
      >
        <Box
          sx={{
            width: "90px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="https://www.shab.ir/images/product/clean-house.svg?w=48&q=75" />
        </Box>
        <Typography sx={iconStyle} variant="body1">
          تضمین نظافت اقامتگاه
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "space-between",
          // marginTop: "20px",
          width: "300px",
        }}
      >
        <Box
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
        </Box>
        <Typography sx={iconStyle} variant="body1">
          پشتیبانی تا پایان سفر
        </Typography>
      </Box>
    </Box>
  );
}
