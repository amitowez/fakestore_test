// import { useEffect } from "react"

export const Product = ({ product})=>{
    const {price,category,image} = product
    return (
        <div className="product-card">
            <img className="product-img" src={image} />
            <span>{price+'$'}</span>
            <p>{category}</p>
        </div>
    )
}