"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import styled from "./../headerComponents/header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "@/src/redux/features/SearchSlice";
import IsNotDefindSearch from "../ReusableComponents/IsNotDefindSearch";
export default function SearchBarSticky({ data }) {
  const value = useSelector((state) => state.SearchTerm);
  const dispatch = useDispatch();
  const [prevScrollPos, setPrevScrollPos] = useState(300);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isNotDefind, setIsNotDefind] = useState(false);

  const router = useRouter();

  const [fix, setFix] = useState(false);
  function setfixed() {
    if (window.scrollY >= 90) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setfixed);
    return () => window.removeEventListener("scroll", setfixed);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setShowSearchBar(false);
      } else if (currentScrollPos < prevScrollPos || currentScrollPos <= 50) {
        setShowSearchBar(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      const findValue = data.cities.find((city) => city.name == value);
      if (findValue) {
        router.push(`/search/city/${value}`);
        dispatch(setValue(""));
      } else {
        setIsNotDefind(true);
        setTimeout(() => {
          setIsNotDefind(false);
          dispatch(setValue(""));
        }, 3000);
      }
    }
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className={`${styled.SearchInputBoxSticky} 
      ${showSearchBar && fix && styled.fixinput}
        ${!fix && !showSearchBar && styled.Hidden}`}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          className={`${styled.SearchInputGroup} `}
          sx={{ position: "relative", width: "100%", borderRadius: "30px" }}
        >
          <SearchIcon
            color="secondary"
            sx={{ position: "absolute", right: "20px", top: "15px" }}
          />
          <input
            placeholder="نام شهر"
            type="search"
            value={value}
            className={`${styled.SearchInput}`}
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              height: "56px",
              borderRadius: "30px",
              padding: " 0 50px 0 20px",
            }}
            onChange={(event) => dispatch(setValue(event.target.value))}
          />
          {isNotDefind && (
            <IsNotDefindSearch style={styled.modalSearchSticky} />
          )}
        </Box>
      </form>
    </>
  );
}
