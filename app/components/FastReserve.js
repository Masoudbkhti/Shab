import { Box, Typography } from "@mui/material";

export default function FastReserve() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#eceefb",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: "75px",
        height: "25px",
      }}
    >
      <Typography
        variant="body2"
        component="body1"
        sx={{ color: "black", fontSize: "12px" }}
      >
        رزرو آنی
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: -11,
          right: -11,
          width: "20px",
          height: "20px",
          backgroundColor: "#ff9500",
          rotate: "45deg",
        }}
      />
    </Box>
  );
}
