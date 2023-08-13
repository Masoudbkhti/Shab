import React, { useState } from "react";
import { Typography } from "@mui/material";

const ShowMoreLess = ({ text }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore ? (
        <Typography
          variant="subtitle2"
          component="p"
          color="secondary"
          sx={{ lineHeight: "31px" }}
        >
          {text}
        </Typography>
      ) : (
        <Typography
          variant="subtitle2"
          component="p"
          color="secondary"
          sx={{ lineHeight: "31px" }}
        >
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
