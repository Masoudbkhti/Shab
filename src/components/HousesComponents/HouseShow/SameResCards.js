import { Paper, Typography, Box } from "@mui/material";
import React from "react";
import ReservationChip from "/src/components/GlobalComponents/ReusableComponents/ReservationChip";
import "./samerescard.css";
import Link from "next/link";

export default function SameResCards({
  img,
  price,
  type,
  room,
  title,
  fastreserve,
  location,
  id,
}) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };
  return (
    <Box>
      <Paper
        elevation={0}
        className="paper"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            borderRadius: "8px",
            cursor: "pointer",
            height: "125px",
            width: "215px",
          }}
        >
          <img src={img} alt="residence-image" />
        </Box>
        <Box
          height={"120px"}
          sx={{
            textAlign: "right",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="subtitle2"
            component="p"
            color={"#767676"}
            lineHeight={"30px"}
          >
            {type}، {room} اتاق، {location}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Link href={`/houses/${id}`}>
              <Typography
                variant="h6"
                component="h3"
                color={"#080a1a"}
                fontWeight={"700"}
                lineHeight={"33px"}
              >
                {truncateText(title, 24)}
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="subtitle2"
              component="p"
              color={"#484848"}
              lineHeight={"30px"}
            >
              هر شب از
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color={"#080a1a"}
              fontWeight={"700"}
              lineHeight={"30px"}
            >
              {price}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              color={"#484848"}
              lineHeight={"30px"}
            >
              تومان
            </Typography>
          </Box>
          <Box>{fastreserve && <ReservationChip />}</Box>
        </Box>
      </Paper>
    </Box>
  );
}
