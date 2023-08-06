"use client";
import { Typography, Box } from "@mui/material";

export default function Reserve({ data }) {
  const { price, oldprice } = data;
  return (
    <Box sx={{ borderRadius: "5px" }}>
      {data.oldprice ? (
        <Typography>قیمت هر شب از {oldprice} تومان</Typography>
      ) : (
        <Typography>قیمت هر شب از {price} تومان</Typography>
      )}
    </Box>
  );
}
