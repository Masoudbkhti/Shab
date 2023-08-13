import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import arrowblue from "@/src/assets/icons/arrow-blue.svg";
import React from "react";

const HouseFeatures = () => {
  return (
    <Box sx={{ flexGrow: 1 }} display={"flex"} flexDirection={"column"}>
      <Box py={2} display={"flex"}>
        <Typography variant="h5" component="h5" color="secondary">
          امکانات اقامتگاه
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/tv.svg"
              alt="tv"
            />
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              fontWeight="400"
              marginRight={"10px"}
            >
              تلویزیون
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/receiver.svg"
              alt="receiver"
            />
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              fontWeight="400"
              marginRight={"10px"}
            >
              گیرنده دیجیتال
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/refrigerator.svg"
              alt="refrigerator"
            />
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              fontWeight="400"
              marginRight={"10px"}
            >
              یخچال
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/oven.svg"
              alt="oven"
            />
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              fontWeight="400"
              marginRight={"10px"}
            >
              اجاق گاز
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/sofa.svg"
              alt="sofa"
            />
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              fontWeight="400"
              marginRight={"10px"}
            >
              مبل
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/eating-service.svg"
              alt="eating-service"
            />
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              fontWeight="400"
              marginRight={"10px"}
            >
              سرویس غذاخوری
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/iranian-restroom.svg"
              alt="iranian-restroom"
            />
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              fontWeight="400"
              marginRight={"10px"}
            >
              توالت ایرانی
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/european-restroom.svg"
              alt="european-restroom"
            />
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              fontWeight="400"
              marginRight={"10px"}
            >
              توالت فرنگی
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            <img
              src="https://www.shab.ir/img/house-feature-icons/shower.svg"
              alt="shower"
            />
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              fontWeight="400"
              marginRight={"10px"}
            >
              دوش
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box display={"flex"} alignItems={"center"}>
        <Button
          display={"flex"}
          alignItems={"flex-start"}
          sx={{
            marginTop: 3,
            "&:hover": {
              background: "rgb(240,247,255)",
            },
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              variant="h6"
              component="h6"
              color="info.main"
              fontWeight="400"
            >
              نمایش تمامی امکانات
            </Typography>
            <Image src={arrowblue} alt="arrowblue" width="20" height="20" />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
export default HouseFeatures;
