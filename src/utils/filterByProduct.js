import {PRODUCTS} from "@/data/database";

export const filterByProduct = (productName) => {
    return PRODUCTS.filter(product => product.name === productName)[0]
}