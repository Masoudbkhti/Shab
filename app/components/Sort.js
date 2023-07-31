import { Box, Typography } from "@mui/material";
export default function Sort() {
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        marginY: "50px",
      }}
    >
      <Typography>مرتب سازی</Typography>
      <Typography>محبوب‌ترین</Typography>
      <Typography>ارزان‌ترین</Typography>
      <Typography>گران‌ترین</Typography>
      <Typography>بالاترین امتیاز</Typography>
    </Box>
  );
}
