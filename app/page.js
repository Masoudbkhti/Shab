import { Typography } from "@mui/material";
import Header from "./components/headerComponent/Header";
import TopBanner from "./components/TopBanner";
import UnderTopBanner from "./components/UnderTopBanner";
import TopResidence from "./components/TopResidence";
import Navbar from "./components/headerComponent/Navbar";
export default function Home() {

  return (
    <>
      <Header/>
      <TopBanner/>
      <UnderTopBanner/>
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
