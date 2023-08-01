"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import Menu from "./Menu";
import MenuHeader from "./MenuHeader";
export default function MenuHeaderProvider({ data }) {
  const [fix, setFix] = useState(false);
  function setfixed() {
    if (window.scrollY >= 90) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  useEffect(()=>{
  window.addEventListener("scroll", setfixed);
  },[])
  return (
    <>
      {fix ? (
        <>
          <Menu data={data} />
        </>
      ) : (
        <MenuHeader data={data} />
      )}
    </>
  );
}
