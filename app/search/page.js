import Card from "../../components/Card";
import Grid from "@mui/material";
import { getLocalData } from "@/json/lib/localdata";
export default async function Search() {
  const data = await getLocalData();
  return (
    <Grid item>
      {data.cities.map((city, index) => (
        <Card img={city.image} name={city.name} key={index} />
      ))}
    </Grid>
  );
}
