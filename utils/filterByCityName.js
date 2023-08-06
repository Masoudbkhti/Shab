import { getLocalData } from "@/json/lib/localdata";

export const filterByCityName = async (cityName) => {
  const data = await getLocalData();
  const encodedCityName = decodeURIComponent(cityName);
  return data.residence.filter((item) => item.cityName === encodedCityName);
};