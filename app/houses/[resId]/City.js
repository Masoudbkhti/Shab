// "use client"
import { getLocalData } from '@/json/lib/localdata'

export default async function City({param}) {
    const data = await getLocalData()
    const filterdata = data.residence.filter((a)=>{
        return a.id === param
    })
    console.log(filterdata);
  return (
    sssssssssssssssssssssss
  )
}
