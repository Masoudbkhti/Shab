import { Box, Typography } from "@mui/material";
import React from "react";
import TripsBoxIcon from "./TripsBoxIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./Trip.module.css";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
export default function LocationDetails({
  enterDate,
  exitDate,
  title,
  number,
  location,
  image,
}) {
  return (
    <>
      <Box className={styles.locationBox}>
        <Box
          className={styles.tripImg}
          sx={{
            width: "100%",
            height: "250px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
            src={image}
          />
          <Box
            sx={{
              padding: "0 16px",
              height: "34px",
              backgroundColor: "rgba(8, 10, 26, 0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              position: "absolute",
              bottom: "16px",
              right: "16px",
            }}
          >
            <Typography
              variant="subtitle2"
              component="h6"
              color="primary"
              sx={{ marginLeft: "8px" }}
            >
              کد آگهی
            </Typography>
            <Typography variant="subtitle2" component="h6" color="primary">
              {number}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            className={styles.AddressLocTrip}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              margin: "32px 0 16px 0",
            }}
          >
            <TripsBoxIcon
              icon={
                <LocationOnIcon
                  sx={{
                    color: "secondary.light",
                    fontSize: "1.2rem",
                    marginLeft: "8px",
                  }}
                />
              }
              title={location}
            />
            <Typography
              variant="subtitle1"
              component="h6"
              color="secondray"
              sx={{}}
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <TripsBoxIcon
              icon={
                <EventAvailableIcon
                  sx={{
                    color: "secondary.light",
                    fontSize: "1.2rem",
                    marginLeft: "8px",
                  }}
                />
              }
              title="تاریخ سفر"
            />
            <Box
              sx={{
                margin: "12px 0",
                width: "220px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" component="h6" color="secondary">
                  {enterDate}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h6"
                  color="secondary.light"
                >
                  ساعت 15:00:00
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" component="h6" color="secondary">
                  {exitDate}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="h6"
                  color="secondary.light"
                >
                  ساعت 18:00:00
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
