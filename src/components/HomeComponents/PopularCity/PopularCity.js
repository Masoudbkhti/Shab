
import {Box, Paper, Typography} from "@mui/material";
import PopularSlider from "./PopularSlider";

const PopularCity = () => {
    return (
        <>
            <Box
                backgroundColor="info.light"
                sx={{ width: "100%", padding: "15px 0" }}
            >
                        <Paper
                            variant="outlined"
                            elevation={1}
                            sx={{borderRadius: '8px', marginY:"20px", marginX:"76px"}}
                        >
                            <Box
                                sx={{
                                    margin: { xs: "0", sm: "0 5%" },
                                    // backgroundColor : "red",
                                    height: { xs: "auto", md: "470px" },
                                    display: "flex",
                                    width: "100%",
                                    flexDirection: {
                                        xs: "column",
                                        md: "column",
                                    },
                                }}
                            >
                                <Typography variant="h6" component="h1" fontWeight="bold" marginY={1}>
                                    اجاره ویلا در شهر های پر بازدید
                                </Typography>
                                <PopularSlider />
                            </Box>
                        </Paper>
            </Box>
        </>
    )
}
export default PopularCity;