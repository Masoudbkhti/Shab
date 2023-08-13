"use client";
import { Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ShowMoreLess from "./ShowMoreLess";
import { useState } from "react";

const RuelsPassInitial =
  "از پذیرش آقایان مجرد معذوریم.ورود افراد مجرد که برای سازمانها و ارگانهای مختلف سفر کاری می روند و تاجرین محترم بلامانع است. (لطفا قبل از رزرو هماهنگ کنید.)کودکان بالای ۳ سال در تعداد نفرات محاسبه می گردند.کشیدن قلیان داخل واحد ممنوع است.";

export default function Rules() {
  const [showMore, setShowMore] = useState(false);
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "#E6E7F2" }} id="rules">
        <Typography
          variant="h3"
          component="h3"
          color="secondary"
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
              marginBottom: "10px",
            }}
          >
            <Box
              variant="subtitle2"
              component="p"
              color="secondary"
              sx={{ marginTop: "20px" }}
            >
              <ShowMoreLess text={RuelsPassInitial} />
            </Box>

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
                <Typography variant="subtitle1" component="p" color="secondary">
                  ساعت ورود
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ color: "green" }}
                >
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
                <Typography variant="subtitle1" component="p" color="secondary">
                  ساعت خروج
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ color: "green" }}
                >
                  {" "}
                  تا ۲۲:۰۰
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", marginTop: "20px", alignItems: "center" }}
            >
              <DoneIcon sx={{ color: "green" }} />
              <Typography variant="subtitle2" component="p" color="secondary">
                امکان ورود حیوان خانگی
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", marginTop: "15px", alignItems: "center" }}
            >
              <CloseIcon sx={{ color: "red" }} />
              <Typography variant="subtitle2" component="p" color="secondary">
                امکان برگزاری مراسم : نیازمند هماهنگی قبلی
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography variant="subtitle2" component="p" color="secondary">
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
                variant="h5"
                component="h5"
                color="secondary"
                sx={{ fontWeight: "400", marginTop: "20px" }}
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
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                  >
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
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                  >
                    ارائه " 2 عدد کارت ملی هوشمند " الزامی است.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h5"
                component="h5"
                color="secondary"
                sx={{ fontWeight: "400", marginTop: "10px" }}
              >
                شرایط کنسلی و لغو رزرو (سخت گیرانه)
              </Typography>
            </Box>
            {showMore ? (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    gap: "5px",
                    marginTop: "10px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ width: "8px", color: "black" }}
                  />
                  <Box>
                    <Typography
                      sx={{ lineHeight: "2.08" }}
                      variant="subtitle2"
                      component="p"
                      color="secondary"
                    >
                      تا قبل از 72 ساعت مانده به روز شروع اقامت کسر 20٪ از مبلغ
                      کل
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      color="secondary"
                      sx={{ lineHeight: "2.08" }}
                    >
                      رزرو و بازگشت باقی‌مانده مبلغ
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    gap: "5px",
                    marginTop: "10px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ width: "8px", color: "black" }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      color="secondary"
                      sx={{ lineHeight: "2.08" }}
                    >
                      کمتر از 72 ساعت مانده به شروع اقامت
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      color="secondary"
                      sx={{ lineHeight: "2.08" }}
                    >
                      کسر مبلغ شب اول + 20% از مابقی مبلغ رزرو به عنوان خسارت
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    gap: "5px",
                    marginTop: "10px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ width: "8px", color: "black" }}
                  />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                    sx={{ lineHeight: "2.08" }}
                  >
                    روز شروع اقامت کسر مبلغ 2 شب اول رزرو به عنوان خسارت + 20%
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
                  <FiberManualRecordIcon
                    sx={{ width: "8px", color: "black" }}
                  />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                    sx={{ lineHeight: "2.08" }}
                  >
                    در حین اقامت کسر مبلغ شب های اقامت داشته + مبلغ شب بعدی +
                    20% از مابقی مبلغ رزرو به عنوان خسارت
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
                  <FiberManualRecordIcon
                    sx={{ width: "8px", color: "black" }}
                  />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                    sx={{ lineHeight: "2.08" }}
                  >
                    در ایام پیک (تعطیلات رسمی به غیر از تعطیلات نوروز): تا قبل
                    از ۷ روز به شروع اقامت کسر ۲۰٪ از کل مبلغ رزرو و کمتر از ۷
                    روز به شروع اقامت کسر کل مبلغ به عنوان خسارت
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
                  <FiberManualRecordIcon
                    sx={{ width: "8px", color: "black" }}
                  />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                    sx={{ lineHeight: "2.08" }}
                  >
                    رزروهای بلند مدت (۱۴ روز به بالا): کسر مبلغ 5 شب اول + 20%
                    از مابقی مبلغ رزرو به عنوان خسارت محاسبه می‌شود
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
                  <FiberManualRecordIcon
                    sx={{ width: "8px", color: "black" }}
                  />
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                    sx={{ lineHeight: "2.08" }}
                  >
                    رزروهای مربوط به تعطیلات نوروز:
                    <br />
                    قبل از 15 اسفند ماه: کسر 20% از کل مبلغ رزرو به عنوان خسارت
                    <br />
                    بعد از 15 اسفند ماه: کسر کل مبلغ رزرو به عنوان خسارت
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "5px",
                  marginTop: "10px",
                }}
              >
                <FiberManualRecordIcon sx={{ width: "8px", color: "black" }} />
                <Box>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                    sx={{ lineHeight: "2.08" }}
                  >
                    تا قبل از 72 ساعت مانده به روز شروع اقامت
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                    sx={{ lineHeight: "2.08" }}
                  >
                    کسر 20٪ از مبلغ کل رزرو و بازگشت باقی‌مانده مبلغ
                  </Typography>
                </Box>
              </Box>
            )}
            <Typography
              variant="subtitle2"
              component="p"
              color="info.main"
              sx={{ margin: "20px 0 40px 0", cursor: "pointer" }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
