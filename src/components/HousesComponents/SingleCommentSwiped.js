// "use client";
import { Box, Typography, Grid, Link } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SugestionModal from "./SugestionModal";

export default async function SingleCommentSwiped({
  name,
  date,
  title,
  description,
  answer,
}) {
  return (
    <Box
      sx={{
        borderBottom: { xs: 0, sm: 10 },
        border: { xs: 1, sm: 0 },
        borderRadius: { xs: "15px", sm: "0" },
        borderColor: { xs: "#E6E7F2", sm: "none" },
        // bgcolor: "#CBCFD4",
        marginBottom: "30px",
        minWidth: { xs: "220px", sm: "100%" },
        height: { xs: "220px", sm: "auto" },
        padding: { xs: "16px", sm: "0" },
      }}
    >
      <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <img
            src="https://www.shab.ir/img/user-default.png"
            alt="پروفایل کاربر"
            className="ProfilePic"
          />
        </Box>
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
            <Typography sx={{ marginTop: "10px" }}>{name}</Typography>
            <Typography
              sx={{
                marginTop: "10px",
                display: { xs: "none", sm: "flex" },
              }}
            >
              {date}
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
        <Typography variant="body1" sx={{ color: "#21D93F" }}>
          {title}
        </Typography>
      </Box>
      <Typography
        variant="subtitle2"
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
        <Typography variant="subtitle2">چشم انداز زیبا</Typography>
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
        <Typography variant="subtitle2">سکوت و آرامش محیط اقامتگاه</Typography>
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
        <Typography variant="subtitle2">دکوراسیون عالی و زیبا</Typography>
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
        <Typography variant="subtitle2">امنیت اقامتگاه</Typography>
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: "bold",
          marginTop: "25px",
          color: "#404040",
          lineHeight: "2.08",
          display: { xs: "none", sm: "block" },
        }}
      >
        {description}
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        sx={{
          fontWeight: "bold",
          marginTop: "25px",
          color: "#404040",
          lineHeight: "2.08",
          display: { xs: "block", sm: "none" },
        }}
      >
        {description.substring(0, 30) + "..."}
      </Typography>
      {answer && (
        <Box
          sx={{
            marginRight: "30px",
            marginTop: "15px",
            borderRight: 2,
            borderColor: "#E6E7F2",
            paddingRight: "30px",
            display: { xs: "none", sm: "flex" },
            flexDirection: { xs: "none", sm: "column" },
          }}
        >
          <Typography
            variant="subtitle2"
            component="p"
            sx={{ fontWeight: "bold" }}
          >
            پاسخ میزبان:
          </Typography>

          <Typography
            variant="subtitle2"
            component="p"
            sx={{ marginTop: "15px" }}
          >
            {answer}
          </Typography>

          <Typography
            sx={{ marginTop: "10px", marginBottom: "50px" }}
            variant="body2"
          >
            ۱۴۰۲/۰۴/۲۱ ۱۳:۲۷
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
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
          {date}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#080A1A", cursor: "pointer" }}
          >
            نمایش بیشتر
          </Typography>
          <ArrowBackIosNewIcon sx={{ width: "16px", marginRight: "5px" }} />
        </Box>
      </Box>
    </Box>
  );
}
