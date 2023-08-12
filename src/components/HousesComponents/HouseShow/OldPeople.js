import Image from "next/image";
import disablePersons from "@/src/assets/icons/disablePersons.svg";
import { Box, Typography } from "@mui/material";
import React from "react";

const OldPeople = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={disablePersons}
            width="54"
            height="54"
            alt="disablePersons"
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} marginRight={1}>
          <Box width={"100%"} height={"100%"}>
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              display={"flex"}
              alignItems={"flex-start"}
              textAlign={"right"}
              mb={0.8}
            >
              مناسب سالمندان و معلولین
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography
              variant="subtitle2"
              component="p"
              color="secondary"
              textAlign={"right"}
              width={"100%"}
              height={"100%"}
            >
              شرایط این اقامتگاه مناسب پذیرش سالمندان و معلولین است.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default OldPeople;
