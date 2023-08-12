import { getLocalData } from "@/json/lib/localdata";
import BookmarkCard from "@/src/components/boomarkComponents/BookmarkCard";
import { Container } from "@mui/material";
export default async function Bookmarks() {
  const data = await getLocalData();

  return (
    <Container
      maxWidth={false}
      sx={{ marginTop: "100px", marginBottom: "50px" }}
    >
      <BookmarkCard data={data.residence} />
    </Container>
  );
}
