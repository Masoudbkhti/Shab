import { getLocalData } from "@/json/lib/localdata";
import City from "./City";

export default async function Page({ params }) {
  const data = await getLocalData();
  const filteredData = data.residence.filter((res) => res.id == params.resId);
  return (
    <div>
      <City data={filteredData[0]} />
    </div>
  );
}
