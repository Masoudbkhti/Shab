import Header from "./components/headerComponent/Header";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/headerComponent/Navbar";
import { getLocalData } from "@/json/lib/localdata";
import TopResidence from "./components/TopResidence";
import Footer from "./components/footerComponent/Footer";
import PopularCity from "@/app/components/PopularCity/PopularCity";
import Slider from "./components/Slider";
import PhotoList from "./components/PhotoList";

export default async function Home() {
    const data = await getLocalData();
    return (
        <>
            <Header/>
            <TopBanner/>
            <PopularCity/>
            <TopResidence data={data}/>
            <Footer/>
            <Navbar/>
        </>
    );
}
