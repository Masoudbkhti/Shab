import { getLocalData } from "@/json/lib/localdata";
import Reserve from "@/src/components/HousesComponents/Reserve";
import Rules from "@/src/components/HousesComponents/Rules";
import Comments from "@/src/components/HousesComponents/Comments";
import HouseShow from "@/src/components/HousesComponents/HouseShow/HouseShow";
import CommentRate from "@/src/components/HousesComponents/CommentRate";
import SingleComment from "@/src/components/HousesComponents/SingleComment";
import { Container, Box } from "@mui/material";

export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
  return (
    <>
      <Box sx={{ display: "flex", marginTop: "80px" }}>
        <Box sx={{ border: "1px solid yellow", width: "60%" }}>
          <HouseShow data={filteredData[0]} />
          <Rules />
          <Comments />
          <CommentRate />
          <SingleComment />
        </Box>
        <Box sx={{ border: "1px solid red", height: "400px", width: "40%",  }}>
          <Reserve data={filteredData[0]} />
        </Box>
      </Box>
    </>
  );
}
