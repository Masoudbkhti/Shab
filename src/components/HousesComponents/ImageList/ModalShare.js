"use client"
import React, { useState } from 'react'
import IosShareIcon from '@mui/icons-material/IosShare';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from "@mui/icons-material/Close";
import Modal from '@mui/material/Modal';
import { BorderBottom } from '@mui/icons-material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border :"none",
  outline :"none",
  borderRadius :"12px",
  py: 4,
};

export default function ModalShare() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IosShareIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              borderBottom: "1px solid #E6E7F2",
              padding: "0px 36px 16px 36px",
            }}
          >
            <CloseIcon color="secondary" sx={{ marginLeft: "70px" }} />
            <Typography
              id="modal-modal-description"
              variant="body1"
              component="h4"
            >
              اشتراک گذاری اقامتگاه
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",

              padding: "24px 24px 16px 24px",
            }}
          >
            <Typography
              id="modal-modal-description"
              variant="body1"
              component="h4"
            >
              این اقامتگاه را با دوستان خود به اشتراک بگذارید
            </Typography>
            <Box>

            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}