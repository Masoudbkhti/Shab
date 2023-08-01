import { getLocalData } from "@/json/lib/localdata";
import Reserve from "../../components/houses/Reserve";

export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
  return (
    <div>
      <Reserve data={filteredData[0]} />
    </div>
  );
}
