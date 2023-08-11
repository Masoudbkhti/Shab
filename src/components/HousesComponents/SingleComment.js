// 'use client';
import { getLocalData } from "@/json/lib/localdata";
import { Box, Typography, Grid } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import UnderTopBanner from "../HomeComponents/topBanner/UnderTopBanner";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SingleCommentSwiped from "./SingleCommentSwiped";
// import Link from "next/link";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

export default async function SingleComment({ data }) {
  const commentdata = await getLocalData();
  const filteredData = commentdata.comments.filter(
    (item) => item.resid === data.id
  );
  return (
    <Box>
      <Box
        sx={{
          // display: { xs: "inline", sm: "block" },
          // display: "flex",
          gap: "20px",
          overflowX: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {filteredData.map((comment) => (
          <>
            <SingleCommentSwiped
              name={comment.name}
              date={comment.date}
              title={comment.title}
              description={comment.description}
            />
          </>
        ))}
      </Box>
    </Box>
  );
}
