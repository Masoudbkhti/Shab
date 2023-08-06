import Image from "next/image";
import {useDispatch} from "react-redux";
import {addToCart, decreaseItem, removeItem} from "@/redux/cartSlice";
import {useCallback} from "react";


const CartItem = ({product}) => {
    const {name, image, count, id} = product
    const dispatch = useDispatch()

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(product))
    }, [])

    const handleDecreaseItem = useCallback(() => {
        dispatch(decreaseItem(id))
    }, [])

    const handleRemoveItem = useCallback(() => {
        dispatch(removeItem(id))
    }, [])

    return(
        <div style={{border: '1px solid #000', borderRadius: 8, padding: 12}}>
            <div>
                {name}
            </div>
            <div>
                <Image src={image} alt={name} width={200}/>
            </div>
            <div>
                <button onClick={handleAddToCart}>
                    +
                </button>
                {count}
                {count > 1 ?
                    <button onClick={handleDecreaseItem}>
                        -
                    </button>
                    :
                    <button onClick={handleRemoveItem}>
                        remove
                    </button>
                }
            </div>
        </div>
    )
}

export default CartItem