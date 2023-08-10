import React, { useState } from "react";
import { Typography } from "@mui/material";

const ShowMoreLess = ({ text }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore ? text : `${text.substring(0, 100)}`}
      <Typography
        variant="body1"
        sx={{ marginTop: "20px", color: "blue", cursor: "pointer" }}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
      </Typography>
    </>
  );
};

export default ShowMoreLess;