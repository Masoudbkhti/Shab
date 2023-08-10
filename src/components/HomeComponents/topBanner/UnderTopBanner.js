import { Container, Box, Paper, Typography } from "@mui/material";
export default function UnderTopBanner() {
  const iconStyle = { marginTop: "5px", fontWeight: "bold", textAlign:"center", width:"180px" };
  return (
    <Paper
        elevation={1}
        sx={{
          display: "flex",
          gap:"140px",
          margin:"20px 0 0 0",
          borderRadius: "8px",
          padding: "10px",
          overflowX:"scroll",
          '&::-webkit-scrollbar': {display: "none"}
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // marginTop: "20px",
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
            // marginTop: "20px",
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
            // marginTop: "20px",
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
            // marginTop: "20px",
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
  );
}
