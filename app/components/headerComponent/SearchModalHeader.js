import styles from "./header.module.css"
import React from "react";
import SearchModalStatic from "./SearchModalStatic";
import SearchModalDynamic from "./SearchModalDynamic";
import { useDispatch, useSelector } from "react-redux";
import { OpenModal } from "@/redux/ModalSearchSlice";
import { Stack } from "@mui/material";
export default function SearchModalHeader({ data }) {
  const isModal = useSelector((state) => state.ModalSearch);
  const dispatch = useDispatch();
  return (
    <>
      {isModal === true && (
        <Stack
        className={styles.modalHeader}
          spacing={2}
          padding={2}
          sx={{
            textAlign: "start",
            boxShadow: 2,
            position: "fixed",
            top: "250px",
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
    </>
  );
}
