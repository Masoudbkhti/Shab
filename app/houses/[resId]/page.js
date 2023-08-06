import {getLocalData} from "@/json/lib/localdata";
import Reserve from "../../components/houses/Reserve";
import Rules from "../../components/houses/Rules";
// import Comments from "@/app/components/houses/Comments";
import HouseShow from "@/app/components/HouseShow/HouseShow";
import CommentRate from "@/app/components/houses/CommentRate";
import SingleComment from "@/app/components/houses/SingleComment";


export default async function Page({params}) {
    // const ShowImage = useSelector((state)=>state.AlbumSlice)
    // console.log(ShowImage)
    const data = await getLocalData();
    // const comment = data.comments;
    const filteredData = data.residence.filter((res) => res.id === params.resId);
    return (
        <>
            <HouseShow data={filteredData[0]}/>
            <Reserve data={filteredData[0]}/>
            <Rules/>
            <CommentRate/>
            <SingleComment/>
        </>
    );
}
