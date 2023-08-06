import { Box, Container, Rating, Typography, Grid } from "@mui/material";

export default function CommentRate() {
  return (
    <Box sx={{ marginTop: "5px", marginBottom: "10px", paddingTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          ۴/۶۸
        </Typography>
        <Rating
          name="read-only"
          value={3.5}
          readOnly
          sx={{ color: "#4156D9" }}
          className="CommentRating"
        />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          |
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          ۴۰ نظر
        </Typography>
      </Box>
      <Grid
        lg={1}
        spacing={5}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // gap: "50px",
              marginTop: "15px",
            }}
          >
            <Typography>مسیر و دسترسی</Typography>
            <Rating
              name="read-only"
              value={3.5}
              readOnly
              sx={{ color: "#4156D9" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "50px",
              marginTop: "15px",
            }}
          >
            <Typography>تطابق با صفحه آگهی</Typography>
            <Rating
              name="read-only"
              value={3.5}
              readOnly
              sx={{ color: "#4156D9" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // gap: "100px",
              marginTop: "15px",
            }}
          >
            <Typography>نظافت</Typography>
            <Rating
              name="read-only"
              value={3.5}
              readOnly
              sx={{ color: "#4156D9" }}
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // gap: "50px",
              marginTop: "15px",
            }}
          >
            <Typography>همسایگی</Typography>
            <Rating
              name="read-only"
              value={3.5}
              readOnly
              sx={{ color: "#4156D9" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "50px",
              marginTop: "15px",
            }}
          >
            <Typography>ارزش، نسبت به قیمت</Typography>
            <Rating
              name="read-only"
              value={3.5}
              readOnly
              sx={{ color: "#4156D9" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // gap: "100px",
              marginTop: "15px",
            }}
          >
            <Typography>کیفیت میزبانی</Typography>
            <Rating
              name="read-only"
              value={3.5}
              readOnly
              sx={{ color: "#4156D9" }}
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
