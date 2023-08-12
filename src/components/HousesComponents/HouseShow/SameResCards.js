import {Paper, Typography, Box} from "@mui/material";
import React from "react";
import ReservationChip from "/src/components/GlobalComponents/ReusableComponents/ReservationChip";
import './samerescard.css'
import Link from "next/link";

export default function SameResCards({img, price, type, room, title, fastreserve, location, id}) {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + "...";
        }
    };
    return (
        <Box>
            <Paper elevation={0} className="paper"
                   sx={{
                       display: "flex", flexDirection: "column",
                   }}>

                <Box
                    sx={{
                        backgroundColor: "red",
                        width: "214px",
                        height: "125px",
                        borderRadius: "8px",
                        display: "flex",
                        cursor: "pointer"
                    }}
                >
                    <img src={img} alt="residence-image" className="img"/>
                </Box>
                <Box

                    height={"120px"}
                    sx={{
                        textAlign: "right",
                        cursor: "pointer"
                    }}
                >

                    <Typography variant="body1" component="p" color={"#767676"} lineHeight={"30px"}>
                        {type}، {room} اتاق، {location}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                    >
                        <Link href={`/houses/${id}`}>
                            <Typography variant="body1" component="h1" color={"#080a1a"} fontWeight={"700"}
                                        lineHeight={"33px"}>
                                {truncateText(title, 24)}
                            </Typography>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                    >
                        <Typography variant="body2" component="p" color={"#484848"} lineHeight={"30px"}>
                            هر شب از
                        </Typography>
                        <Typography variant="body1" component="p" color={"#080a1a"} fontWeight={"700"}
                                    lineHeight={"30px"}>
                            {price}
                        </Typography>
                        <Typography variant="body2" component="p" color={"#484848"} lineHeight={"30px"}>
                            تومان
                        </Typography>
                    </Box>
                    <Box>
                        {fastreserve && <ReservationChip/>}
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
// <Grid item>
//     {/*<Paper elevation={0} square sx={{width: "100%", height: "300px", display: "flex"}}>*/}
//     {/*    <Box*/}
//     {/*        // bgcolor={"red"}*/}
//     {/*        className="Card"*/}
//     {/*    >*/}
//     {/*        <Box>*/}
//     {/*            <img src={img} alt="cover" className="same-img"/>*/}
//     {/*        </Box>*/}
//     {/*        <Box*/}
//     {/*            sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "right"}}*/}
//     {/*        >*/}
//     {/*            <Typography variant="body2" component="p" color={"#767676"}>*/}
//     {/*                {type}، {room} اتاق، {location}*/}
//     {/*            </Typography>*/}
//
//     {/*            <Typography variant="body1" component="h3" color={"#080a1a"} fontWeight={"700"}>*/}
//     {/*                {title}*/}
//     {/*            </Typography>*/}
//     {/*            <Box*/}
//     {/*                sx={{*/}
//     {/*                    display: "flex",*/}
//     {/*                    justifyContent: "space-between",*/}
//     {/*                    marginTop: "5px",*/}
//     {/*                }}*/}
//     {/*            >*/}
//     {/*                <Typography*/}
//     {/*                    color="secondary"*/}
//     {/*                    variant="body1"*/}
//     {/*                    component="p"*/}
//     {/*                    sx={{ fontWeight: "bold" }}*/}
//     {/*                >*/}
//     {/*                    هر شب از*/}
//     {/*                </Typography>*/}
//     {/*                <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>*/}
//     {/*                    <Typography variant="h6" component="h6" color="secondary">*/}
//     {/*                        {price}*/}
//     {/*                    </Typography>*/}
//     {/*                    <Typography*/}
//     {/*                        color="secondary.light"*/}
//     {/*                        variant="body1"*/}
//     {/*                        component="p"*/}
//     {/*                    >*/}
//     {/*                        تومان*/}
//     {/*                    </Typography>*/}
//     {/*                </Box>*/}
//     {/*            </Box>*/}
//     {/*            <Box>*/}
//     {/*                {fastreserve && <ReservationChip/>}*/}
//     {/*            </Box>*/}
//     {/*        </Box>*/}
//     {/*    </Box>*/}
//     {/*</Paper>*/}
//     <Paper elevation={0} square sx={{width: "100%", height: "300px"}}>
//         <Box>
//             <img src={img} alt="cover" className="same-img"/>
//         </Box>
//         <Box
//             sx={{
//                 padding: "10px",
//                 height: "190px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//             }}
//         >
//             <Box sx={{display: "flex"}}>
//                 <Typography variant="body1" component="p" color={"#767676"} textAlign={"right"}>
//                     {type}، {room} اتاق، {location}
//                 </Typography>
//             </Box>
//             <Typography
//                 variant="subtitle1"
//                 component="h6"
//                 color="secondary"
//                 sx={{marginBottom: "10px"}}
//                 padding="2px 0"
//                 whiteSpace="nowrap"
//                 overflow="hidden"
//                 textOverflow="ellipsis"
//                 textAlign={"right"}
//             >
//                 {truncateText(title, 40)}
//             </Typography>
//             <Box sx={{display: "flex", gap: "10px", marginY: "10px"}}>
//                 {fastreserve && <ReservationChip/>}
//             </Box>
//             <Box
//                 sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginTop: "5px",
//                 }}
//             >
//                 <Typography
//                     color="secondary"
//                     variant="body1"
//                     component="p"
//                     sx={{fontWeight: "bold"}}
//                 >
//                     هر شب از
//                 </Typography>
//                 <Box sx={{display: "flex", gap: "10px", alignItems: "center"}}>
//                     {oldprice && (
//                         <Typography
//                             variant="h6"
//                             component="h6"
//                             color="secondary.disabled"
//                             sx={{textDecoration: "line-through"}}
//                         >
//                             {oldprice}
//                         </Typography>
//                     )}
//                     <Typography variant="h6" component="h6" color="secondary">
//                         {price}
//                     </Typography>
//                     <Typography
//                         color="secondary.light"
//                         variant="body1"
//                         component="p"
//                     >
//                         تومان
//                     </Typography>
//                 </Box>
//             </Box>
//         </Box>
//     </Paper>
// </Grid>
