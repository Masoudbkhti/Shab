"use client";
import { useSearchParams } from "next/navigation";
import toEnglishDigits from "@/src/utils/toEnglishDigits";
import { Grid } from "@mui/material";
import Card from "../GlobalComponents/ReusableComponents/Card";

export default function SortedHouses({ data }) {
  const sortParams = useSearchParams();
  const sortQuery = sortParams.get("sortBy");

  const sortByHighPrice = () => {
    const sortedData = [...data].sort(
      (a, b) =>
        parseFloat(toEnglishDigits(b.price)) -
        parseFloat(toEnglishDigits(a.price))
    );
    return sortedData;
  };

  const sortByLowPrice = () => {
    const sortedData = [...data].sort(
      (a, b) =>
        parseFloat(toEnglishDigits(a.price)) -
        parseFloat(toEnglishDigits(b.price))
    );
    return sortedData;
  };

  const sortByHighRate = () => {
    const sortedData = [...data].sort(
      (a, b) =>
        parseFloat(toEnglishDigits(b.rate)) -
        parseFloat(toEnglishDigits(a.rate))
    );
    return sortedData;
  };

  const sortByFavourite = () => {
    const sortedData = [...data].sort((a, b) => {
      const rateA = parseFloat(toEnglishDigits(a.rate));
      const rateB = parseFloat(toEnglishDigits(b.rate));
      const hospitableA = a.hospitable;
      const hospitableB = b.hospitable;

      if (rateA > rateB) return -1;
      if (rateA < rateB) return 1;
      if (hospitableA && !hospitableB) return -1;
      if (!hospitableA && hospitableB) return 1;
      return 0;
    });

    return sortedData;
  };

  let sortedData = [];

  switch (sortQuery) {
    case "2": // sortBy=2 ==> high price
      sortedData = sortByHighPrice();
      break;
    case "3": // sortBy=3 ==> low price
      sortedData = sortByLowPrice();
      break;
    case "4": // sortBy=4 ==> high rate
      sortedData = sortByHighRate();
      break;
    case "5": // sortBy=5 ==> Favourite
      sortedData = sortByFavourite();
      break;
    default:
      sortedData = data;
  }

  return (
    <Grid container spacing={3}>
      {sortedData.map((item) => (
        <Card
        key={item.id}
          img={item.image}
          name={item.title}
          location={item.location}
          type={item.type}
          person={item.person}
          room={item.room}
          rate={item.rate}
          price={item.price}
          oldprice={item.oldprice}
          fastreserve={item.fastreserve}
          hospitable={item.hospitable}
          id={item.id}
        />
      ))}
    </Grid>
  );
}
