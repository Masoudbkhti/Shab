import { Box, Typography } from "@mui/material";
import Image from "next/image";
import home from "@/src/assets/icons/home.svg";
import users from "@/src/assets/icons/users.svg";
import key from "@/src/assets/icons/key.svg";
import calender from "@/src/assets/icons/calender.svg";
import React from "react";

const HostDetails = ({ data }) => {
  return (
    <>
      <Box
        alignItems={"flex-start"}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image src={home} alt="home" width="20" height="20" />
        </Box>
        <Box
          mr={2}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography variant="h6" component="h6" color="secondary">
            {data.type} دربست
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            color="secondary"
            marginTop={1}
            textAlign={"right"}
          >
            ۳ تخت . {data.room} اتاق . {data.area} متر
          </Typography>
        </Box>
      </Box>
      <Box
        mt={2}
        alignItems={"flex-start"}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image src={users} alt="users" width="24" height="24" />
        </Box>
        <Box
          mr={2}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography
            variant="h6"
            component="h6"
            color="secondary"
            textAlign={"right"}
          >
            {data.person} نفر ظرفیت استاندارد + ۱ نفر اضافه
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            color="secondary"
            marginTop={1}
            textAlign={"right"}
          >
            ۳ تخت . هزینه هر نفر اضافه به ازای هر شب ۱۵۰,۰۰۰ تومان
          </Typography>
        </Box>
      </Box>
      <Box
        mt={2}
        alignItems={"flex-start"}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image src={key} alt="key" width="24" height="24" />
        </Box>
        <Box
          mr={2}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography
            variant="h6"
            component="h6"
            color="secondary"
            textAlign={"right"}
          >
            حداقل مدت اقامت ۱ شب
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            color="secondary"
            marginTop={1}
            textAlign={"right"}
          >
            تحویل کلید از ۱۵:۰۰ تا ۰۰:۰۰
          </Typography>
        </Box>
      </Box>
      <Box
        mt={2}
        alignItems={"flex-start"}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image src={calender} alt="calender" width="20" height="20" />
        </Box>
        <Box
          mr={2}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography
            variant="h6"
            component="h6"
            color="secondary"
            textAlign={"right"}
          >
            پاسخگویی سریع میزبان
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            color="secondary"
            marginTop={1}
            textAlign={"right"}
          >
            میانگین پاسخگویی میزبان زیر ۱۵ دقیقه است.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default HostDetails;
