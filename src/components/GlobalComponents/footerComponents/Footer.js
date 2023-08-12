import { Box, Typography } from "@mui/material";
import PermissionsFooter from "./PermissionsFooter";
import IntroductionFooter from "./IntroductionFooter";
 import style from "./../../../components/HousesComponents/HouseShow/house.module.css";
export default function Footer() {
  return (
    <>
      <Box
        bgcolor="primary.main"
        className={style.fixFooter}
        sx={{
          with: "100%",
          padding: { xs: "0 10px", sm: "0 5%" },
          paddingBottom: "40px",
          boxShadow: "0 -1px 2px 0 rgba(65, 86, 217,0.16)",
        }}
      >
        <IntroductionFooter />
        <PermissionsFooter />
      </Box>
      <Box
        bgcolor="primary.main"
        sx={{
          borderTop: "1px solid #e6e7f2",
          with: "100%",
          padding: { xs: "10px 10px", sm: "10px 5%" },
        }}
      >
        <Typography
          variant="subtitle2"
          color="secondary"
          component="h6"
          sx={{ fontSize: { xs: ".6rem", sm: ".9rem" } }}
        >
          تمامی حقوق این وب‌سایت متعلق به گروه 6 بوت کمپ ریکت دانشکار است
        </Typography>
      </Box>
    </>
  );
}
