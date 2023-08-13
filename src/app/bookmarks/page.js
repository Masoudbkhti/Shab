import { getLocalData } from "@/json/lib/localdata";
import Navbar from "@/src/components/GlobalComponents/StickyComponents/Navbar";
import BookmarkCard from "@/src/components/boomarkComponents/BookmarkCard";
import { Container, Menu } from "@mui/material";
export default async function Bookmarks() {
  const data = await getLocalData();

  return (
    <>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <BookmarkCard data={data.residence} />
      </Container>
    </>
  );
}
