import { Button, Box, Typography } from "@mui/material";
import Link from "next/link";
import SortXs from "./SortXs";
export default function Sort() {
  const buttonStyle = {
    color: "secondary.main",
    borderRadius: "50px",
    paddingY: "10px",
    width: "100px",
    "&:hover": { backgroundColor: "#F8F8FE" },
    "&:active": { color: "primary" },
  };

  return (
    <>
      <Box
        sx={{
          width: "60%",
          display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          marginY: "50px",
        }}
      >
        <SortXs />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          alignItems: "center",
          gap: "8px",
          marginY: "50px",
        }}
      >
        <Typography variant="body1" component="body1">
          مرتب سازی:
        </Typography>
        <Link
          href={{
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
    </>
  );
}
