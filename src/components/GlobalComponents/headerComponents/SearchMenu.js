"use client";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "@/src/redux/features/SearchSlice"; 
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import style from "./header.module.css";
import { useRouter } from "next/navigation";
import IsNotDefindSearch from "../ReusableComponents/IsNotDefindSearch";
export default function SearchMenu({ data }) {
  const value = useSelector((state) => state.SearchTerm);
  const dispatch = useDispatch();
  const [isNotDefind, setIsNotDefind] = useState(false);
  const router = useRouter();
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
  const handleClick = () => {
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
    <form
      onSubmit={submitHandler}
      className={style.searchMenuBox}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "380px",
          borderRadius: "30px",
          border: "1px solid #D2D3E1",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          placeholder="نام شهر"
          type="text"
          value={value}
          className={style.SearchInputMenu}
          style={{
            width: "100%",
            height: "46px",
            border: "none",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            paddingRight: "50px",
            outline: "none",
            borderLeft: "1px solid #D2D3E1",
          }}
          onChange={(event) => dispatch(setValue(event.target.value))}
        />
        <SearchIcon
          onClick={handleClick}
          color="info"
          sx={{ margin: "0 10px 0 18px", cursor: "pointer" }}
        />
      </Box>
      {isNotDefind && <IsNotDefindSearch style={style.modalSearchMenu} />}
    </form>
  );
}
