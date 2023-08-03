import {
  Container,
  Box,
  Typography,
  Grid,
  Divider,
  Paper,
  ListItem,
  List,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Rules() {
  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor:"#E6E7F2" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "Bold", marginTop: "20px" }}
        >
          قوانین
        </Typography>
        <Grid lg={1} spacing={5} sx={{ display: "flex", gap: "30px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%", marginBottom:"40px" }}>
            <Typography variant="body2" sx={{ marginTop: "20px" }}>
              کودکان 2 سال به بالا جزو نفرات محاسبه شده و از آن‌ها هزینه‌ی کامل
              دریافت می‌شود (تا 1 کودک مانعی ندارد).
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", color: "blue" }}
            >
              نمایش کمتر
            </Typography>
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
                  borderColor: "#E6E7F2",
                  width: "45%",
                  height: "75px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "Bold" }}>ساعت ورود</Typography>
                <Typography sx={{ color: "green" }}>
                  از ۱۴:۰۰ تا ۲۲:۰۰
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  border: 2,
                  borderColor: "#E6E7F2",
                  width: "45%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "Bold" }}>ساعت خروج</Typography>
                <Typography sx={{ color: "green" }}> تا ۲۲:۰۰</Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", marginTop: "20px", alignItems: "center" }}
            >
              <DoneIcon sx={{ color: "green" }} />
              <Typography variant="body2">امکان ورود حیوان خانگی</Typography>
            </Box>
            <Box
              sx={{ display: "flex", marginTop: "15px", alignItems: "center" }}
            >
              <CloseIcon sx={{ color: "red" }} />
              <Typography variant="body2">
                امکان برگزاری مراسم : نیازمند هماهنگی قبلی
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography>
                امکان برگزاری مراسم تا ظرفیت ۱۲ نفر مجاز است و 12 نفر امکان
                اقامت شبانه را دارند.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "Bold", marginTop: "20px" }}
              >
                مدارک مورد نیاز
              </Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "10px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ width: "10px", color: "black" }}
                  />
                  <Typography variant="body2">
                    کارت ملی هوشمند و مدرک محرمیت الزامی ست.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "10px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ width: "10px", color: "black" }}
                  />
                  <Typography variant="body2">
                  ارائه " 2 عدد کارت ملی هوشمند " الزامی است.
                  </Typography>
                </Box>
                {/* <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "10px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ width: "10px", color: "black" }}
                  />
                  <Typography variant="body2">
                    کارت ملی هوشمند و مدرک محرمیت الزامیست.
                  </Typography>
                </Box> */}
              </Box>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "Bold", marginTop: "10px" }}
              >
                شرایط کنسلی و لغو رزرو (سخت گیرانه)
              </Typography>
            </Box>
            <Box>
              <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "10px",
                  }}>
                <FiberManualRecordIcon sx={{ width: "10px", color: "black" }} />
                <Typography variant="body2">
                  تا قبل از 72 ساعت مانده به روز شروع اقامت
                </Typography>
              </Box>
              <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "10px",
                  }}>
                <FiberManualRecordIcon sx={{ width: "10px", color: "black" }} />
                <Typography variant="body2">
                  رزروهای مربوط به تعطیلات نوروز
                </Typography>
              </Box>
              <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "10px",
                  }}>
                <FiberManualRecordIcon sx={{ width: "10px", color: "black" }} />
                <Typography variant="body2">
                  کمتر از 72 ساعت مانده به شروع اقامت
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ color: "blue" }}>
              نمایش بیشتر
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}
