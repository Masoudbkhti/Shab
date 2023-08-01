import Header from "./components/headerComponent/Header";
// import TopBanner from "./components/TopBanner";
import Navbar from "./components/headerComponent/Navbar";
import TopAccommodations from "./components/TopAccommodations";
import {getLocalData} from "@/json/lib/localdata";
import {Box} from "@mui/material";
import PopularCity from "@/app/components/PopularCity/PopularCity";

export default async function Home() {
    const data = await getLocalData()
    return (
        <>
            <Header/>
            <Box
                backgroundColor="info.light"
                paddingY={1}
            >
                <PopularCity/>
                <TopAccommodations data={data}/>
            </Box>
            <Navbar/>
        </>
    );
}
