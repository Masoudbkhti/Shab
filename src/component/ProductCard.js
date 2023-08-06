import Image from "next/image";
import Link from "next/link";


const ProductCard = ({product}) => {
    const {name, category, image, price} = product
    return (
        <Link href={`/${category}/${name}`}>
            <div style={{border: '1px solid #000', borderRadius: 8, margin: 12, padding: 24, cursor: 'pointer'}}>
                <div>
                    <Image src={image} alt={name} width={100}/>
                </div>
                <div>
                    {name}
                </div>
                <div>
                    {price}
                </div>
            </div>
        </Link>
    )
}

export default ProductCard