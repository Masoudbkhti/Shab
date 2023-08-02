import { Button, Box, Typography } from "@mui/material";
import Link from "next/link";
export default function Sort() {
  const buttonStyle = {
    color: "black",
    borderRadius: "50px",
    paddingY: "10px",
    paddingX: "20px",
    "&:hover": { backgroundColor: "#F8F8FE" },
    "&:active": { color: "primary" },
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
      <Link
        href={{
          pathname: "/search",
          query: { sortBy: "5" },
        }}
      >
        <Button sx={buttonStyle}>محبوب‌ترین</Button>
      </Link>
      <Link href={{ query: { sortBy: "3" } }}>
        <Button sx={buttonStyle}>ارزان‌ترین</Button>
      </Link>
      <Link href={{ query: { sortBy: "2" } }}>
        <Button sx={buttonStyle}>گران‌ترین</Button>
      </Link>
      <Link href={{ query: { sortBy: "4" } }}>
        <Button sx={buttonStyle}>بالاترین امتیاز</Button>
      </Link>
    </Box>
  );
}
