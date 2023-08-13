import React, { useState } from "react";
import { Typography } from "@mui/material";

const ShowMoreLess = ({ text }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore ? (
        <Typography variant="subtitle2" component="p" color="secondary">
          {text}
        </Typography>
      ) : (
        <Typography variant="subtitle2" component="p" color="secondary">
          {`${text.substring(0, 100)}` + "..."}
        </Typography>
      )}
      <Typography
        variant="subtitle2"
        component="p"
        color="secondary"
        sx={{ marginTop: "20px", color: "blue", cursor: "pointer" }}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
      </Typography>
    </>
  );
};

export default ShowMoreLess;
