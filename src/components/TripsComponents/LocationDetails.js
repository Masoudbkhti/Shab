import { Box, Typography } from "@mui/material";
import React from "react";
import TripsBoxIcon from "./TripsBoxIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./Trip.module.css";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
export default function LocationDetails() {
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
            src="https://s3gw.at.shab.cloud/production/houses/photos/2023/5/6/1/86752/house-86752-2023-05-11-03-42-38-359aed10da3a64061752e7a43dbe7a3ef55255c0-461162.jpg"
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
              variant="body2"
              color="primary"
              sx={{ marginLeft: "8px" }}
            >
              کد آگهی
            </Typography>
            <Typography variant="body2" color="primary">
              1422
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
              title="کرج البرز"
            />
            <Typography variant="h6" color="secondray" sx={{}}>
              ویلای مدرن و نو ساز .............................
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
                <Typography variant="body1" color="secondary">
                  1402/07/12
                </Typography>
                <Typography variant="body2" color="secondary.light">
                  ساعت 15:00:00
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" color="secondary">
                  1402/07/12
                </Typography>
                <Typography variant="body2" color="secondary.light">
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
