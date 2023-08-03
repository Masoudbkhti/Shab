import { getLocalData } from "@/json/lib/localdata";
import { Container, Box, Typography, Grid } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default async function SingleComment() {
  const data = await getLocalData();
  return (
    <Container>
      {data.comments.map((comment) => (
        <>
          <Box sx={{ borderTop: 1 }}>
            <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <img
                src="https://www.shab.ir/img/user-default.png"
                alt="پروفایل کاربر"
                className="ProfilePic"
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
                  <Typography>{comment.name}</Typography>
                  <Typography>تیر ۱۴۰۱</Typography>
                </Box>
                <Typography sx={{ border: 1, borderRadius: "" }}>
                  مهمان شب
                </Typography>
              </Grid>
            </Box>
            <Box sx={{ display: "flex" }}>
              <ThumbUpOffAltIcon sx={{ color: "#21D93F" }} />
              <Typography variant="body2" sx={{ color: "#21D93F" }}>
                توصیه میکنم
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ color: "#21D93F" }}>
                نقاط مثبت
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FiberManualRecordIcon sx={{ width: "10px", color: "#21D93F" }} />
              <Typography variant="body2">چشم انداز زیبا</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FiberManualRecordIcon sx={{ width: "10px", color: "#21D93F" }} />
              <Typography variant="body2">سکوت و آرامش محیط اقامتگاه</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FiberManualRecordIcon sx={{ width: "10px", color: "#21D93F" }} />
              <Typography variant="body2">دکوراسیون عالی و زیبا</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FiberManualRecordIcon sx={{ width: "10px", color: "#21D93F" }} />
              <Typography variant="body2">امنیت اقامتگاه</Typography>
            </Box>
          </Box>
        </>
      ))}
    </Container>
  );
}
