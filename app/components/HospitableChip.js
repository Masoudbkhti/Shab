import { Box, Chip, Typography } from "@mui/material";
import React from "react";
// import StarsIcon from "@mui/icons-material/Stars";
export default function HospitableChip() {
  return (
    <Box
      p="2px 8px"
      borderRadius={3}
      width={92}
      sx={{
        backgroundColor: "info.light",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <StarsIcon color="info" fontSize="8px" />
      <Typography variant="caption" color="info.main">
        مهمان نواز
      </Typography>
    </Box>
  );
}
