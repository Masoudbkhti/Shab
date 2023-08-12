import React from "react";
import Menu from "./Menu";
import { getLocalData } from "@/json/lib/localdata";

export default async function MenuWrapper() {
  const data = await getLocalData();
  return <Menu data={data} />;
}
