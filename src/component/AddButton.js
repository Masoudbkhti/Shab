'use client'

import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {addToCart} from "@/redux/cartSlice";

const AddButton = ({product}) => {
    const dispatch = useDispatch()

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(product))
    }, [])

    return(
        <button onClick={handleAddToCart}>
            ADD TO CART
        </button>
    )
}

export default AddButton