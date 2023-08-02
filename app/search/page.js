
import Card from "../components/Card";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Sort from "../components/Sort";
import { getLocalData } from "@/json/lib/localdata";
import Link from "next/link";
export default async function Search() {
  const data = await getLocalData();
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Sort />
        <Grid container spacing={3}>
          {data.residence.map((res) => (
            <Link href={`/houses/${res.id}`} >
              <Card
                img={res.image}
                name={res.title}
                location={res.location}
                type={res.type}
                person={res.person}
                room={res.room}
                rate={res.rate}
                price={res.price}
                oldprice={res.oldprice}
                fastreserve={res.fastreserve}
                hospitable={res.hospitable}
              />
            </Link>
          ))}
        </Grid>
      </Container>
    </>
  );
}
