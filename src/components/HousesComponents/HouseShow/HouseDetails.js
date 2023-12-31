import { Box, Typography } from "@mui/material";
import Image from "next/image";
import MTN from "@/src/assets/icons/irancell.svg";
import MCI from "@/src/assets/icons/hamrahaval.jpg";
import styles from "@/src/components/HousesComponents/HouseShow/house.module.css";
import React from "react";

const HouseDetails = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          component="h6"
          color="secondary"
          textAlign={"right"}
          mb={1}
        >
          درباره این اقامتگاه {data.type}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          component="p"
          color="secondary"
          marginTop={0.75}
          display={"flex"}
          alignItems={"flex-start"}
        >
          {data.type} مدرن سالن بزرگ ۳ خواب
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          component="p"
          color="secondary"
          marginTop={0.75}
          display={"flex"}
          alignItems={"flex-start"}
        >
          دارای استخر و الاچیق
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          component="p"
          color="secondary"
          marginTop={4}
          display={"flex"}
          alignItems={"flex-start"}
        >
          اطلاعات ساختمان
        </Typography>
      </Box>
      <Box
        marginTop={2}
        sx={{
          justifyContent: {
            xs: "space-around",
            sm: "space-between",
            md: "space-between",
          },
          marginRight: { md: "20px" },
          display: "flex",
          flexDirection: "row",
          width: { md: "450px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
              alignItems: "flexStart",
              textAlign: "right",
            }}
          >
            <Typography variant="subtitle2" component="p" color="secondary">
              تیپ سازه
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              color="secondary"
              marginRight={1.5}
            >
              هم‌سطح
            </Typography>
          </Box>
          <Box
            marginTop={0.5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flexStart",
              textAlign: "right",
            }}
          >
            <Typography variant="subtitle2" component="p" color="secondary">
              تعداد طبقات
            </Typography>

            <Typography
              variant="subtitle1"
              component="p"
              color="secondary"
              marginRight={1.5}
            >
              طبقه ۱
            </Typography>
          </Box>
          <Box
            marginTop={0.5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flexStart",
              textAlign: "right",
            }}
          >
            <Typography variant="subtitle2" component="p" color="secondary">
              طبقه این واحد
            </Typography>

            <Typography
              variant="subtitle1"
              component="p"
              color="secondary"
              marginRight={1.5}
            >
              همکف
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flexStart",
              textAlign: "right",
            }}
          >
            <Typography variant="subtitle2" component="p" color="secondary">
              متراژ زمین
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              color="secondary"
              marginRight={1.5}
            >
              {data.area} متر
            </Typography>
          </Box>
          <Box
            marginTop={0.5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flexStart",
              textAlign: "right",
            }}
          >
            <Typography variant="subtitle2" component="p" color="secondary">
              متراژ بنا
            </Typography>

            <Typography
              variant="subtitle1"
              component="p"
              color="secondary"
              marginRight={1.5}
            >
              ۱۴۰ متر
            </Typography>
          </Box>
          <Box
            marginTop={0.5}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "flexStart",
              textAlign: "right",
            }}
          >
            <Typography variant="subtitle2" component="p" color="secondary">
              تعداد پله ها
            </Typography>

            <Typography
              variant="subtitle1"
              component="p"
              color="secondary"
              marginRight={1.5}
            >
              کمتر از ۵
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="subtitle1"
          component="p"
          color="secondary"
          marginTop={3}
          display={"flex"}
          alignItems={"flex-start"}
        >
          وضعیت آنتن دهی
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: {
              sm: "100%",
            },
            justifyContent: {
              sm: "space-around",
              md: "flex-start",
            },
          }}
        >
          <Image src={MTN} width={52} height={52} alt="irancell" />
          <Box
            sx={{
              marginRight: { md: "8px" },
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Typography variant="subtitle2" component="p">
                ایرانسل
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" component="p" color={"#666666"}>
                دارد (3G/4G/LTE)
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: {
              sm: "100%",
            },
            justifyContent: {
              sm: "space-around",
              md: "flex-start",
            },
          }}
        >
          <Image
            width={52}
            height={52}
            src={MCI}
            alt="hamrahaval"
            className={styles.icon}
          />
          <Box
            sx={{
              marginRight: { md: "8px" },
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Typography variant="subtitle2" component="p">
                همراه اول
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" component="p" color={"#666666"}>
                دارد (3G/4G/LTE)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HouseDetails;
