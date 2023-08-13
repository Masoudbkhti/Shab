import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1>یافت نشد!</h1>
        <h2>صفحه مورد نظر شما یافت نشد.</h2>
        <h3>پیشنهادهای ما برای شما:</h3>
        <Link href="/">صفحه ی اصلی</Link>
        <Link href="/search/city/">صفحه ی جست و جو</Link>
        <Link href="/houses/">صفحه ی اقامتگاه ها</Link>
      </div>
    </>
  );
};
export default NotFound;
