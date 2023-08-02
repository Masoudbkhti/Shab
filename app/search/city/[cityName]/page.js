import SortedHouses from "@/app/components/SortedHouses";
import { Container } from "@mui/material";
import { getLocalData } from "@/json/lib/localdata";
import Sort from "@/app/components/Sort";
export default async function SortedCities ({params}) {
    const data = await getLocalData();

  const cityName = decodeURIComponent(params.cityName); 
  
  
  
return (
    <Container maxWidth={false}
        sx={{ marginTop: "50px", marginBottom: "50px" }}>
            <Sort />
        <SortedHouses cityName={cityName} data={data.residence}/>
    </Container>
)
}