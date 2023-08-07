import Header from "./components/headerComponent/Header";
import TopBanner from "./components/TopBanner";
import TopResidence from "./components/TopResidence";
import Navbar from "./components/headerComponent/Navbar";
import {getLocalData} from "@/json/lib/localdata";
import Footer from "./components/footerComponent/Footer";
import PopularCity from "@/app/components/PopularCity/PopularCity";
import Slider from "./components/Slider";

export default async function Home() {
    const data = await getLocalData();
    return (
        <>
            <Header data={data}/>
            <TopBanner/>
            <PopularCity data={data}/>
            <TopResidence data={data}/>
            {/* <Footer /> */}
            <Navbar/>
        </>
    );
}
