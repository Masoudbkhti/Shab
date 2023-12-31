import { Container, Typography } from "@mui/material";
import SortedHouses from "@/src/components/SearchComponents/SortedHouses";
import { getLocalData } from "@/json/lib/localdata";
import Sort from "@/src/components/SearchComponents/Sort";
import Navbar from "@/src/components/GlobalComponents/StickyComponents/Navbar";
import SearchBarSticky from "@/src/components/GlobalComponents/StickyComponents/SearchBarSticky";
import MenuWrapper from "@/src/components/GlobalComponents/headerComponents/MenuWrapper";
export default async function SortedCitiesPage({ params }) {
  const data = await getLocalData();
  const encodedCityName = decodeURIComponent(params.cityName);
  const sortedData = data.residence.filter((item) => item.cityName === encodedCityName
  );
  return (
    <>
    <MenuWrapper/>
      <Navbar />
      <SearchBarSticky />
      <Container
        maxWidth={false}
        sx={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <Typography variant="h1" component="h1">
          اجاره ویلا و سوئیت در {encodedCityName}
        </Typography>
        <Sort />
        <SortedHouses data={sortedData} />
      </Container>
    </>
  );
}
