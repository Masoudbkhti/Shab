import Card from "../components/Card";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { getLocalData } from "@/json/lib/localdata";

export default async function Search() {
  const data = await getLocalData();
  return (
    <Container>
      <Grid container spacing={3}>
        {data.residence.map((res, index) => (
          <Card img={res.image.cover} name={res.title} key={index} />
        ))}
      </Grid>
    </Container>
  );
}
