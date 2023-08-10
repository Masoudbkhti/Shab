import { Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const RuelsPass =
  " مهمانان عزیز، لطفا در نظر داشته باشید تمامی واحد ها مشابه یکدیگر هستند تنها فرقی که واحد ها با یکدیگر دارند، رنگ مبلمانشون میباشد. ممکن است در زمان تحویل واحد دیگری در این مجموعه با همین مشخصات فقط با طرح مبلمان متفاوت به شما تحویل داده شود";

export default function Rules() {
  return (
    <Box id="rules">
      <Box sx={{ borderBottom: 1, borderColor: "#E6E7F2" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "Bold", marginTop: "20px" }}
        >
          قوانین
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
            gap: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
              },
              marginBottom: "40px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ marginTop: "20px", lineHeight: "2.08" }}
            >
              {RuelsPass}
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
                امکان برگزاری مراسم تا ظرفیت ۱۲ نفر مجاز است و ۱۲ نفر امکان
                اقامت شبانه را دارند.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
              },
            }}
          >
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
                    sx={{ width: "8px", color: "black" }}
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
                    sx={{ width: "8px", color: "black" }}
                  />
                  <Typography variant="body2">
                    ارائه " 2 عدد کارت ملی هوشمند " الزامی است.
                  </Typography>
                </Box>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                <FiberManualRecordIcon sx={{ width: "8px", color: "black" }} />
                <Typography variant="body2" sx={{ lineHeight: "2.08" }}>
                  تا قبل از 72 ساعت مانده به روز شروع اقامت
                  <br />
                  کسر 20٪ از مبلغ کل رزرو و بازگشت باقی‌مانده مبلغ
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                <FiberManualRecordIcon sx={{ width: "8px", color: "black" }} />
                <Typography variant="body2" sx={{ lineHeight: "2.08" }}>
                  کمتر از 72 ساعت مانده به شروع اقامت
                  <br />
                  کسر مبلغ شب اول + 20% از مابقی مبلغ رزرو به عنوان خسارت
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                <FiberManualRecordIcon sx={{ width: "8px", color: "black" }} />
                <Typography variant="body2" sx={{ lineHeight: "2.08" }}>
                  روز شروع اقامت کسر مبلغ 2 شب اول رزرو به عنوان خسارت + 20% از
                  مابقی مبلغ رزرو به عنوان خسارت
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                <FiberManualRecordIcon sx={{ width: "8px", color: "black" }} />
                <Typography variant="body2" sx={{ lineHeight: "2.08" }}>
                  در حین اقامت کسر مبلغ شب های اقامت داشته + مبلغ شب بعدی + 20%
                  از مابقی مبلغ رزرو به عنوان خسارت
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                <FiberManualRecordIcon sx={{ width: "8px", color: "black" }} />
                <Typography variant="body2" sx={{ lineHeight: "2.08" }}>
                  در ایام پیک (تعطیلات رسمی به غیر از تعطیلات نوروز): تا قبل از
                  ۷ روز به شروع اقامت کسر ۲۰٪ از کل مبلغ رزرو و کمتر از ۷ روز به
                  شروع اقامت کسر کل مبلغ به عنوان خسارت
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                <FiberManualRecordIcon sx={{ width: "8px", color: "black" }} />
                <Typography variant="body2" sx={{ lineHeight: "2.08" }}>
                  رزروهای بلند مدت (۱۴ روز به بالا): کسر مبلغ 5 شب اول + 20% از
                  مابقی مبلغ رزرو به عنوان خسارت محاسبه می‌شود
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                <FiberManualRecordIcon sx={{ width: "8px", color: "black" }} />
                <Typography variant="body2" sx={{ lineHeight: "2.08" }}>
                  رزروهای مربوط به تعطیلات نوروز:
                  <br />
                  قبل از 15 اسفند ماه: کسر 20% از کل مبلغ رزرو به عنوان خسارت
                  <br />
                  بعد از 15 اسفند ماه: کسر کل مبلغ رزرو به عنوان خسارت
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ color: "blue" }}>
              نمایش بیشتر
            </Typography>
            {/* <ShowMoreButton content={}/> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
