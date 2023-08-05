import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import popular from "@/json/db.json";
import CityCards from "@/app/components/PopularCity/CityCards";

const PopularCity = () => {
    return (
        <>
            <Box
                backgroundColor="info.light"
                sx={{ with: "100%", padding: "15px 0" }}
            >

                <Container
                    sx={{marginY: 1}}
                >
                    <>
                        <Paper
                            variant="outlined"
                            sx={{borderRadius: '8px'}}
                        >
                            <Box
                                marginY={4}
                                paddingX={2}
                            >
                                <Typography variant="h6" component="h1" fontWeight="bold" marginY={1}>
                                    اجاره ویلا در شهر های پر بازدید
                                </Typography>
                                <Grid container spacing={3}>
                                    {popular.cities.map((tour, index) =>
                                        <CityCards tour={tour} key={index}/>
                                    )}
                                </Grid>
                            </Box>
                        </Paper>
                    </>
                </Container>
            </Box>
        </>
    )
}
export default PopularCity;