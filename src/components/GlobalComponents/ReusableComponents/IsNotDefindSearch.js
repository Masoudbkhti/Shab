import { Box, Typography } from "@mui/material";
import React from "react";
export default function IsNotDefindSearch({style}) {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" , alignItems :"center"}}>
      <Box className={style}>
        <Typography variant="subtitle2" color="secondary">
          جستجو یافت نشد.
        </Typography>
      </Box>
    </Box>
  );
}
