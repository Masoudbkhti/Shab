import {Box, Paper, Typography} from "@mui/material";
import React from "react";

const Rooms = () => {
    return (

        <>
            <Box>
                <Typography variant="h6" component="h2" fontWeight={"bold"} display={"flex"} alignItems={"center"}>
                    اتاق‌ها
                </Typography>
                <Box display={"flex"}>
                    <Box
                        sx={{
                            padding: "1px",
                            "& > :not(style)": {
                                my: 1,
                                ml: 1,
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
                                display={"flex"}
                                alignItems={"center"}
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
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    کولرگازی، هیتر برقی
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
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
                                my: 1,
                                ml: 1,
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
                                display={"flex"}
                                alignItems={"center"}
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
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    اسپیلت، هیتر گرمایشی
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    ۲ تخت یک نفره
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
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
                                my: 1,
                                ml: 1,
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
                                display={"flex"}
                                alignItems={"center"}
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
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    اسپیلت، هیتر گرمایشی
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    ۱ تخت یک نفره
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    marginRight={1.5}
                                    marginTop={1}
                                    color={"#565861"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    طبقه همکف
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Rooms;