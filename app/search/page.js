import { Container } from "@mui/material";
import Sort from "../components/Sort";
import Menu from "../components/headerComponent/Menu";
import SortedHouses from "../components/SortedHouses";
import { getLocalData } from "@/json/lib/localdata";
export default async function Search() {
  const data = await getLocalData();
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <Menu />
        <Sort />
        <SortedHouses data={data.residence} />
      </Container>
    </>
  );
}
