import {PRODUCTS} from "@/data/database";


export const searchByName = (search) => {
    return PRODUCTS.filter( product => product.name.toLowerCase().includes( search.toLowerCase()))
}