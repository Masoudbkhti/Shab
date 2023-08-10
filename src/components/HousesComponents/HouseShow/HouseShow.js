"use client";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import styles from "./house.module.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import Image from "next/image";
import React from "react";
import home from "../../../assets/icons/home.svg";
import arrowblue from "../../../assets/icons/arrow-blue.svg";
import users from "../../../assets/icons/users.svg";
import key from "../../../assets/icons/key.svg";
import calender from "../../../assets/icons/calender.svg";
import MTN from "../../../assets/icons/irancell.svg";
import MCI from "../../../assets/icons/hamrahaval.jpg";
import disablePersons from "../../../assets/icons/disablePersons.svg";
import avatarImg from "./../../../assets/images/userIcon.png";
// import SameResidence from "/app/components/PopularCity/SameResidence";

const HouseShow = ({ data }) => (
  <>
    <Container>
      <Box>
        <Typography variant="h5" component="h1">
          {data.title}
        </Typography>
      </Box>
      <Box
        marginTop={3}
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <StarRoundedIcon
          fontSize="small"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#1976d2",
          }}
        />
        <Typography variant="subtitle2" component="p" marginRight={0.5}>
          {data.rate}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          marginRight={1}
          color={"#666666"}
          sx={{ textDecoration: "underline" }}
        >
          ({data.person} نظر ثبت شده)
        </Typography>
      </Box>
      <Box sx={{ textDecoration: "underline" }}>
        <Typography
          variant="subtitle2"
          component="p"
          marginTop={1.5}
          color={"#666666"}
        >
          {data.location}
        </Typography>
      </Box>
      <Box
        marginTop={1.5}
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ThumbUpAltOutlinedIcon
          fontSize="small"
          sx={{
            color: "#575757",
            marginBottom: 0.75,
          }}
        />
        <Typography variant="caption" display="block" marginRight={0.1}>
          ({data.person} نفر)
        </Typography>
        <Typography variant="caption" display="block" marginRight={0.1}>
          از مهمانان اخیر، این اقامتگاه را توصیه کرده اند
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          src={avatarImg}
          width={52}
          height={52}
          alt="Picture of user icon"
        />
        <Box>
          <Typography
            variant="body1"
            component="p"
            marginBottom={0.5}
            fontWeight={"bold"}
            color={"#404040"}
          >
            میزبان: {data.host}
          </Typography>
          <Typography variant="body1" component="p" color={"#666666"}>
            کدآگهی: {data.number}
          </Typography>
        </Box>
      </Box>
      <hr
        style={{
          backgroundColor: "gray",
          borderColor: "#e6e7f2",
          margin: "26px 0",
          borderStyle: "solid",
          borderBottomWidth: "thin",
        }}
      />
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image src={home} alt="home" width="20" height="20" />
          <Typography variant="body1" component="p" marginRight={1.5}>
            {data.type} دربست
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            component="p"
            color={"#484848"}
            marginRight={4.5}
            marginTop={0.5}
          >
            ۳ تخت (۳ تخت دو‌نفره) . {data.room} اتاق . {data.area} متر
          </Typography>
        </Box>
      </Box>
      <Box marginTop={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image src={users} alt="users" width="24" height="24" />
          <Typography variant="body1" component="p" marginRight={1.5}>
            {data.person} نفر ظرفیت استاندارد + ۱ نفر اضافه
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            component="p"
            color={"#484848"}
            marginRight={4.5}
            marginTop={0.5}
          >
            هزینه هر نفر اضافه به ازای هر شب ۱۵۰,۰۰۰ تومان
          </Typography>
        </Box>
      </Box>
      <Box marginTop={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image src={key} alt="key" width="24" height="24" />
          <Typography variant="body1" component="p" marginRight={1.5}>
            حداقل مدت اقامت ۱ شب
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            component="p"
            color={"#484848"}
            marginRight={4.5}
            marginTop={0.5}
          >
            تحویل کلید از ۱۵:۰۰ تا ۰۰:۰۰
          </Typography>
        </Box>
      </Box>
      <Box marginTop={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image src={calender} alt="calender" width="20" height="20" />
          <Typography variant="body1" component="p" marginRight={1.5}>
            پاسخگویی سریع میزبان
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            component="p"
            color={"#484848"}
            marginRight={4.5}
            marginTop={0.5}
          >
            میانگین پاسخگویی میزبان زیر ۱۵ دقیقه است.
          </Typography>
        </Box>
      </Box>
      <hr
        style={{
          backgroundColor: "gray",
          borderColor: "#e6e7f2",
          margin: "40px 0",
          borderStyle: "solid",
          borderBottomWidth: "thin",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" component="h2" fontWeight={"bold"}>
          درباره این {data.type}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          component="p"
          color={"#484848"}
          marginTop={0.75}
        >
          {data.type} مدرن سالن بزرگ ۳ خواب
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          component="p"
          color={"#484848"}
          marginTop={0.75}
        >
          دارای استخر و الاچیق
        </Typography>
      </Box>
      <Box>
        <Typography
          fontWeight={"bold"}
          variant="subtitle2"
          component="p"
          marginTop={4}
        >
          اطلاعات ساختمان
        </Typography>
      </Box>
      <Box
        marginTop={2}
        sx={{
          display: "flex",
          flexDirection: "row",
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
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              marginRight={1.5}
              color={"#565861"}
            >
              تیپ سازه
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              color={"#080a1a"}
              marginRight={1.5}
              fontWeight={"bold"}
            >
              هم‌سطح
            </Typography>
          </Box>
          <Box
            marginTop={0.5}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              marginRight={1.5}
              color={"#565861"}
            >
              تعداد طبقات
            </Typography>

            <Typography
              variant="subtitle2"
              component="p"
              color={"#080a1a"}
              marginRight={1.5}
              fontWeight={"bold"}
            >
              طبقه ۱
            </Typography>
          </Box>
          <Box
            marginTop={0.5}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              marginRight={1.5}
              color={"#565861"}
            >
              طبقه این واحد
            </Typography>

            <Typography
              variant="subtitle2"
              component="p"
              color={"#080a1a"}
              marginRight={1.5}
              fontWeight={"bold"}
            >
              همکف
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              marginRight={1.5}
              color={"#565861"}
            >
              متراژ زمین
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              color={"#080a1a"}
              marginRight={1.5}
              fontWeight={"bold"}
            >
              {data.area} متر
            </Typography>
          </Box>
          <Box
            marginTop={0.5}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              marginRight={1.5}
              color={"#565861"}
            >
              متراژ بنا
            </Typography>

            <Typography
              variant="subtitle2"
              component="p"
              color={"#080a1a"}
              marginRight={1.5}
              fontWeight={"bold"}
            >
              ۱۴۰ متر
            </Typography>
          </Box>
          <Box
            marginTop={0.5}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              marginRight={1.5}
              color={"#565861"}
            >
              تعداد پله ها
            </Typography>

            <Typography
              variant="subtitle2"
              component="p"
              color={"#080a1a"}
              marginRight={1.5}
              fontWeight={"bold"}
            >
              کمتر از ۵
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          fontWeight={"bold"}
          variant="subtitle2"
          component="p"
          marginTop={3}
        >
          وضعیت آنتن دهی
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image src={MTN} width={52} height={52} alt="irancell" />
          <Box>
            <Typography variant="subtitle2" component="p" marginBottom={0.5}>
              ایرانسل
            </Typography>
            <Typography variant="subtitle2" component="p" color={"#666666"}>
              دارد (3G/4G/LTE)
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image src={MCI} alt="hamrahaval" className={styles.icon} />
          <Box>
            <Typography variant="subtitle2" component="p" marginBottom={0.5}>
              همراه اول
            </Typography>
            <Typography variant="subtitle2" component="p" color={"#666666"}>
              دارد (3G/4G/LTE)
            </Typography>
          </Box>
        </Box>
      </Box>
      <hr
        style={{
          backgroundColor: "gray",
          borderColor: "#e6e7f2",
          margin: "40px 0",
          borderStyle: "solid",
          borderBottomWidth: "thin",
        }}
      />
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          src={disablePersons}
          width="54"
          height="54"
          alt="disablePersons"
        />
        <Box>
          <Typography variant="body1" component="p" fontWeight={"600"}>
            مناسب سالمندان و معلولین
          </Typography>
          <Typography variant="subtitle2" component="p">
            شرایط این اقامتگاه مناسب پذیرش سالمندان و معلولین است.
          </Typography>
        </Box>
      </Box>
      <hr
        style={{
          backgroundColor: "gray",
          borderColor: "#e6e7f2",
          margin: "40px 0",
          borderStyle: "solid",
          borderBottomWidth: "thin",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
        }}
      >
        {/*<Typography variant="h6" component="h2" fontWeight={"bold"}>*/}
        {/*    اقامتگاه های مشابه*/}
        {/*</Typography>*/}

        {/* <SameResidence/> */}
      </Box>
      <hr
        style={{
          backgroundColor: "gray",
          borderColor: "#e6e7f2",
          margin: "40px 0",
          borderStyle: "solid",
          borderBottomWidth: "thin",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          fontWeight={"bold"}
          marginBottom={5}
        >
          امکانات اقامتگاه
        </Typography>
      </Box>
      <Grid
        container
        spacing={1}
        maxWidth={"720px"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/tv.svg"
              alt="tv"
            />
            <Typography
              variant="body1"
              component="p"
              marginRight={1.5}
              color={"#404040"}
            >
              تلویزیون
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/receiver.svg"
              alt="receiver"
            />
            <Typography
              variant="body1"
              component="p"
              marginRight={1.5}
              color={"#404040"}
            >
              گیرنده دیجیتال
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/refrigerator.svg"
              alt="refrigerator"
            />
            <Typography
              variant="body1"
              component="p"
              marginRight={1.5}
              color={"#404040"}
            >
              یخچال
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/oven.svg"
              alt="oven"
            />
            <Typography
              variant="body1"
              component="p"
              marginRight={1.5}
              color={"#404040"}
            >
              اجاق گاز
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        marginTop={3}
        maxWidth={"720px"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/eating-service.svg"
              alt="eating-service"
            />
            <Typography
              variant="body1"
              component="p"
              marginRight={1.5}
              color={"#404040"}
            >
              سرویس غذا خوری
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/sofa.svg"
              alt="sofa"
            />
            <Typography
              variant="body1"
              component="p"
              color={"#404040"}
              marginRight={1.5}
            >
              مبل
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/iranian-restroom.svg"
              alt="iranian-restroom"
            />
            <Typography
              variant="body1"
              component="p"
              marginRight={1.5}
              color={"#404040"}
            >
              توالت ایرانی
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/european-restroom.svg"
              alt="european-restroom"
            />
            <Typography
              variant="body1"
              component="p"
              marginRight={1.5}
              color={"#404040"}
            >
              توالت فرنگی
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        marginTop={3}
        maxWidth={"720px"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/shower.svg"
              alt="shower"
            />
            <Typography
              variant="body1"
              component="p"
              marginRight={1.5}
              color={"#404040"}
            >
              دوش
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Button
        sx={{
          marginTop: 3,
          "&:hover": {
            background: "rgb(240,247,255)",
          },
        }}
      >
        <Typography
          display={"flex"}
          alignItems={"center"}
          variant="body1"
          component="p"
          color={"#4156d9"}
        >
          نمایش تمامی امکانات
          <Image src={arrowblue} alt="arrowblue" width="20" height="20" />
        </Typography>
      </Button>
      <hr
        style={{
          backgroundColor: "gray",
          borderColor: "#e6e7f2",
          margin: "40px 0",
          borderStyle: "solid",
          borderBottomWidth: "thin",
        }}
      />
      <Box>
        <Typography variant="h6" component="h2" fontWeight={"bold"}>
          اتاق‌ها
        </Typography>
        <Box display={"flex"}>
          <Box
            sx={{
              padding: "1px",
              "& > :not(style)": {
                m: 1,
                width: 170,
                height: 117,
              },
            }}
          >
            <Paper variant="outlined">
              <Typography
                variant="body2"
                component="h2"
                fontWeight={"bold"}
                marginTop={2}
                marginRight={1.5}
              >
                پذیرایی
              </Typography>
              <Box>
                <Typography
                  variant="subtitle2"
                  component="p"
                  marginRight={1.5}
                  marginTop={1}
                  color={"#565861"}
                >
                  کولرگازی، هیتر برقی
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="p"
                  marginRight={1.5}
                  marginTop={1}
                  color={"#565861"}
                >
                  طبقه همکف
                </Typography>
              </Box>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 190,
                height: 146,
              },
            }}
          >
            <Paper variant="outlined">
              <Typography
                variant="body2"
                component="h2"
                fontWeight={"bold"}
                marginTop={2}
                marginRight={1.5}
              >
                اتاق خواب ۱
              </Typography>
              <Box>
                <Typography
                  variant="subtitle2"
                  component="p"
                  marginRight={1.5}
                  marginTop={1}
                  color={"#565861"}
                >
                  اسپیلت، هیتر گرمایشی
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="p"
                  marginRight={1.5}
                  marginTop={1}
                  color={"#565861"}
                >
                  ۲ تخت یک نفره
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="p"
                  marginRight={1.5}
                  marginTop={1}
                  color={"#565861"}
                >
                  طبقه همکف
                </Typography>
              </Box>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 190,
                height: 146,
              },
            }}
          >
            <Paper variant="outlined">
              <Typography
                variant="body2"
                component="h2"
                fontWeight={"bold"}
                marginTop={2}
                marginRight={1.5}
              >
                اتاق خواب ۲
              </Typography>
              <Box>
                <Typography
                  variant="subtitle2"
                  component="p"
                  marginRight={1.5}
                  marginTop={1}
                  color={"#565861"}
                >
                  اسپیلت، هیتر گرمایشی
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="p"
                  marginRight={1.5}
                  marginTop={1}
                  color={"#565861"}
                >
                  ۱ تخت یک نفره
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="p"
                  marginRight={1.5}
                  marginTop={1}
                  color={"#565861"}
                >
                  طبقه همکف
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
      <hr
        style={{
          backgroundColor: "gray",
          borderColor: "#e6e7f2",
          margin: "40px 0",
          borderStyle: "solid",
          borderBottomWidth: "thin",
        }}
      />
    </Container>
  </>
);
export default HouseShow;
