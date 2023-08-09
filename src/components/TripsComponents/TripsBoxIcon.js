import React from 'react'
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Box, Typography } from '@mui/material';

export default function TripsBoxIcon({icon, title}) {
  return (
    <Box
      sx={{
        width: "140px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "4px",
      }}
    >
      {icon && icon}
      
    <Typography variant="body2" color="secondary.light">
      {title}
      </Typography>
    </Box>
  );
}
