import { Container, Box, Typography, Divider } from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";

export default function Rules({data}) {
  return (
    <Container>
      <Divider component="div" role="presentation">
        <Typography variant="h2">قوانین</Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
              کودکان 2 سال به بالا جزو نفرات محاسبه شده و از آن‌ها هزینه‌ی کامل
              دریافت می‌شود (تا 1 کودک مانعی ندارد).
            </Typography>
            <Typography>نمایش کمتر</Typography>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  border: 1,
                  borderColor: "grey.500",
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
                  border: 1,
                  borderColor: "grey.500",
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
            <Box><Typography>مدارک مورد نیاز</Typography></Box>
            <Box></Box>
            <Box><Typography>شرایط کنسلی و لغو رزرو (سخت گیرانه)</Typography></Box>
            <Box></Box>
          </Box>
        </Box>
      </Divider>
    </Container>
  );
}
