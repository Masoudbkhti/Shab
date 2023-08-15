import { getLocalData } from "@/json/lib/localdata";
import Reserve from "@/src/components/HousesComponents/Reserve";
import Rules from "@/src/components/HousesComponents/Rules";
import Comments from "@/src/components/HousesComponents/Comments";
import HouseShow from "@/src/components/HousesComponents/HouseShow/HouseShow";
import CommentRate from "@/src/components/HousesComponents/CommentRate";
import SingleComment from "@/src/components/HousesComponents/SingleComment";
import UnderTopBannerNormal from "@/src/components/HousesComponents/UnderTopBannerNormal";
import { Box, Container } from "@mui/material";
import ImageListModal from "@/src/components/HousesComponents/ImageList/ImageListModal";
import React from "react";
import NavbarRes from "@/src/components/HousesComponents/HouseShow/NavbarRes";

export default async function Page({ params }) {
  const data = await getLocalData();

  const filteredData = data.residence.filter((res) => res.id == params.resId);

  return (
    <>
      <Box sx={{ marginTop: "76px", backgroundColor: "#fff" }}>
        <ImageListModal data={filteredData[0]} />
        <NavbarRes />
        <Container>
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
                sm: "column",
                md: "row",
                lg: "row",
              },
              justifyContent: {
                xs: "flex-start",
                sm: "space-between",
                md: "space-between",
                lg: "space-between",
              },
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "60%",
                },
              }}
            >
              <HouseShow
                data={filteredData[0]}
                citydata={data.cities}
                resdata={data.residence}
              />
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
                position: "sticky",
                top: "0",
                left: "0",
                marginY: { xs: "10px" },
              }}
            >
              <Reserve data={filteredData[0]} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
