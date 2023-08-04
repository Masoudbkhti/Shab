'use client'

import {useSelector} from "react-redux";
import {findByHistory} from "@/utils/findByHistory";
import ProductCard from "@/component/ProductCard";

const Page = ({params}) => {
    const [user_1] = useSelector( store => store.history)
    const historyId = +params.history
    const cartHistory = findByHistory(user_1, historyId)

    return(
        <div>
            <h1>
                History details
            </h1>
            <div>
                history id: {cartHistory.id}
            </div>
            <div>
                total price: {cartHistory.totalPrice}
            </div>
            <div style={{display: 'flex'}}>
                {cartHistory.items.map( product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

export default Page