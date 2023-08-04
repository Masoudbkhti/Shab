import { getLocalData } from "@/json/lib/localdata";
import BookmarkCard from "../components/BookmarkCard";
import { useSelector } from "react-redux";
import { Typography, Container, Grid } from "@mui/material";
export default async function Bookmarks () {
    const data = await getLocalData();
    const carts = useSelector((store) => store.SaveCard.carts);
    const isBookmark = carts.find((item) => item.isBookmark === true);
console.log(isBookmark);
    return (
        <Container
        maxWidth={false}
        sx={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Typography variant="h5" component="h2" sx={{marginBottom:"20px"}}>علاقه مندی های من</Typography>
            <Grid container spacing={3}>
        {data.residence.map((item) => (
          <BookmarkCard
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
        </Container>
    )
}