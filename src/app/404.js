import Link from "next/link";
import React from "react"
import Menu from "/src/components/GlobalComponents/headerComponents/Menu";
import Footer from "src/components/GlobalComponents/footerComponents/Footer";

const NotFound = () => {
    return (
        <>
            <Menu/>
            <div className="not-found">
                <h1>یافت نشد!</h1>
                <h2>صفحه مورد نظر شما یافت نشد.</h2>
                <h3>پیشنهادهای ما برای شما:</h3>
                <Link href="/"><a>صفحه ی اصلی</a></Link>
                <Link href="/search/city/"><a>صفحه ی جست و جو</a></Link>
                <Link href="/houses/"><a>صفحه ی اقامتگاه ها</a></Link>
            </div>
            <Footer/>
        </>
    )
}
export default NotFound;