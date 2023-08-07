import Reserve from "../components/houses/Reserve";
import { getLocalData } from "@/json/lib/localdata";

export default async function Page() {
  const data = await getLocalData();
  return <Reserve data={data.residence[0]} />;
}
