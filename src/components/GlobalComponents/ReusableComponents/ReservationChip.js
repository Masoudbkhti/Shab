import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";

export default function ReservationChip() {
  return (
    <Box
      p="2px 8px"
      borderRadius={3}
      width={80}
      sx={{
        backgroundColor: "warning.light",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <BoltIcon color="warning" fontSize="8px" />
      <Typography variant="caption" color="warning.main">
        رزرو آنی
      </Typography>
    </Box>
  );
}
