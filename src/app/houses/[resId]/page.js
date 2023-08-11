import { getLocalData } from "@/json/lib/localdata";
import Reserve from "@/src/components/HousesComponents/Reserve";
import Rules from "@/src/components/HousesComponents/Rules";
import Comments from "@/src/components/HousesComponents/Comments";
import HouseShow from "@/src/components/HousesComponents/HouseShow/HouseShow";
import CommentRate from "@/src/components/HousesComponents/CommentRate";
import SingleComment from "@/src/components/HousesComponents/SingleComment";
import { Box } from "@mui/material";
import styles from "./../../../components/HousesComponents/HouseShow/house.module.css";
import ImageListModal from "@/src/components/HousesComponents/ImageList/ImageListModal";
import NavTab from "@/src/components/HousesComponents/HouseShow/NavTab";
import React from "react";

export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
  return (
    <>
      <Box sx={{ marginTop: "80px", backgroundColor: "#fff" }}>
        <ImageListModal data={filteredData[0]} />
        <NavTab />
        <Box
          sx={{
            display: "flex",
            height: { sm: "600px" },
            overflow: { sm: "hidden" },
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: {
              
              xs: "flex-start",
              sm: "space-between",
            },
            // padding: {  sm: "0 24px" },
            marginX: { xs: "0", lg: "4%" },
          }}
        >
          <Box
            className={styles.BoxScroller}
            sx={{
              width: { xs: "100%", sm: "calc(100% - 350px)" },
              height: "100%",
              overflowY: { sm: "scroll" },
              boxSizing: { sm: "content-box" },
              paddingLeft: { xs: "0" },
            }}
          >
            <HouseShow data={filteredData[0]} />
            <Rules />
            <Comments />
            <CommentRate />
            <SingleComment data={filteredData[0]} />
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "400px",
              justifyContent: "center",
              width: { xs: "100%", sm: "350px" },
            }}
          >
            <Reserve data={filteredData[0]} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
