import Header from "./components/headerComponent/Header";
import TopBanner from "./components/TopBanner";
// import TopBanner from "./components/TopBanner";
import UnderTopBanner from "./components/UnderTopBanner";
import Navbar from "./components/headerComponent/Navbar";
import { getLocalData } from "@/json/lib/localdata";
import TopResidence from "./components/TopResidence";
import Footer from "./components/footerComponent/Footer";
import TopAccommodations from "../app/components/TopAccommodations";
import {Box} from "@mui/material";
import PopularCity from "@/app/components/PopularCity/PopularCity";

export default function Home() {
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
            <TopBanner/>
            <TopResidence data={data}/>
            <Footer/>
            <Navbar/>
        </>
    );
}