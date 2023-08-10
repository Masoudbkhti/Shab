import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styles from "./Trip.module.css"

export default function ButtonTrips({ color, text, disable, className, icon }) {
  return (
    <button
      className={`${disable && styles.disableBtn} ${className}`}
      style={{
        border: "1px solid #E6E7F2",
        width: "50%",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "18px",
        margin: "0 4px",
        backgroundColor: "white",
        cursor: "pointer",
      }}
    >
      <Typography
        variant="subtitle2"
        component="h6"
        color={color ? color : "info.main"}
        sx={{ fontSize: { xs: ".9rem", sm: "1rem" } }}
      >
        {text}
      </Typography>
      {icon && icon}
    </button>
  );
}
