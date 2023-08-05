import { Container } from "@mui/material";
import SortedHouses from "@/app/components/SortedHouses";
import { getLocalData } from "@/json/lib/localdata";
import Sort from "@/app/components/Sort";
import Menu from "@/app/components/headerComponent/Menu";
export default async function SortedCitiesPage({ params }) {
  const data = await getLocalData();
  const encodedCityName = decodeURIComponent(params.cityName);
  const sortedData = data.residence.filter(
    (item) => item.cityName === encodedCityName
  );

  return (
    <Container
      maxWidth={false}
      sx={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <Menu />
      <Sort />
      <SortedHouses data={sortedData} />
    </Container>
  );
}
