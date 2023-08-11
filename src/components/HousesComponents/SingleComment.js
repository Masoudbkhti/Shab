// 'use client';
import { getLocalData } from "@/json/lib/localdata";
import { Box } from "@mui/material";
import SingleCommentSwiped from "./SingleCommentSwiped";


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
