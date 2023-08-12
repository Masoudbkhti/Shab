"use client";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import Link from "next/link";
import avatarImg from "./../../../assets/images/userIcon.png";
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
          backgroundColor: "rgba(255,255,255, 0.20)",
        }}
      >
        <Image
          src={avatarImg}
          width={36}
          height={36}
          alt="Picture of user icon"
          style={{ margin: "2px" }}
        />
        <MoreVertOutlinedIcon
          color="info"
          sx={{
            margin: "0 0px 0 8px",
            color: fixMenu,
            cursor: "pointer",
            fontSize: "30px",
          }}
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
              top: "65px",
              borderRadius: "20px",
              backgroundColor: "white",
              cursor: "auto",
            }}
          >
            <Box mb={1} sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={avatarImg}
                width={44}
                height={44}
                alt="Picture of user icon"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  justifyContent: "flex-start",
                  textAlign: "right",
                  paddingRight: "16px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h5"
                  color="secondary"
                >
                  مهمان
                </Typography>
                <Typography
                  variant="body1"
                  component="h6"
                  color="secondary"
                  sx={{ marginTop: "4px" }}
                >
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
                variant="body1"
                component="h6"
                color="secondary"
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
