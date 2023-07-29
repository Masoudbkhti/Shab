import { Box, Typography } from '@mui/material'
import React from 'react'
import StarSharpIcon from "@mui/icons-material/StarSharp";

export default function Rate() {
  return (
    <Box
      p="2px 8px"
      borderRadius={1}
      width={56}
      sx={{
        backgroundColor: "info.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="caption" color="primary" pt="4px">
        4.6
      </Typography>
      <StarSharpIcon fontSize="8px" color="primary" />
    </Box>
  );
}
