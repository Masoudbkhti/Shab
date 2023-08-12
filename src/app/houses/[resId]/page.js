import { getLocalData } from "@/json/lib/localdata";
import Reserve from "@/src/components/HousesComponents/Reserve";
import Rules from "@/src/components/HousesComponents/Rules";
import Comments from "@/src/components/HousesComponents/Comments";
import HouseShow from "@/src/components/HousesComponents/HouseShow/HouseShow";
import CommentRate from "@/src/components/HousesComponents/CommentRate";
import SingleComment from "@/src/components/HousesComponents/SingleComment";
import UnderTopBannerNormal from "@/src/components/HousesComponents/UnderTopBannerNormal";
import { Box } from "@mui/material";
// import styles from "./../../../components/HousesComponents/HouseShow/house.module.css";
import ImageListModal from "@/src/components/HousesComponents/ImageList/ImageListModal";
import React from "react";
import Navbar from "/src/components/HousesComponents/HouseShow/Navbar";
export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
  return (
    <>
      <Box sx={{ marginTop: "76px", backgroundColor: "#fff" }} >
        <ImageListModal data={filteredData[0]} />
        <Navbar/>
        <Box
          // className={styles.BoxScroller}
          sx={{
            display: "flex",
            // height: { sm: "600px" },
            // overflow: { sm: "hidden" },
            // overflowY: { sm: "scroll" },
            // boxSizing: { sm: "content-box" },
            position: "relative",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: {
              xs: "flex-start",
              sm: "space-between",
            },
            padding: { sm: "0 24px" },
            marginX: { xs: "0", lg: "4%" },
            marginY: { sx: "16px", sm: "24px", md: "24px", lg: "24px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "calc(100% - 350px)" },
              // height: "100%",
              paddingLeft: { xs: "0", sm: "32px" },
            }}
          >
            <HouseShow data={filteredData[0]} citydata={data.cities} resdata={data.residence}/>
            <Rules />
            <Comments />
            <CommentRate />
            <SingleComment data={filteredData[0]} />
            <Box
              sx={{
                borderTop: 1,
                borderBottom: 1,
                borderColor: "#E6E7F2",
                padding: "6px 0",
              }}
            >
              <UnderTopBannerNormal />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "100%", sm: "350px" },
              position: "sticky",
              top: "0",
              left: "0",
            }}
          >
            <Reserve data={filteredData[0]} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
