import ProductCard from "@/component/ProductCard";
import Link from "next/link";

const ProductList = ({category, products}) => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h2>
                    {category}
                </h2>
                <Link href={`/${category}`}>
                    <h6>
                        see all
                    </h6>
                </Link>
            </div>
            <div style={{display: 'flex'}}>
                {products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

export default ProductList