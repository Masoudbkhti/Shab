"use client";
import Image from "next/image";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import MoreModal from "./MoreModal";
export default function MoreBox({ fixMenu }) {
  const [OpenModal, setOpenModal] = useState(false);
  const handleClick = (event) => {
    setOpenModal(!OpenModal)
  };
  return (
    <>
      <Box
        bgcolor="#ffffff31"
        sx={{
          boxShadow: 2,
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
        }}
      >
        <Image
          src="/../public/assets/images/userIcon.png"
          width={36}
          height={36}
          alt="Picture of user icon"
          style={{ margin: "2px" }}
        />
        <MoreVertOutlinedIcon
          color="primary"
          sx={{ marginLeft: "10px" }}
          onClick={handleClick}
          style={{ color: fixMenu }}
          // aria-describedby={id}
        />
        {/* <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 64, left: 60 }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box >
            <MoreModal ></MoreModal>
          </Box>
        </Popover> */}
        {/* <Box>
          <MoreModal></MoreModal>
        </Box> */}
        {OpenModal && <MoreModal/>}
      </Box>
    </>
  );
}

