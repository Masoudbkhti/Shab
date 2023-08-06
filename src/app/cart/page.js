'use client'
import HistoryList from "@/component/HistoryList";
import CartList from "@/component/CartList";

const Page = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <CartList/>
            <HistoryList/>
        </div>
    )
}

export default Page