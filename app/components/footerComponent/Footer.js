import { Box, Typography } from "@mui/material";
import PermissionsFooter from "./PermissionsFooter";
import IntroductionFooter from "./IntroductionFooter";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          with: "100%",
          padding: { xs: "0 10px", sm: "0 5%" },
          paddingBottom: "40px",
        }}
      >
        <IntroductionFooter />
        <PermissionsFooter />
      </Box>
      <Box
        sx={{
          borderTop: "1px solid #e6e7f2",
          with: "100%",
          padding: { xs: "10px 10px", sm: "10px 5%" },
        }}
      >
        <Typography
          variant="body1"
          color="secondary"
          sx={{ fontSize: { xs: ".6rem", sm: ".9rem" } }}
        >
          تمامی حقوق این وب‌سایت متعلق به گروه 6 بوت کمپ ریکت دانشکار است
        </Typography>
      </Box>
    </>
  );
}
