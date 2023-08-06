import {PRODUCTS} from "@/data/database";

export const filterByCategory = (category) => {
    return PRODUCTS.filter( product => product.category === category)
}