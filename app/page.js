// import { Typography } from "@mui/material";
import Header from "./components/headerComponent/Header";
// import TopBanner from "./components/TopBanner";
import Navbar from "./components/headerComponent/Navbar";
import TopAccommodations from "./components/TopAccommodations";
import { getLocalData } from "@/json/lib/localdata";
export default async function Home() {
  const data = await getLocalData()
  return (
    <>
      <Header/>

      <TopAccommodations data={data}/>
      <Navbar/>
    </>
  );
}
