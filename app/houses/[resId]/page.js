import { getLocalData } from "@/json/lib/localdata";
import Reserve from "../../components/houses/Reserve";
import Rules from "../../components/houses/Rules";
import Comments from "@/app/components/houses/Comments";
import HouseShow from "@/app/components/HouseShow/HouseShow";
import CommentRate from "@/app/components/houses/CommentRate";
import SingleComment from "@/app/components/houses/SingleComment";
import Menu from "@/app/components/headerComponent/Menu";
import Footer from "@/app/components/footerComponent/Footer";
import { Container, Box } from "@mui/material";

export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
  return (
    <>
      <Menu />
      <Container maxWidth={false}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Reserve data={filteredData[0]} />
          </Box>
          <Box>
            <HouseShow data={filteredData[0]} />
            <Rules />
            <Comments />
            <CommentRate />
            <SingleComment />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
