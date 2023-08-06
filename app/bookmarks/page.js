import { getLocalData } from "@/json/lib/localdata";
import BookmarkCard from "../components/BookmarkCard";
import Menu from "../components/headerComponent/Menu";
import { Typography, Container } from "@mui/material";
export default async function Bookmarks() {
  const data = await getLocalData();

  return (
    <Container
      maxWidth={false}
      sx={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <Menu />
      <Typography variant="h5" component="h2" sx={{ marginBottom: "20px" }}>
        علاقه مندی های من
      </Typography>
      <BookmarkCard data={data.residence} />
    </Container>
  );
}