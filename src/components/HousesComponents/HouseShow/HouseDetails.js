import {Box, Typography} from "@mui/material";
import Image from "next/image";
import MTN from "@/src/assets/icons/irancell.svg";
import MCI from "@/src/assets/icons/hamrahaval.jpg";
import styles from "@/src/components/HousesComponents/HouseShow/house.module.css";
import React from "react";

const HouseDetails = ({data}) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Typography variant="h6" component="h2" fontWeight={"bold"} >
                    درباره این {data.type}
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="subtitle2"
                    component="p"
                    color={"#484848"}
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
                    color={"#484848"}
                    marginTop={0.75}
                    display={"flex"}
                    alignItems={"flex-start"}
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
                    display={"flex"}
                    alignItems={"flex-start"}
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
        </>
    )
}
export default HouseDetails;