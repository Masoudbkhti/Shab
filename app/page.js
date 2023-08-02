import { Typography } from "@mui/material";
import Header from "./components/headerComponent/Header";
import TopBanner from "./components/TopBanner";
// import TopBanner from "./components/TopBanner";
import UnderTopBanner from "./components/UnderTopBanner";
import Navbar from "./components/headerComponent/Navbar";
import { getLocalData } from "@/json/lib/localdata";
import TopResidence from "./components/TopResidence";
import Footer from "./components/footerComponent/Footer";
export default async function Home() {
  const data = await getLocalData()
import TopAccommodations from "../app/components/";
import {getLocalData} from "@/json/lib/localdata";
import {Box} from "@mui/material";
import PopularCity from "@/app/components/PopularCity/PopularCity";

export default function Home() {

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
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <TopResidence data={data} />
      <Footer />
      <Navbar />
    </>
  );
}
