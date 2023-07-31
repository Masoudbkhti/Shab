import Header from "./components/headerComponent/Header";
// import TopBanner from "./components/TopBanner";
import Navbar from "./components/headerComponent/Navbar";
import TopAccommodations from "./components/TopAccommodations";
import {getLocalData} from "@/json/lib/localdata";
import {Container, Typography, Paper, Box, Grid} from "@mui/material";
import popular from "@/json/db.json";
import CityCards from "@/app/components/PopularCity/CityCards";

export default async function Home() {
    const data = await getLocalData()
    return (
        <>
            <Header/>
            <Container sx={{marginY: 10}}>
                <>
                    <Paper variant="outlined">
                        <Box padding={2}>
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
            <TopAccommodations data={data}/>
            <Navbar/>
        </>
    );
}
