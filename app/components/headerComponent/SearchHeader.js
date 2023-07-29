"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "@/redux/SearchSlice";
import { OpenModal } from "@/redux/ModalSearchSlice";
import { Box, Button } from "@mui/material";
import styled from "./header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import SearchModal from "./SearchModal";
import SearchModalHeader from "./SearchModalHeader";
export default function SearchHeader({ data }) {
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
    window.addEventListener("scroll", setfixed);
  return (
    <>
      {fix && (
        <form
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
                border : "none",
                outline : "none",
                width: "100%",
                height: "56px",
                borderRadius: "30px",
                paddingRight: "50px",
              }}
              onChange={(event) => dispatch(setValue(event.target.value))}
              onFocus={() => dispatch(OpenModal(true))}
            />
          </Box>
          <Button
            className={styled.bottomInput}
            onClick={() => dispatch(setValue(value))}
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
          <SearchModalHeader data={data} />
        </form>
      )}
    </>
  );
}
