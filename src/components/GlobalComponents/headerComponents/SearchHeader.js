"use client";
import { setValue } from "@/src/redux/features/SearchSlice";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import styled from "./header.module.css";
import IsNotDefindSearch from "../ReusableComponents/IsNotDefindSearch";
import styles from "./header.module.css"
import { useState } from "react";
export default function SearchHeader({ data }) {
  const router = useRouter();
  const value = useSelector((state) => state.SearchTerm);
  const [isNotDefind,setIsNotDefind] = useState(false)
  const dispatch = useDispatch();
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
          {isNotDefind && (
            <IsNotDefindSearch style={styles.modalSearchHeader} />
          )}
        </Box>
        <button
          type="submit"
          className={styled.bottomInput}
          style={{
            width: "260px",
            height: "56px",
            borderRadius: "50px",
            marginRight: "24px",
            backgroundColor: "#4156d9",
            cursor: "pointer",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography variant="h6" color="primary" component="h6">
            جستجو
          </Typography>
        </button>
      </form>
    </>
  );
}
