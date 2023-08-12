import Header from "../components/GlobalComponents/headerComponents/Header";
import TopBanner from "../components/HomeComponents/topBanner/TopBanner";
import TopResidence from "../components/HomeComponents/topResidence/TopResidence";
import Navbar from "../components/GlobalComponents/StickyComponents/Navbar";
import { getLocalData } from "@/json/lib/localdata";
import PopularCity from "../components/HomeComponents/PopularCity/PopularCity";
import Slider from "../components/HomeComponents/AroundTrips/Slider";
import { Box } from "@mui/material";
import Menu from "../components/GlobalComponents/headerComponents/Menu";
import SearchBarSticky from "../components/GlobalComponents/StickyComponents/SearchBarSticky";
export default async function Home() {
  const data = await getLocalData();
  if (!data) {
    throw new Error("مشکلی در دریافت داده ها به وجود آمده است.");
  }
  return (
    <>
      <Menu data={data} />
      <SearchBarSticky data={data} />

      <Header data={data} />
      {/* <TopBanner/> */}
      <Box
        sx={{
          // margin: "30px auto",
          maxWidth: "1700px",
        }}
      >
        <Box sx={{ margin: "0 auto", bgcolor: "#F9F9F9", width: "100%" }}>
          <TopBanner />
        </Box>
        <Slider data={data} />
        <PopularCity data={data} />
        <TopResidence data={data} />
        <Navbar />
      </Box>
    </>
  );
}
