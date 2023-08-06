import {filterByCategory} from "@/utils/filterByCategory";
import ProductCard from "@/component/ProductCard";
import Link from "next/link";


const Page = ({params}) => {
    const category = params.category
    const CATEGORY_PRODUCTS = filterByCategory(category)
    const isEmptyProducts = CATEGORY_PRODUCTS.length === 0

    if (isEmptyProducts) {
        return (
            <Link href={'/'}>
                <div>
                    this category dose not any product back to the home
                </div>
            </Link>
        )
    }

    return(
        <div>
            {CATEGORY_PRODUCTS.map( product => <ProductCard key={product.id} product={product}/>)}
        </div>
    )
}

export default Page