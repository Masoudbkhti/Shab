"use client";
import { setValue } from "@/redux/SearchSlice";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import styled from "./header.module.css";
export default function SearchHeader({ data }) {
    const router = useRouter();
  const value = useSelector((state) => state.SearchTerm);
  const dispatch = useDispatch();
  const [fix, setFix] = useState(false);
  function setfixed() {
    if (window.scrollY <= 90) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
     useEffect(()=>{
  window.addEventListener("scroll", setfixed);
     },[])
      const submitHandler = (e) => {
        e.preventDefault();
        router.push(`/search/city/${value}`);

      };
      const handleClick = () => {
        dispatch(setValue(value));
        router.push(`/search/city/${value}`);
      };
  return (
    <>
      {fix && (
        <form
          onSubmit={submitHandler}
          className={styled.SearchInputBox}
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
              type="text"
              value={value}
              className={styled.SearchInput}
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                height: "56px",
                borderRadius: "30px",
                paddingRight: "50px",
              }}
              onChange={(event) => dispatch(setValue(event.target.value))}
            />
          </Box>
          <Button
            className={styled.bottomInput}
            onClick={handleClick}
            variant="contained"
            color="info"
            sx={{
              width: "200px",
              height: "56px",
              borderRadius: "50px",
              marginRight: "40px",
              display: { xs: "none", md: "flex" },
            }}
          >
            جستجو
          </Button>
        </form>
      )}
    </>
  );
}
