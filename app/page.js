import { Typography } from "@mui/material";
import Header from "./components/headerComponent/Header";
import TopBanner from "./components/TopBanner";
import UnderTopBanner from "./components/UnderTopBanner";
import Navbar from "./components/headerComponent/Navbar";
import TopResidence from "./components/TopResidence";
import { getLocalData } from "@/json/lib/localdata";
import Footer from "./components/footerComponent/Footer";
export default async function Home() {
const data = await getLocalData()
  return (
    <>
      <Header data={data}/>
      <TopBanner/>
      {/* <UnderTopBanner/> */}
      <TopResidence data={data} />
      <Footer />
      <Navbar />
    </>
  );
}
