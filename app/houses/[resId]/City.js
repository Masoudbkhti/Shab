"use client";
import { Typography, Container } from "@mui/material";

export default function City({ data }) {
  return (
    <Container>
      <Typography>{data.title}</Typography>
    </Container>
  );
}
