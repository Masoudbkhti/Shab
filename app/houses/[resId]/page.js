import { getLocalData } from "@/json/lib/localdata";
import Reserve from "../../components/houses/Reserve";
import Rules from "../../components/houses/Rules";
import Comments from "@/app/components/houses/Comments";
import HouseShow from "@/app/components/HouseShow/HouseShow";
import CommentRate from "@/app/components/houses/CommentRate";
import SingleComment from "@/app/components/houses/SingleComment";
import { Container, Box } from "@mui/material";

export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
  return (
    <>
      <Container sx={{ display: "flex" }}>
        <Box>
          {/* <HouseShow data={filteredData[0]} /> */}
          <Rules />
          <Comments />
          <CommentRate />
          <SingleComment />
        </Box>
        <Box>
          <Reserve data={filteredData[0]} />
        </Box>
      </Container>
    </>
  );
}
