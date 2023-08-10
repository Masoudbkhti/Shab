import Image from "next/image";
import disablePersons from "@/src/assets/icons/disablePersons.svg";
import {Box, Typography} from "@mui/material";
import React from "react";

const OldPeople = () => {
    return (
        <>
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
                    <Typography variant="body1" component="p" fontWeight={"600"} display={"flex"} alignItems={"flex-start"}>
                        مناسب سالمندان و معلولین
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                        شرایط این اقامتگاه مناسب پذیرش سالمندان و معلولین است.
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
export default OldPeople;