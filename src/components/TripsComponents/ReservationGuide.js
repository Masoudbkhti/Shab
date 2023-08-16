"use client";
import { Box, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { useCallback, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  borderRadius: { xs: "0", sm: "20px" },
  py: { xs: 4, sm: 6, md: 14 },
  px: 4,
};
export default function ReservationGuide() {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true),[]);
  const handleClose = useCallback(() => setOpen(false),[]);
  return (
    <>
      <Button onClick={handleOpen} sx={{ width: "100%" }}>
        <Box
          bgcolor="primary.main"
          sx={{
            width: { xs: "100%", sm: "580px" },
            borderRadius: "80px",
            padding: "10px 20px",
            marginBottom: "40px",
            border: "1px solid rgb(230, 231, 242)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <Typography variant="subtitle2" component="h6" color="info.main">
            راهنمای رزرو
          </Typography>
          <HelpIcon color="info" sx={{ fontSize: "18px" }} />
        </Box>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            نیاز به راهنمایی دارم
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            id="modal-modal-description"
            sx={{ mt: 2 }}
            color="secondary.light"
          >
            در صورتی که نیاز به آموزش جهت استفاده از کارکرد وبسایت شب دارید،
            پیشنهاد ما بازدید از صفحه‌ی راهنمای استفاده است. در صورتی که مشکل
            شما برطرف نشد، می توانید از گفتگوی آنلاین وبسایت و یا دکمه با من
            تماس بگیرید زیر استفاده کنید.
          </Typography>
          <Box
            bgcolor="info.main"
            sx={{
              cursor: "pointer",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              margin: "40px 0 24px 0",
            }}
          >
            <Typography variant="subtitle2" component="p" color="primary">
              ورود به صفحه راهنمای استفاده
            </Typography>
          </Box>
          <Box
            bgcolor="#F4F5FF"
            sx={{
              cursor: "pointer",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              marginBottom: "40px",
            }}
          >
            <Typography variant="subtitle2" component="p" color="info.main">
              با شماره همراه من تماس بگیرید
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
