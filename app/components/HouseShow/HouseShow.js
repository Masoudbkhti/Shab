import {Box, Container, Typography} from "@mui/material";
import styles from "@/app/components/HouseShow/house.module.css";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import Image from "next/image";




const HouseShow = ({data}) =>
    <>
        <Box
            marginX={0}
            marginY={1}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}
        >
            <Box>
                <img
                    src={data.image.cover}
                    alt="image"
                    className={styles.img1}/>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <img
                    src={data.image["img-1"]}
                    alt="image"
                    className={styles.img2}/>
                <img
                    src={data.image["img-2"]}
                    alt="image"
                    className={styles.img2}/>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <img
                    src={data.image["img-3"]}
                    alt="image"
                    className={styles.img3}
                />

                <article className={styles.article}>
                    <img
                        src={data.image["img-4"]}
                        alt="image"
                        className={styles.img4}/>
                    <h1 className={styles.header}>
                        <Typography variant="caption" component="p"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center"
                                    }}
                        >
                            مشاهده تمام تصاویر
                            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                                        fill="#ffffff"></path>
                                </g>
                            </svg>
                        </Typography>
                    </h1>
                </article>
            </Box>
        </Box>
        <Container
            maxWidth={false}
            sx={{maxWidth: '815px', marginRight: 23}}
        >
            <Box
                marginTop={3}
            >
                <Typography variant="h5" component="h1">
                    {data.title}
                </Typography>
            </Box>
            <Box
                marginTop={3}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
                <StarRoundedIcon
                    fontSize="small"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#1976d2"
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
                    sx={{textDecoration: 'underline'}}
                >
                    (۵ نظر ثبت شده)
                </Typography>
            </Box>
            <Box
                sx={{textDecoration: 'underline'}}
            >
                <Typography variant="subtitle2" component="p" marginTop={1.5} color={"#666666"}>
                    {data.location}
                </Typography>
            </Box>
            <Box
                marginTop={1.5}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center"
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
                    alignItems: "center"
                }}
            >
                <Image
                    src="/../public/assets/images/userIcon.png"
                    width={52}
                    height={52}
                    alt="Picture of user icon"
                />
                <Box
                    sx={{
                        marginRight: 1,
                    }}
                >
                    <Typography variant="body1" component="p" marginBottom={0.5}>
                        میزبان: ابوالفضل باقرپور
                    </Typography>
                    <Typography variant="body1" component="p" color={"#666666"}>
                        کدآگهی: ۸۶۷۵۲
                    </Typography>
                </Box>
            </Box>
            <hr
                style={{
                    backgroundColor: "gray",
                    borderColor: "#e6e7f2",
                    margin: "26px 0",
                    borderStyle: "solid",
                    borderBottomWidth: "thin"
                }}
            />
            <Box>
                <Box
                    marginRight={0.5}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                         stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                           stroke-width="0.048"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </g>
                    </svg>
                    <Typography variant="body1" component="p" marginRight={1.5}>
                        ویلایی دربست
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        color={"#484848"}
                        marginRight={4.5}
                        marginTop={0.5}>
                        ۳ تخت (۳ تخت دو‌نفره) . ۳ اتاق . ۱۴۰ متر
                    </Typography>
                </Box>
            </Box>
            <Box
                marginTop={2}
            >
                <Box

                    sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         transform="matrix(-1, 0, 0, 1, 0, 0)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M14 12.25C13.2583 12.25 12.5333 12.0301 11.9166 11.618C11.2999 11.206 10.8193 10.6203 10.5355 9.93506C10.2516 9.24984 10.1774 8.49584 10.3221 7.76841C10.4668 7.04098 10.8239 6.3728 11.3484 5.84835C11.8728 5.3239 12.541 4.96675 13.2684 4.82206C13.9958 4.67736 14.7498 4.75162 15.4351 5.03545C16.1203 5.31928 16.706 5.79993 17.118 6.41661C17.5301 7.0333 17.75 7.75832 17.75 8.5C17.75 9.49456 17.3549 10.4484 16.6517 11.1517C15.9484 11.8549 14.9946 12.25 14 12.25ZM14 6.25C13.555 6.25 13.12 6.38196 12.75 6.62919C12.38 6.87643 12.0916 7.22783 11.9213 7.63896C11.751 8.0501 11.7064 8.5025 11.7932 8.93895C11.8801 9.37541 12.0943 9.77632 12.409 10.091C12.7237 10.4057 13.1246 10.62 13.561 10.7068C13.9975 10.7936 14.4499 10.749 14.861 10.5787C15.2722 10.4084 15.6236 10.12 15.8708 9.75003C16.118 9.38002 16.25 8.94501 16.25 8.5C16.25 7.90326 16.0129 7.33097 15.591 6.90901C15.169 6.48705 14.5967 6.25 14 6.25Z"
                                fill="#000000"></path>
                            <path
                                d="M21 19.25C20.8019 19.2474 20.6126 19.1676 20.4725 19.0275C20.3324 18.8874 20.2526 18.6981 20.25 18.5C20.25 16.55 19.19 15.25 14 15.25C8.81 15.25 7.75 16.55 7.75 18.5C7.75 18.6989 7.67098 18.8897 7.53033 19.0303C7.38968 19.171 7.19891 19.25 7 19.25C6.80109 19.25 6.61032 19.171 6.46967 19.0303C6.32902 18.8897 6.25 18.6989 6.25 18.5C6.25 13.75 11.68 13.75 14 13.75C16.32 13.75 21.75 13.75 21.75 18.5C21.7474 18.6981 21.6676 18.8874 21.5275 19.0275C21.3874 19.1676 21.1981 19.2474 21 19.25Z"
                                fill="#000000"></path>
                            <path
                                d="M8.31999 13.06H7.99999C7.20434 12.9831 6.47184 12.5933 5.96361 11.9763C5.45539 11.3593 5.21308 10.5657 5.28999 9.77001C5.36691 8.97436 5.75674 8.24186 6.37373 7.73363C6.99073 7.22541 7.78434 6.9831 8.57999 7.06001C8.68201 7.0644 8.78206 7.08957 8.87401 7.13399C8.96596 7.1784 9.04787 7.24113 9.11472 7.31831C9.18157 7.3955 9.23196 7.48553 9.26279 7.58288C9.29362 7.68023 9.30425 7.78285 9.29402 7.88445C9.28379 7.98605 9.25292 8.08449 9.20331 8.17374C9.15369 8.26299 9.08637 8.34116 9.00548 8.40348C8.92458 8.46579 8.83181 8.51093 8.73286 8.53613C8.6339 8.56133 8.53084 8.56605 8.42999 8.55001C8.23479 8.53055 8.03766 8.55062 7.85038 8.60904C7.6631 8.66746 7.48952 8.76302 7.33999 8.89001C7.18812 9.01252 7.06216 9.16403 6.96945 9.33572C6.87673 9.50741 6.81913 9.69583 6.79999 9.89001C6.77932 10.0866 6.79797 10.2854 6.85488 10.4747C6.91178 10.6641 7.0058 10.8402 7.13144 10.9928C7.25709 11.1455 7.41186 11.2716 7.58673 11.3638C7.76159 11.456 7.95307 11.5125 8.14999 11.53C8.47553 11.5579 8.80144 11.4808 9.07999 11.31C9.24973 11.2053 9.45413 11.1722 9.64824 11.2182C9.84234 11.2641 10.0102 11.3853 10.115 11.555C10.2198 11.7248 10.2528 11.9292 10.2069 12.1233C10.1609 12.3174 10.0397 12.4853 9.86999 12.59C9.40619 12.8858 8.86998 13.0484 8.31999 13.06Z"
                                fill="#000000"></path>
                            <path
                                d="M3 18.5C2.80189 18.4974 2.61263 18.4176 2.47253 18.2775C2.33244 18.1374 2.25259 17.9481 2.25 17.75C2.25 15.05 2.97 13.25 6.5 13.25C6.69891 13.25 6.88968 13.329 7.03033 13.4697C7.17098 13.6103 7.25 13.8011 7.25 14C7.25 14.1989 7.17098 14.3897 7.03033 14.5303C6.88968 14.671 6.69891 14.75 6.5 14.75C4.15 14.75 3.75 15.5 3.75 17.75C3.74741 17.9481 3.66756 18.1374 3.52747 18.2775C3.38737 18.4176 3.19811 18.4974 3 18.5Z"
                                fill="#000000"></path>
                        </g>
                    </svg>
                    <Typography variant="body1" component="p" marginRight={1.5}>
                        ۶ نفر ظرفیت استاندارد + ۹ نفر اضافه
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        color={"#484848"}
                        marginRight={4.5}
                        marginTop={0.5}>
                        هزینه هر نفر اضافه به ازای هر شب ۱۵۰,۰۰۰ تومان
                    </Typography>
                </Box>
            </Box>
            <Box
                marginTop={2}
            >
                <Box

                    sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M18 6L20 8L17 11L15 9M11.6915 12.3086L21.0001 3M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z"
                                stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </g>
                    </svg>
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
                        marginTop={0.5}>
                        تحویل کلید از ۱۵:۰۰ تا ۰۰:۰۰
                    </Typography>
                </Box>
            </Box>
            <Box
                marginTop={2}
            >
                <Box

                    sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M5 5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5ZM19 7H5V17H19V7Z"
                                  fill="#000000"></path>
                            <path
                                d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7C21 8.10457 20.1046 9 19 9H5C3.89543 9 3 8.10457 3 7Z"
                                fill="#000000"></path>
                            <path
                                d="M7 7C6.44772 7 6 6.55228 6 6V4C6 3.44772 6.44772 3 7 3C7.55228 3 8 3.44772 8 4V6C8 6.55228 7.55228 7 7 7Z"
                                fill="#000000"></path>
                            <path
                                d="M17 7C16.4477 7 16 6.55228 16 6V4C16 3.44772 16.4477 3 17 3C17.5523 3 18 3.44772 18 4V6C18 6.55228 17.5523 7 17 7Z"
                                fill="#000000"></path>
                        </g>
                    </svg>
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
                        marginTop={0.5}>
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
                    borderBottomWidth: "thin"
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
                <Typography variant="h6" component="h2" fontWeight={"bold"}>
                    درباره این ویلا
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="subtitle2"
                    component="p"
                    color={"#484848"}
                    marginTop={0.75}>
                    ویلا مدرن سالن بزرگ ۳ خواب
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="subtitle2"
                    component="p"
                    color={"#484848"}
                    marginTop={0.75}>
                    دارای استخر و الاچیق
                </Typography>
            </Box>
            <Box>
                <Typography
                    fontWeight={"bold"}
                    variant="subtitle2"
                    component="p"
                    marginTop={4}>
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
                            textAlign: "center"
                        }}
                    >
                        <Typography variant="subtitle2" component="p" marginRight={1.5} color={"#565861"}>
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
                            textAlign: "center"
                        }}
                    >
                        <Typography variant="subtitle2" component="p" marginRight={1.5} color={"#565861"}>
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
                        textAlign: "center"
                    }}
                >
                    <Typography variant="subtitle2" component="p" marginRight={1.5} color={"#565861"}>
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
                <Box
                    marginRight={25}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            textAlign: "center"
                        }}
                    >
                        <Typography variant="subtitle2" component="p" marginRight={1.5} color={"#565861"}>
                            متراژ زمین
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            component="p"
                            color={"#080a1a"}
                            marginRight={1.5}
                            fontWeight={"bold"}
                        >
                            ۵۰۰ متر
                        </Typography>
                    </Box>
                    <Box
                        marginTop={0.5}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            textAlign: "center"
                        }}
                    >
                        <Typography variant="subtitle2" component="p" marginRight={1.5} color={"#565861"}>
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
                        textAlign: "center"
                    }}
                >
                    <Typography variant="subtitle2" component="p" marginRight={1.5} color={"#565861"}>
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
                    marginTop={3}>
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
                        alignItems: "center"
                    }}
                >
                    <Image
                        src="https://irancell.ir/wp-content/uploads/2023/01/My-Irancell-FA-1.svg"
                        width={52}
                        height={52}
                        alt="Picture of user icon"
                    />
                    <Box
                        sx={{
                            marginRight: 1,
                        }}
                    >
                        <Typography variant="subtitle2" component="p" marginBottom={0.5}>
                            ایرانسل
                        </Typography>
                        <Typography variant="subtitle2" component="p" color={"#666666"}>
                            دارد (3G/4G/LTE)
                        </Typography>
                    </Box>
                </Box>
                <Box
                    marginRight={24}
                    sx={{
                        marginTop: 3,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Hamrahe_Aval_logo.png/250px-Hamrahe_Aval_logo.png"
                        alt="Picture of user icon"
                        className={styles.icon}
                    />
                    <Box
                        sx={{
                            marginRight: 1,
                        }}
                    >
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
                    borderBottomWidth: "thin"
                }}
            />
            <Box
                sx={{
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <img
                    src="https://www.shab.ir/images/product/disablePersons.svg?w=64&q=75"
                    alt="Picture of user icon"
                />
                <Box
                    sx={{
                        marginRight: 1,
                    }}
                >
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
                    borderBottomWidth: "thin"
                }}
            />
        </Container>
    </>

export default HouseShow;
