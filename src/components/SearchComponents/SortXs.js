"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { Typography } from "@mui/material";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [selectedOption, setSelectedOption] = React.useState("محبوب‌ترین");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const listItems = [
    { name: "محبوب‌ترین", id: "5" },
    { name: "ارزان‌ترین", id: "3" },
    { name: "گران‌ترین", id: "2" },
    { name: "بالاترین امتیاز", id: "4" },
  ];
  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {listItems.map((item) => (
          <Link key={item.name} href={{ query: { sortBy: item.id } }}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setSelectedOption(item.name)}>
                <ListItemText primary={item.name} sx={{ textAlign: "right" }} />
              </ListItemButton>
            </ListItem>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Divider
                style={{
                  width: "90%",
                }}
              />
            </Box>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="body2" component="body2">
          مرتب‌سازی:
        </Typography>
        <Button
          onClick={toggleDrawer("bottom", true)}
          sx={{
            color: "black",
            fontWeight: "bold",
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
          endIcon={<UnfoldMoreIcon />}
        >
          {selectedOption}
        </Button>
      </Box>
      <SwipeableDrawer
        anchor="bottom"
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
        PaperProps={{
          elevation: 0,
          style: { borderRadius: "20px 20px 0 0" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: "5px",
            paddingY: "10px",
          }}
        >
          <Box></Box>
          <Typography variant="body1" component="body2">
            مرتب‌سازی بر اساس
          </Typography>
          <CloseIcon onClick={toggleDrawer("bottom", false)} />
        </Box>

        {list("bottom")}
      </SwipeableDrawer>
    </Box>
  );
}
