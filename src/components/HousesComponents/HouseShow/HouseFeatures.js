import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import Image from "next/image";
import arrowblue from "@/src/assets/icons/arrow-blue.svg";
import React from "react";

const HouseFeatures = () => {
    return (
        <Box
            sx={{flexGrow: 1}}
            display={"flex"}
            flexDirection={"column"}
        >
            <Box
                py={2}
                display={"flex"}
            >
                <Typography
                    variant="h6"
                    component="h2"
                    fontWeight={"bold"}
                >
                    امکانات اقامتگاه
                </Typography>
            </Box>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                <Grid item xs={2} sm={4} md={4}>
                    <Paper
                        elevation={0}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src="https://www.shab.ir/img/house-feature-icons/tv.svg"
                            alt="tv"
                        />
                        <Typography
                            variant="body1"
                            component="p"
                            color={"#404040"}
                        >
                            تلویزیون
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Paper
                        elevation={0}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src="https://www.shab.ir/img/house-feature-icons/receiver.svg"
                            alt="receiver"
                        />
                        <Typography
                            variant="body1"
                            component="p"
                            color={"#404040"}
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
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src="https://www.shab.ir/img/house-feature-icons/refrigerator.svg"
                            alt="refrigerator"
                        />
                        <Typography
                            variant="body1"
                            component="p"
                            color={"#404040"}
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
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src="https://www.shab.ir/img/house-feature-icons/oven.svg"
                            alt="oven"
                        />
                        <Typography
                            variant="body1"
                            component="p"
                            color={"#404040"}
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
                            justifyContent: "space-between",
                            alignItems: "center"
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
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src="https://www.shab.ir/img/house-feature-icons/eating-service.svg"
                            alt="eating-service"
                        />
                        <Typography
                            variant="body1"
                            component="p"
                            color={"#404040"}
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
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src="https://www.shab.ir/img/house-feature-icons/iranian-restroom.svg"
                            alt="iranian-restroom"
                        />
                        <Typography
                            variant="body1"
                            component="p"
                            color={"#404040"}
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
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src="https://www.shab.ir/img/house-feature-icons/european-restroom.svg"
                            alt="european-restroom"
                        />
                        <Typography
                            variant="body1"
                            component="p"
                            color={"#404040"}
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
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src="https://www.shab.ir/img/house-feature-icons/shower.svg"
                            alt="shower"
                        />
                        <Typography
                            variant="body1"
                            component="p"
                            color={"#404040"}
                        >
                            دوش
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Box
                display={"flex"}
                alignItems={"center"}
            >
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
                    <Box
                    display={"flex"}
                    alignItems={"center"}
                    >
                            <Typography
                                variant="body1"
                                component="p"
                                color={"#4156d9"}
                            >
                                نمایش تمامی امکانات
                            </Typography>
                            <Image src={arrowblue} alt="arrowblue" width="20" height="20"/>
                    </Box>
                </Button>
            </Box>
        </Box>
    )
}
export default HouseFeatures;