"use client";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Information from "/src/components/HousesComponents/HouseShow/Information";
import HostDetails from "/src/components/HousesComponents/HouseShow/HostDetails";
import HouseDetails from "/src/components/HousesComponents/HouseShow/HouseDetails";
import OldPeople from "/src/components/HousesComponents/HouseShow/OldPeople";
import SameHouses from "/src/components/HousesComponents/HouseShow/SameHouses";
import HouseFeatures from "/src/components/HousesComponents/HouseShow/HouseFeatures";
import Rooms from "/src/components/HousesComponents/HouseShow/Rooms";

const HouseShow = ({ data }) => (
  <>
    <NavTab />
    <Divider />
    <List>
      <ListItem>
        <ListItemText id="information">
          <Information data={data} />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <HostDetails data={data} />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <HouseDetails data={data} />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <OldPeople />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <SameHouses />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <HouseFeatures />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <Rooms />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
    </List>
  </>
const HouseShow = ({ data }) => (
  <>
    <Divider />
    <List>
      <ListItem>
        <ListItemText id="information">
          <Information data={data} />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <HostDetails data={data} />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <HouseDetails data={data} />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <OldPeople />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <SameHouses />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <HouseFeatures />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
      <ListItem>
        <ListItemText>
          <Rooms />
        </ListItemText>
      </ListItem>
      <Divider
        sx={{
          marginY: "24px",
        }}
      />
    </List>
  </>
);
export default HouseShow;
