"use client";
import { useSelector } from "react-redux";
import BookmarkItem from "./BookmarkItem";
import { Grid } from "@mui/material";
export default function BookmarkCard({ data }) {
  const carts = useSelector((store) => store.SaveCard.carts);
  const bookmarkedItems = carts
    .map((cart) => {
      const matchingData = data.find((item) => item.id === cart.id);
      return { ...matchingData, isBookmark: cart.isBookmark };
    })
    .filter((item) => item.isBookmark);
  return (
    <Grid container spacing={3}>
      {bookmarkedItems.map((item) => (
        <BookmarkItem
          id={item.id}
          img={item.image}
          name={item.title}
          location={item.location}
          type={item.type}
          rate={item.rate}
          price={item.price}
          oldprice={item.oldprice}
          fastreserve={item.fastreserve}
          hospitable={item.hospitable}
        />
      ))}
    </Grid>
  );
}
