"use client";
import { setValue } from "@/redux/features/SearchSlice";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import styled from "./header.module.css";
import SearchBarSticky from "./SearchBarSticky";
export default function SearchHeader({ data }) {
  const router = useRouter();
  const value = useSelector((state) => state.SearchTerm);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      router.push(`/search/city/${value}`);
      dispatch(setValue(""));
    }
  };

  return (
    <>
      <SearchBarSticky />
      <form
        onSubmit={submitHandler}
        className={`${styled.SearchInputBox} 
        
        `}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          className={styled.SearchInputGroup}
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
            className={styled.SearchInput}
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
        </Box>
        <button
          type="submit"
          className={styled.bottomInput}
          style={{
            width: "200px",
            height: "56px",
            borderRadius: "50px",
            marginRight: "40px",
            backgroundColor: "#4156d9",
            cursor: "pointer",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography variant="body2" color="primary" component="h3">
            جستجو
          </Typography>
        </button>
      </form>
    </>
  );
}
