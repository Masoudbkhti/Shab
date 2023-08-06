'use client'
import Link from "next/link";
import {useSelector} from "react-redux";
import Search from "@/component/Search";

const Header = () => {
    const {cart} = useSelector( store => store.cart)
    const cartCounts = cart.reduce( (init, current) => init = init + current.count, 0)
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
                <Link href={'/'}>
                    <h1 style={{color: 'red'}}>
                        Home
                    </h1>
                </Link>
            </div>
            <Search/>
            <div>
                <Link href={'/cart'}>
                    <h2 style={{color: 'purple'}}>
                        Cart{cartCounts ? <span>({cartCounts})</span> : ''}
                    </h2>
                </Link>
            </div>
        </div>
    )
}

export default Header