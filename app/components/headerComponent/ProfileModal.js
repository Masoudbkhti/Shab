import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import Link from "next/link";
export default function ProfileModal() {
  return (
    <Stack
      spacing={2}
      width={230}
      padding={2}
      sx={{
        zIndex: "",
        boxShadow: 2,
        position: "fixed",
        top: "66px",
        borderRadius: "30px",
        left: "40px",
        backgroundColor: "white",
        cursor: "auto",
      }}
    >
      <Box mb={1} sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/../public/assets/images/userIcon.png"
          width={44}
          height={44}
          alt="Picture of user icon"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingRight: "16px",
          }}
        >
          <Typography variant="body1" component="h2" color="initial">
            مهمان
          </Typography>
          <Typography variant="caption" component="h2" color="secondary">
            اعتبار حساب : 0 تومان
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <BookmarkBorderRoundedIcon
          sx={{
            color: "secondary.light",
          }}
        />
        <Typography variant="caption" component="h2" color="secondary" pr={1}>
          <Link href="/bookmarks">علاقه مندی ها</Link>
        </Typography>
      </Box>
    </Stack>
  );
}
