import { Box, Typography } from "@mui/material";
export default function FormatListBulletedSharp() {
  return (
    <Box
      sx={{
        bgcolor: "#FF9100",
        width: "70px",
        height: "20px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body2"
        component="p"
        sx={{ color: "white", fontSize: "11px", fontWeight: "bold" }}
      >
        تحویل آنی
      </Typography>
    </Box>
  );
}
