import CartItem from "@/component/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {reset} from "@/redux/cartSlice";
import {calculateShoppingCart} from "@/utils/calculateShoppingCart";
import {addToHistory} from "@/redux/historySlice";


const CartList = () => {
    const {cart} = useSelector(store => store.cart)
    const dispatch = useDispatch()
    const isNotEmptyCart = !!cart.length
    const handleResetCart = useCallback(() => {
        dispatch(reset())
    }, [])

    const totalPrice = useMemo(() => calculateShoppingCart(cart), [cart])

    const handleCheckOut = useCallback(() => {
        dispatch(addToHistory({userId: 1, items: cart, totalPrice}))
        dispatch(reset())
    }, [totalPrice, cart])

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>
                Cart Items
            </h1>
            {isNotEmptyCart &&
                <div>
                    <button onClick={handleResetCart}>
                        reset
                    </button>
                </div>
            }
            {isNotEmptyCart ?
                <>
                    <div style={{display: 'flex', margin: 20}}>
                        {cart.map(product => <CartItem key={product.id} product={product}/>)}
                    </div>
                    <div>
                        total price: {totalPrice}
                    </div>
                </>
                :
                <div>
                    cart is empty
                </div>
            }

            {isNotEmptyCart &&
                <div>
                    <button onClick={handleCheckOut}>
                        check out
                    </button>
                </div>
            }
        </div>
    )
}

export default CartList