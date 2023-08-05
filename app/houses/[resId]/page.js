import {getLocalData} from "@/json/lib/localdata";
import Reserve from "../../components/houses/Reserve";
import Rules from "../../components/houses/Rules";
import CommentRate from "@/app/components/houses/CommentRate";
// import Comments from "@/app/components/houses/Comments";
import SingleComment from "@/app/components/houses/SingleComment";
import HouseShow from "@/app/components/HouseShow/HouseShow";

export default async function Page({params}) {
    const data = await getLocalData();
    // const comment = data.comments;
    const filteredData = data.residence.filter((res) => res.id == params.resId);
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
