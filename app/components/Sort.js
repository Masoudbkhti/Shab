import { Button, Link, Box, Typography } from "@mui/material";
export default function Sort() {
  const buttonStyle = {
    color: "black",
    borderRadius: "50px",
    paddingY: "10px",
    paddingX: "20px",
    "&:hover": { backgroundColor: "#F8F8FE" },
  };
  return (
    <Box
      sx={{
        width: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginY: "50px",
      }}
    >
      <Typography>مرتب سازی:</Typography>
      <Button sx={buttonStyle} href="/" component={Link}>
        محبوب‌ترین
      </Button>
      <Button sx={buttonStyle} href="/" component={Link}>
        ارزان‌ترین
      </Button>
      <Button sx={buttonStyle} href="/" component={Link}>
        گران‌ترین
      </Button>
      <Button sx={buttonStyle} href="/" component={Link}>
        بالاترین امتیاز
      </Button>
    </Box>
  );
}
