import { Box, Typography } from "@mui/material";

export default function PickTime() {
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
        ایام پیک
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: -11,
          right: -11,
          width: "20px",
          height: "20px",
          backgroundColor: "#d92032",
          rotate: "-45deg",
        }}
      />
    </Box>
  );
}
