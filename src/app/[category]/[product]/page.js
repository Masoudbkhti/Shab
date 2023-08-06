import {filterByProduct} from "@/utils/filterByProduct";
import Image from "next/image";
import Link from "next/link";
import AddButton from "@/component/AddButton";


const Page = ({params}) => {
    const productName = params.product
    const product = filterByProduct(productName)
    const isNotFoundProduct = !!(!product)

    if (isNotFoundProduct) {
        return (
            <Link href={'/'}>
                not found 404 back to the home
            </Link>
        )
    }

    const {name, image, category, price} = product

    return(
        <div>
            <h1>
                name: {name}
            </h1>
            <Image src={image} alt={name} width={400}/>
            <h2>
                category: {category}
            </h2>
            <h3>
                price {price}
            </h3>
            <AddButton product={product}/>
        </div>
    )
}

export default Page