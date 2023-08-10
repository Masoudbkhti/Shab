import {Box, Typography} from "@mui/material";
import Image from "next/image";
import home from "@/src/assets/icons/home.svg";
import users from "@/src/assets/icons/users.svg";
import key from "@/src/assets/icons/key.svg";
import calender from "@/src/assets/icons/calender.svg";
import React from "react";

const HostDetails = ({data}) => {
    return (
        <>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <Image src={home} alt="home" width="20" height="20" />
                    <Typography variant="body1" component="p" marginRight={1.5} >
                        {data.type} دربست
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        color={"#484848"}
                        marginRight={4}
                        marginTop={0.5}
                        display={"flex"}
                        alignItems={"flex-start"}
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
                        marginRight={4}
                        display={"flex"}
                        alignItems={"flex-start"}
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
                        marginRight={4}
                        display={"flex"}
                        alignItems={"flex-start"}
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
                        marginRight={4}
                        display={"flex"}
                        alignItems={"flex-start"}
                        marginTop={0.5}
                    >
                        میانگین پاسخگویی میزبان زیر ۱۵ دقیقه است.
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
export default HostDetails;