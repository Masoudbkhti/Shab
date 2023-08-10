import {Box, Typography} from "@mui/material";
import React from "react";

const SameHouses = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "start",
                }}
            >
                <Typography variant="h6" component="h2" fontWeight={"bold"}>
                    اقامتگاه های مشابه
                </Typography>
                {/*<SameResidence/>*/}
            </Box>
        </>
    )
}
export default SameHouses;