import {
  Container,
  Box,
  Typography,
  Grid,
  Divider,
  Paper,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export default function Rules({ data }) {
  return (
    <Container>
      <Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: "Bold", marginTop: "20px" }}
        >
          قوانین
        </Typography>
        {/* <Box sx={{ display: "flex" }}> */}
        <Grid lg={1} spacing={5} sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Typography sx={{ marginTop: "20px" }}>
              کودکان 2 سال به بالا جزو نفرات محاسبه شده و از آن‌ها هزینه‌ی کامل
              دریافت می‌شود (تا 1 کودک مانعی ندارد).
            </Typography>
            <Typography sx={{ marginTop: "20px" }}>نمایش کمتر</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  border: 2,
                  borderColor: "grey.500",
                  width: "45%",
                  height: "75px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>ساعت ورود</Typography>
                <Typography>از 14:00 تا 22:00</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  border: 2,
                  borderColor: "grey.500",
                  width: "45%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>ساعت ورود</Typography>
                <Typography> تا 22:00</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <DoneIcon color="primary" />
              <Typography>امکان ورود حیوان خانگی</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <DoneIcon color="primary" />
              <Typography>امکان ورود حیوان خانگی</Typography>
            </Box>
            <Box>
              <Typography>
                امکان برگزاری مراسم تا ظرفیت 12 نفر مجاز است و 12 نفر امکان
                اقامت شبانه را دارند.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography>مدارک مورد نیاز</Typography>
            </Box>
            <Box></Box>
            <Box>
              <Typography>شرایط کنسلی و لغو رزرو (سخت گیرانه)</Typography>
            </Box>
            <Box></Box>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}
