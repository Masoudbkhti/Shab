import ProductList from "@/component/ProductList";
import {FRUITS, VEGETABLES} from "@/data/database";
import {filterByCategory} from "@/utils/filterByCategory";

const Page = () => {
    const FRUITS_PRODUCTS = filterByCategory(FRUITS)
    const VEGETABLES_PRODUCTS = filterByCategory(VEGETABLES)
    return(
        <div>
            <ProductList category={FRUITS} products={FRUITS_PRODUCTS}/>
            <ProductList category={VEGETABLES} products={VEGETABLES_PRODUCTS}/>
        </div>
    )
}

export default Page
