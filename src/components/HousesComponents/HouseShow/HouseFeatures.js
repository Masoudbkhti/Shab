import {Box, Button, Grid, Typography} from "@mui/material";
import Image from "next/image";
import arrowblue from "@/src/assets/icons/arrow-blue.svg";
import React from "react";

const HouseFeatures = () => {
    return (
        <>
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
                    <Typography
                        variant="body1"
                        component="p"
                        color={"#4156d9"}
                    >
                        نمایش تمامی امکانات
                        <Image src={arrowblue} alt="arrowblue" width="20" height="20" />
                    </Typography>
                </Button>
            </Box>
        </>
    )
}
export default HouseFeatures;