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
        <Typography variant="h6" component="h6" color="secondary">
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
        <Typography variant="h6" component="h6" color="secondary">
          ۴۰ نظر
        </Typography>
      </Box>
      <Grid
        lg={1}
        spacing={5}
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
        }}
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
            <Typography
              variant="h6"
              component="h6"
              color="#404040"
              fontWeight="400"
            >
              مسیر و دسترسی
            </Typography>
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
            <Typography
              variant="h6"
              component="h6"
              color="#404040"
              fontWeight="400"
            >
              تطابق با صفحه آگهی
            </Typography>
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
            <Typography
              variant="h6"
              component="h6"
              color="#404040"
              fontWeight="400"
            >
              نظافت
            </Typography>
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
            <Typography
              variant="h6"
              component="h6"
              color="#404040"
              fontWeight="400"
            >
              همسایگی
            </Typography>
            <Rating
              name="read-only"
              value={5}
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
            <Typography
              variant="h6"
              component="h6"
              color="#404040"
              fontWeight="400"
            >
              ارزش، نسبت به قیمت
            </Typography>
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
            <Typography
              variant="h6"
              component="h6"
              color="#404040"
              fontWeight="400"
            >
              کیفیت میزبانی
            </Typography>
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
