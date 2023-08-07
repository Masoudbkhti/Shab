import { Container } from "@mui/material";
import SortedHouses from "@/src/components/SearchComponents/SortedHouses";
import { getLocalData } from "@/json/lib/localdata";
import Sort from "@/src/components/SearchComponents/Sort";
import Menu from "@/src/components/GlobalComponents/headerComponents/Menu";
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
