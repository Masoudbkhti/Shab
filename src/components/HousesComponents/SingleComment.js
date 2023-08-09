import { getLocalData } from "@/json/lib/localdata";
import { Box, Typography, Grid } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import UnderTopBanner from "../HomeComponents/topBanner/UnderTopBanner";

export default async function SingleComment({ data }) {
  const commentdata = await getLocalData();
  const filteredData = commentdata.comments.filter(
    (item) => item.resid === data.id
  );
  return (
    <Box>
      {filteredData.map((comment) => (
        <>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "#E6E7F2",
              marginBottom: "30px",
            }}
          >
            <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <img
                src="https://www.shab.ir/img/user-default.png"
                alt="پروفایل کاربر"
                className="ProfilePic"
                sx={{ display: { xs: "none", sm: "flex" } }}
              />
              <Grid
                lg={1}
                spacing={5}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  //   border: 5,
                  width: "100%",
                }}
              >
                <Box>
                  <Typography sx={{ marginTop: "10px" }}>
                    {comment.name}
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    {comment.date}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    border: 0,
                    borderRadius: "69px",
                    borderColor: "",
                    bgcolor: "#F3F3F3",
                    width: "80px",
                    height: "30px",
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  مهمان شب
                </Typography>
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                gap: "10px",
              }}
            >
              <ThumbUpOffAltIcon sx={{ color: "#21D93F" }} />
              <Typography variant="body2" sx={{ color: "#21D93F" }}>
                {comment.title}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#21D93F",
                marginTop: "10px",
                display: { xs: "none", sm: "flex" },
              }}
            >
              نقاط مثبت
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: "5px",
                marginTop: "15px",
              }}
            >
              <FiberManualRecordIcon sx={{ width: "10px", color: "#21D93F" }} />
              <Typography variant="body2">چشم انداز زیبا</Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <FiberManualRecordIcon sx={{ width: "10px", color: "#21D93F" }} />
              <Typography variant="body2">
                سکوت و آرامش محیط اقامتگاه
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <FiberManualRecordIcon sx={{ width: "10px", color: "#21D93F" }} />
              <Typography variant="body2">دکوراسیون عالی و زیبا</Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <FiberManualRecordIcon sx={{ width: "10px", color: "#21D93F" }} />
              <Typography variant="body2">امنیت اقامتگاه</Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                marginTop: "25px",
                color: "#404040",
                lineHeight: "2.08",
              }}
            >
              {comment.description}
            </Typography>
            <Box
              sx={{
                marginRight: "30px",
                marginTop: "15px",
                borderRight: 2,
                borderColor: "#E6E7F2",
                paddingRight: "30px",
                display: { xs: "none", sm: "flex" },
                flexDirection:{ xs: "none", sm: "column" },
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                پاسخ میزبان:
              </Typography>
              <Typography sx={{ marginTop: "15px" }}>
                خوشحالم که راضی بودین و ممنون از ثبت نظرتون.
              </Typography>
              <Typography
                sx={{ marginTop: "10px", marginBottom: "50px" }}
                variant="body2"
              >
                ۱۴۰۲/۰۴/۲۱ ۱۳:۲۷
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "50px",
                marginBottom:"20px"
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#808080",
                }}
              >
                {comment.date}
              </Typography>
              <Typography>نمایش بیشتر</Typography>
            </Box>
          </Box>
        </>
      ))}
      <UnderTopBanner />
    </Box>
  );
}
