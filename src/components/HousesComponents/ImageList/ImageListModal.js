"use client";
import {Box} from "@mui/material";
import styles from "./../../HousesComponents/HouseShow/house.module.css";
import React, {useState} from "react";
import "./Slider.css";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import ImageList from "./ImageList";
import ModalShare from "./ModalShare";

export default function ImageListModal({data}) {
    const arrOfImageData = Object.entries(data.image).map(([key, value]) => ({
        key,
        value,
    }));
    const [state, setState] = useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };
    state.bottom
        ? document.body.classList.add("modal-open")
        : document.body.classList.remove("modal-open");
    const list = (anchor) => (
        <Box
            id="image"
            sx={{
                // height: "600px",
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box
                sx={{
                    height: "80px",
                    backgroundColor: "#F4F4F4",
                    width: "100%",
                    position: "fixed",
                    top: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.2)",
                    padding: "0 24px",
                }}
            >
                <CloseIcon color="secondary" onClick={toggleDrawer("bottom", false)}/>
                <ModalShare/>
            </Box>
            <Box
                sx={{
                    marginTop: "80px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    padding: "24px 32px",
                }}
            >
                {arrOfImageData.map((image, index) => {
                    if (index % 3 === 0) {
                        return (
                            <img
                                className={styles.AlbumBigImg}
                                src={image.value}
                                alt="bigAlbum"
                                style={{
                                    width: "100%",
                                    maxWidth: "708px",
                                    height: "400px",
                                    objectFit: "cover",
                                    marginBottom: "8px",
                                    borderRadius: "8px",
                                }}
                            />
                        );
                    } else {
                        return (
                            <img
                                className={styles.AlbumSmallImg}
                                src={image.value}
                                alt="smallAlbum"
                                style={{
                                    width: "50%",
                                    maxWidth: "350px",
                                    height: "400px",
                                    objectFit: "cover",
                                    margin: "0 4px 8px 4px",
                                    borderRadius: "8px",
                                }}
                            />
                        );
                    }
                })}
            </Box>
        </Box>
    );
    return (
        <>
            <ImageList
                dataImage={data}
                data={arrOfImageData}
                toggleDrawer={toggleDrawer}
            />
            <Drawer
                anchor="bottom"
                open={state["bottom"]}
                onClose={toggleDrawer("bottom", false)}
            >
                {list("bottom")}
            </Drawer>
        </>
    );
}
