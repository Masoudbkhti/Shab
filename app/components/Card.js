"use client";
import { Grid, Paper, Typography } from "@mui/material";
export default function Card({ img, name }) {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={img} alt={name} />
        <Typography>{name}</Typography>
      </Paper>
    </Grid>
  );
}
