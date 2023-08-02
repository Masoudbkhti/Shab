// 'use client'
// import { useSearchParams } from "next/navigation";
// import { Container, Grid } from "@mui/material";
// import Card from "./Card";

// export default function SortedHouses({ data }) {
//   const sortParams = useSearchParams();
//   const sortQuery = sortParams.get('sortBy');

//   const highRate = data.map((item) => item.rate).sort((rate1, rate2) => rate2 - rate1);
//   const highPrice = data.map((item) => item.price).sort((price1, price2) => price2 - price1);
//   const lowPrice = data.map((item) => item.price).sort((price1, price2) => price1 - price2);
// console.log(data);
//   return (
//     <Container>
//         { for (let i =0 ; i < data.length ; i++) {

            
//             <Grid container spacing={3}>
            
//             </Grid>
//         }
//     }
//     </Container>
//   );
// }

'use client';
import { useSearchParams } from "next/navigation";
import { Container, Grid } from "@mui/material";
import Card from "./Card";

function toEnglishDigits(str) {
    const persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
    const arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
    const englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
    str = str.replace(/,/g, "");
  
    return str
      .split("")
      .map(
        (c) =>
          englishNumbers[persianNumbers.indexOf(c)] ||
          englishNumbers[arabicNumbers.indexOf(c)] ||
          c
      )
      .join("");
  }
  

export default function SortedHouses({ data }) {
  const sortParams = useSearchParams();
  const sortQuery = sortParams.get('sortBy');

  const sortByHighPrice = () => {
    const sortedData = [...data].sort((a, b) => parseFloat(toEnglishDigits(b.price)) - parseFloat(toEnglishDigits(a.price)));
    return sortedData;
  };

  const sortByLowPrice = () => {
    const sortedData = [...data].sort((a, b) => parseFloat(toEnglishDigits(a.price)) - parseFloat(toEnglishDigits(b.price)));
    return sortedData;
  };

  const sortByHighRate = () => {
    const sortedData = [...data].sort((a, b) => parseFloat(toEnglishDigits(b.rate)) - parseFloat(toEnglishDigits(a.rate)));
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
    case '2': // sortBy=2 ==> high price
      sortedData = sortByHighPrice();
      break;
    case '3': // sortBy=3 ==> low price
      sortedData = sortByLowPrice();
      break;
    case '4': // sortBy=4 ==> high rate
      sortedData = sortByHighRate();
      break;
    case '5': // sortBy=5 ==> Favourite
      sortedData = sortByFavourite();
      break;
    default: 
      sortedData = data;
  }

  return (
    <Container>
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
    </Container>
  );
}
