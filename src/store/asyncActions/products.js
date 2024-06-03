import {addProducts} from '../actionCreators/actionCreatorProducts'
export const fetchProducts = () => {
    return function(dispatch){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> dispatch(addProducts(json)))
    }
}
