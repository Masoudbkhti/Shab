import { getLocalData } from "@/json/lib/localdata";
import Reserve from "../../components/houses/Reserve";
import HouseShow from "../../components/HouseShow/HouseShow"

export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
import { getLocalData } from "@/json/lib/localdata";
import Reserve from "../../components/houses/Reserve";
import Rules from "../../components/houses/Rules";
import Comments from "@/app/components/houses/Comments";

export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
  return (
    <div>
      <Reserve data={filteredData[0]} />
      <Rules data={filteredData[0]} />
      <Comments data={filteredData[0]} />
      <HouseShow data={filteredData[0]}/>
    </div>
  );
}
