import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'

export default function Antenna({ imageUrl }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "70px",
      }}
    >
      <Image
        src={imageUrl}
        width={30}
        height={30}
        style={{borderRadius : "6px"}}
        alt="Picture of the author"
      />
      <Typography variant="body2" color="initial">
        دارد
      </Typography>
    </Box>
  );
}
