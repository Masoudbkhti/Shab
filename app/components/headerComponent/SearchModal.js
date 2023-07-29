// "use client";
import styles from "./header.module.css"
import React from "react";
import SearchModalStatic from "./SearchModalStatic";
import SearchModalDynamic from "./SearchModalDynamic";
import { useDispatch, useSelector } from "react-redux";
import { OpenModal } from "@/redux/ModalSearchSlice";
import { Stack } from "@mui/material";
export default function SearchModal({ data }) {
  const isModal = useSelector((state) => state.ModalSearch);
  const dispatch = useDispatch();
  return (
    <>
      {isModal === true && (
        <Stack
          className={styles.modalmenu}
          spacing={2}
          // width={300}
          padding={2}
          sx={{
            textAlign: "start",
            boxShadow: 2,

            position: "fixed",
            top: "80px",

            borderRadius: "5px",
            backgroundColor: "white",
            cursor: "auto",
          }}
        >
          {isModal}
          <SearchModalStatic data={data.cities} />
          <SearchModalDynamic data={data.cities}></SearchModalDynamic>
        </Stack>
      )}
      {/* <Stack
        spacing={2}
        width={300}
        padding={2}
        sx={{
          textAlign: "start",
          zIndex: "modal",
          boxShadow: 2,
          position: "absolute",
          left: "24px",
          top: "60px",
          borderRadius: "5px",
          backgroundColor: "white",
          cursor: "auto",
        }}
        className={`${isModal ? "show" : "hide"}`}
      >
        <SearchModalStatic data={data.cities} />
        <SearchModalDynamic data={data.cities}></SearchModalDynamic>
      </Stack> */}
    </>
  );
}
