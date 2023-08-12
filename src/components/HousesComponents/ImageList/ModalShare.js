"use client";
import React, { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import telegram from "./../../../assets/icons/telegram.png";
import whatsApp from "./../../../assets/icons/whatsApp.png";
import copyIcon from "./../../../assets/icons/copyIcon.png";
import moreIcon from "./../../../assets/icons/more.png";
import Image from "next/image";
import "./imagelist.css";

const socialMedia = [
  { id: 1, imgUrl: whatsApp, name: "واتساپ" },
  { id: 2, imgUrl: telegram, name: "تلگرام" },
  { id: 3, imgUrl: copyIcon, name: "کپی کردن لینک اقامتگاه" },
  { id: 4, imgUrl: moreIcon, name: "بیشتر" },
];
const style = {
  position: "absolute",
  bgcolor: "#fff",
  border: "none",
  outline: "none",
  pt: 4,
};

export default function ModalShare() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IosShareIcon onClick={handleOpen} sx={{ cursor: "pointer" }} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalShare">
          <Box
            sx={{
              display: "flex",
              width: "100%",
              borderBottom: "1px solid #E6E7F2",
              padding: "0px 36px 16px 36px",
            }}
          >
            <CloseIcon
              color="secondary"
              sx={{ marginLeft: "70px", cursor: "pointer" }}
              onClick={handleClose}
            />
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h6"
              color="secondary"
            >
              اشتراک گذاری اقامتگاه
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: "24px 24px 0 24px",
            }}
          >
            <Typography
              id="modal-modal-description"
              variant="subtitle2"
              component="p"
              color="secondary"
            >
              این اقامتگاه را با دوستان خود به اشتراک بگذارید
            </Typography>
            <Box className="boxSocialShare">
              {socialMedia.map((social) => (
                <Box className="socialModalWrapper">
                  <Box
                    className="socialModalShare"
                    sx={{
                      padding: "16px 0",
                      display: "flex",
                      alignItmes: "center",
                    }}
                  >
                    <Image
                      src={social.imgUrl}
                      style={{ marginLeft: "12px" }}
                      width={24}
                      height={24}
                    />
                    <Typography
                      variant="subtitle2"
                      component="p"
                      color="secondary"
                    >
                      {social.name}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
