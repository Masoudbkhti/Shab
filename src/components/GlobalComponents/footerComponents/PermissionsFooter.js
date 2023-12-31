import { Box, Typography } from "@mui/material";
import React from "react";
const appInstall = [
  {
    id: 1,
    name: "bazar",
    srcImgApp:
      "https://www.shab.ir/_next/static/media/bazar.28ed391f.png?w=64&q=75",
  },
  {
    id: 2,
    name: "gplay",
    srcImgApp:
      "https://www.shab.ir/_next/static/media/gplay.562bf4cf.png?w=64&q=75",
  },
  {
    id: 3,
    name: "sib",
    srcImgApp:
      "https://www.shab.ir/_next/static/media/sib.e6731917.png?w=96&q=75",
  },
  {
    id: 4,
    name: "anardooni",
    srcImgApp:
      "https://www.shab.ir/_next/static/media/anardooni.de09c90f.png?w=96&q=75",
  },
];
export default function PermissionsFooter() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        paddingBottom: "24px",
      }}
    >
      <Box
        className="enama"
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: { xs: "30px", lg: "0" },
          width: {
            xs: "100%",
            lg: "38%",
          },
        }}
      >
        <Typography
          variant="h5"
          color="secondary"
          component="h5"
          sx={{ marginBottom: "16px" }}
        >
          با خیال راحت به ما اعتماد کنید
        </Typography>
        <Box sx={{ display: "flex" }}>
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://www.shab.ir/img/namad.png"
            alt="pic of namad"
          />
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://www.shab.ir/_next/static/media/enamad.eb6d4465.png?w=128&q=75"
            alt="pic of enamad"
          />
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://www.shab.ir/_next/static/media/samandehi.c822d4f0.png?w=128&q=75"
            alt="pic of samandehi"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: { xs: "30px", lg: "0" },

          width: {
            xs: "100%",
            lg: "38%",
          },
        }}
      >
        <Typography
          variant="h5"
          color="secondary"
          component="h6"
          sx={{ marginBottom: "16px" }}
        >
          از تخفیف‌ها و اخبار شب باخبر شوید
        </Typography>
        <input
          className="inputFooter"
          placeholder="آدرس ایمیل خود را وارد نمائید"
          style={{
            textAlign: "center",
            maxWidth: "340px",
            height: "40px",
            borderRadius: "20px",
            outline: "none",
            border: "1px solid #e6e7f2",
            marginBottom: "12px",
          }}
        />
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "340px",
            height: "40px",
            borderRadius: "20px",
            backgroundColor: "#4156d9",
            cursor: "pointer",
            outline: "none",
            border: "none",
          }}
        >
          <Typography variant="subtitle2" color="primary" component="h6">
            ثبت نام خبرنامه
          </Typography>
        </button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: {
            xs: "100%",
            lg: "24%",
          },
        }}
      >
        <Typography
          variant="h6"
          color="secondary"
          component="h6"
          sx={{ marginBottom: "12px" }}
        >
          دانلود اپلیکیشن
        </Typography>
        <Box
          sx={{
            width: "256px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {appInstall.map((app) => (
            <Box
              key={app.id}
              sx={{
                width: "120px",
                height: "50px",
                border: "1px solid #e6e7f2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                marginBottom: "12px",
                cursor: "pointer",
              }}
            >
              <img src={app.srcImgApp} alt={app.name} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
