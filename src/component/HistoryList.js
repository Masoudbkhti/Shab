import {useSelector} from "react-redux";
import HistoryItem from "@/component/HistoryItem";


const HistoryList = () => {
    const [user_1] = useSelector( store => store.history)
    const {historyCart} = user_1
    return(
        <div>
            <h1>
                History List
            </h1>
            {historyCart.map( history => <HistoryItem key={history.id} {...history}/>)}
        </div>
    )
}

export default HistoryList