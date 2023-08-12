import Header from "../components/GlobalComponents/headerComponents/Header";
import TopBanner from "../components/HomeComponents/topBanner/TopBanner";
import TopResidence from "../components/HomeComponents/topResidence/TopResidence";
import Navbar from "../components/GlobalComponents/StickyComponents/Navbar";
import { getLocalData } from "@/json/lib/localdata";
import PopularCity from "../components/HomeComponents/PopularCity/PopularCity";
import Slider from "../components/HomeComponents/AroundTrips/Slider";
import { Box } from "@mui/material";
export default async function Home() {
  const data = await getLocalData();
  return (
    <>
      <Header data={data} />
      <Box sx={{  margin: "0 auto", bgcolor: "#F9F9F9", width:"100%" }}>
        <TopBanner />
      </Box>
        <Slider data={data} />
        <PopularCity data={data} />
        <TopResidence data={data} />
      <Navbar />
    </>
  );
}
