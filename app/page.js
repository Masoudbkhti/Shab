import { Typography } from "@mui/material";
import Header from "./components/headerComponent/Header";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/headerComponent/Navbar";
import { getLocalData } from "@/json/lib/localdata";
import TopResidence from "./components/TopResidence";
import Footer from "./components/footerComponent/Footer";
export default async function Home() {
  const data = await getLocalData()
  return (
    <>
      <Header/>
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
