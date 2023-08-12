import {Box, Typography} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import Image from "next/image";
import avatarImg from "/src/assets/images/userIcon.png";
import React from "react";

const Information = ({data}) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flexStart",
                    textAlign: "flexStart",
                }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    fontWeight="400"
                    color="secondary"
                    display={"flex"}
                    textAlign={"right"}
                >
                    {data.title}
                </Typography>
            </Box>
            <Box
                marginTop={2}
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
                <Typography
                    variant="h6"
                    component="h6"
                    color="secondary"
                    fontWeight="400"
                    marginRight={0.5}
                >
                    {data.rate}
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="p"
                    marginRight={1}
                    color={"#666666"}
                    sx={{textDecoration: "underline", cursor: "pointer"}}
                >
                    ({data.person} نظر ثبت شده)
                </Typography>
            </Box>
            <Box
                sx={{textDecoration: "underline", cursor: "pointer"}}
                display={"flex"}
                alignItems={"flex-start"}
            >
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
                    maxWidth: {xs: "290px", sm: "220px"},
                    display: "flex",
                    textAlign: "flexStart",
                    alignItems:"center",
                }}
            >
                <ThumbUpAltOutlinedIcon
                    fontSize="small"
                    sx={{
                        color: "#575757",
                        display: "flex",
                        alignItems: "center",
                    }}
                />
                <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                    sx={{
                        width: {xs: "50px", sm: "55px", md: "45px"},
                        textAlign: "center"
                    }}
                >
                    ({data.person} نفر)
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="p"
                    color="secondary"
                    marginRight={0.5}
                    textAlign={"right"}
                >
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
                <Box
                    sx={{cursor: "pointer"}}
                >
                    <Typography
                        variant="h6"
                        component="h6"
                        marginBottom={0.9}
                        marginRight={0.5}
                        fontWeight={"bold"}
                        color={"#404040"}
                    >
                        میزبان: {data.host}
                    </Typography>
                    <Typography
                        sx={{display: {xs: "none", sm: "flex"}}}
                        variant="subtitle1"
                        component="h6"
                        color={"#666666"}
                        display={"flex"}
                        alignItems={"flex-start"}
                        marginRight={0.5}
                    >
                        کدآگهی: {data.number}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};
export default Information;
