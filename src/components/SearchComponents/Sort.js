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
          width: "40%",
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
          width: { lg: "40%", md: "40%" },
          display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          marginY: "50px",
        }}
      >
        <Typography
          variant="subtitle1"
          component="body1"
          sx={{ width: "100px" }}
        >
          مرتب سازی:
        </Typography>
        <Link
          href={{
            query: { sortBy: "5" },
          }}
        >
          <Button sx={buttonStyle}>
            <Typography
              variant="subtitle1"
              component="body1"
              sx={{ width: "100px" }}
            >
              محبوب‌ترین
            </Typography>
          </Button>
        </Link>
        <Link href={{ query: { sortBy: "3" } }}>
          <Button sx={buttonStyle}>
            <Typography
              variant="subtitle1"
              component="body1"
              sx={{ width: "100px" }}
            >
              ارزان‌ترین
            </Typography>
          </Button>
        </Link>
        <Link href={{ query: { sortBy: "2" } }}>
          <Button sx={buttonStyle}>
            <Typography
              variant="subtitle1"
              component="body1"
              sx={{ width: "100px" }}
            >
              گران‌ترین
            </Typography>
          </Button>
        </Link>
        <Link href={{ query: { sortBy: "4" } }}>
          <Button sx={buttonStyle}>
            <Typography
              variant="subtitle1"
              component="body1"
              sx={{ width: "100px" }}
            >
              بالاترین امتیاز
            </Typography>
          </Button>
        </Link>
      </Box>
    </>
  );
}
