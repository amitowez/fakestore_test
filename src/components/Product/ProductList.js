import { useSelector } from "react-redux"
import { Product } from "./Product"

export const ProductList = ({products}) =>{
    const activeCategory = useSelector(state => state.category)
    console.log(activeCategory)
    return (
        <div className="product-list">
            {products.map(product =>
                (activeCategory === 'all' || activeCategory === product.category ? 
                    (<Product product={product} key={product.id} />) 
                    : null)
                )
            }
        </div>
    )
}