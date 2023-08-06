"use client";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import Link from "next/link";
export default function ProfileBox({ fixMenu }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <>
      <Box
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
          color="info"
          sx={{ marginLeft: "10px", color: fixMenu, cursor: "pointer" }}
          onClick={handleClick}
        />
      </Box>
      {isOpenModal && (
        <>
          <Stack
            spacing={2}
            width={230}
            padding={2}
            sx={{
              zIndex: "modal",
              boxShadow: 2,
              position: "absolute",
              left: "24px",
              top: "60px",
              borderRadius: "20px",
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
                <Typography variant="body1" component="h4" color="initial">
                  مهمان
                </Typography>
                <Typography variant="caption" component="h6" color="secondary">
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
              <Typography
                variant="caption"
                component="h2"
                color="secondary"
                component="h6"
                pr={1}
              >
                <Link href="/bookmarks">علاقه مندی ها</Link>
              </Typography>
            </Box>
          </Stack>
        </>
      )}
    </>
  );
}

