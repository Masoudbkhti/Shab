import { getLocalData } from "@/json/lib/localdata";
import Reserve from "../../components/houses/Reserve";
import PhotoList from "@/app/components/PhotoList";

export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
  return (
    <div>
      <Reserve data={filteredData[0]} />
      <PhotoList data={filteredData[0]} /> 
    </div>
  );
}
