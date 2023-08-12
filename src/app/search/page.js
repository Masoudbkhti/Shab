import { Container, Typography } from "@mui/material";
import Sort from "@/src/components/SearchComponents/Sort";
import Menu from "@/src/components/GlobalComponents/headerComponents/Menu";
import SortedHouses from "@/src/components/SearchComponents/SortedHouses";
import { getLocalData } from "@/json/lib/localdata";

export default async function Search() {
  const data = await getLocalData();

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <Typography variant="h5" component="h1">
          اجاره ویلا و سوئیت
        </Typography>
        <Menu />
        <Sort />
        <SortedHouses data={data.residence} />
      </Container>
    </>
  );
}
