import Card from "../components/Card";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { getLocalData } from "@/json/lib/localdata";

export default async function Search() {
  const data = await getLocalData();
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Grid container spacing={3}>
          {data.residence.map((res) => (
            <Card
              img={res.image}
              name={res.title}
              location={res.location}
              type={res.type}
              person={res.person}
              room={res.room}
              rate={res.rate}
              price={res.price}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
