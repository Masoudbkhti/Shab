import {Box, Paper, Typography} from "@mui/material";
// import CityCards from "@/app/components/PopularCity/CityCards";
import PopularSlider from "./PopularSlider";

const PopularCity = ({data}) => {
    return (
        <>
            <Box
                bgcolor={"info.light"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                justifyItems={"center"}

            >
                <Box
                    sx={{width: "90%", paddingTop:"24px"}}
                >
                    <Paper
                        variant="outlined"
                        sx={{borderRadius: '8px'}}
                    >
                        <Box
                            marginY={4}
                            paddingX={2}
                        >
                            <Typography variant="h6" component="h1" fontWeight="bold" marginRight={2}>
                                اجاره ویلا در شهر های پر بازدید
                            </Typography>
                            <PopularSlider data={data}/>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </>
    )
}
export default PopularCity;