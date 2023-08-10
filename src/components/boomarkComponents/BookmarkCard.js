"use client";
import { useSelector } from "react-redux";
import BookmarkItem from "./BookmarkItem";
import { Grid, Typography, Box } from "@mui/material";
export default function BookmarkCard({ data }) {
  const carts = useSelector((store) => store.SaveCard.carts);
  const bookmarkedItems = carts.reduce((accumulator, cart) => {
    const matchingData = data.find((item) => item.id === cart.id);
    if (matchingData && cart.isBookmark) {
      accumulator.push({ ...matchingData, isBookmark: true });
    }
    return accumulator;
  }, []);
  return (
    <>
      {bookmarkedItems.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>لیست علاقه مندی های شما خالی است.</Typography>
        </Box>
      ) : (
        <Typography variant="h5" component="h2" sx={{ marginBottom: "20px" }}>
          علاقه مندی های من
        </Typography>
      )}
      <Grid container spacing={2}>
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
            commentNum={item.person}
          />
        ))}
      </Grid>
    </>
  );
}
