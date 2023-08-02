import { Typography } from "@mui/material";
import Header from "./components/headerComponent/Header";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/headerComponent/Navbar";
import { getLocalData } from "@/json/lib/localdata";
import Slider from "./components/Slider";

export default async function Home() {
  const data = await getLocalData() 

  return (
    <>
      <Header/>
      <Slider data={data} />
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Typography variant="body" component="h2">
        سلام
      </Typography>
      <Navbar />
    </>
  );
}
