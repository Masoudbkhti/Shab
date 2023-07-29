// "use client"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "@/redux/SearchSlice";
import { OpenModal} from "@/redux/ModalSearchSlice";
import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import style from "./header.module.css";
import SearchModal from "./SearchModal";
// import SearchModal from "./SearchModal";
export default function SearchMenu({data}) {
  const value = useSelector((state) => state.SearchTerm);
  const dispatch = useDispatch();
  return (
    <form
    className={style.searchMenuBox}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
          onFocus={() => dispatch(OpenModal(true))}
        />
        <SearchIcon
          onClick={() => dispatch(setValue(value))}
          color="info"
          sx={{ margin: "0 10px 0 18px", cursor: "pointer" }}
        />
      </Box>
      <SearchModal data={data} />
    </form>
  );
}
