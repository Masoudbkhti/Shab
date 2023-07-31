import { Container, Box, Paper, Typography } from "@mui/material";
export default function UnderTopBanner() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop:"20px"
            // justifyContent: "space-between",
          }}
        >
          <Container
            sx={{ width: "80px", height:"80px" }}
          >
            <img src="https://www.shab.ir/images/product/insurance.svg?w=96&q=75" />
          </Container>
          <Typography
            variant="body"
          >
            بیمه رایگان اقامت
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            marginTop:"20px"
          }}
        >
          <Container sx={{ width: "80px", height:"80px" }}>
            <img src="https://www.shab.ir/images/product/discussion.svg?w=48&q=75" />
          </Container>
          <Typography variant="body">
            گفت‌وگو با میزبان پیش از پرداخت
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            marginTop:"20px"
          }}
        >
          <Container sx={{ width: "80px", height:"80px" }}>
            <img src="https://www.shab.ir/images/product/clean-house.svg?w=48&q=75" />
          </Container>
          <Typography variant="body">تضمین نظافت اقامتگاه</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            marginTop:"20px"
          }}
        >
          <Container sx={{ width: "80px", height:"80px" }}>
            <img src="https://www.shab.ir/images/product/customer-service.svg?w=96&q=75" sx={{width:"100%", height:"100%"}}/>
          </Container>
          <Typography variant="body">پشتیبانی تا پایان سفر</Typography>
        </Box>
      </Box>
    </Container>
  );
}
