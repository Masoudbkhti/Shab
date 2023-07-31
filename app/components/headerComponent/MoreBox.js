"use client";
import Image from "next/image";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Box} from "@mui/material";
import { useState } from "react";
import MoreModal from "./MoreModal";
export default function MoreBox({ fixMenu , children}) {
  const [OpenModal, setOpenModal] = useState(false);
  const handleClick = () => {
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
        />
        {OpenModal && children}
      </Box>
    </>
  );
}

