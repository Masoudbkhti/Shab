"use client";
import { Paper, Typography } from "@mui/material";
export default function Card(img, name) {
  return (
    <Paper>
      <img src={img} />
      <Typography>{name}</Typography>
    </Paper>
  );
}
