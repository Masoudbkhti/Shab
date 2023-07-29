import { Box, Grid , Typography} from '@mui/material'
import React from 'react'
import Antenna from './Antenna';


export default function AntennaStatus() {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={8}
      sx={{ border: 1, borderLeft: 0, borderRight: 0, borderColor: "#E6E7F2" }}
    >
      <Typography variant="body1" color="secondary">
        وضعیت آنتن دهی
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "160px",
        }}
      >
        <Antenna imageUrl="/../public/assets/images/irancell.webp"></Antenna>
        <Antenna imageUrl="/../public/assets/images/hamrahAval.jpg"></Antenna>
      </Box>
    </Grid>
  );
}
