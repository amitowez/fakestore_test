import {addCategoryes} from '../actionCreators/actionCreatorCategorys'
export const fetchCategoryes = () => {
    return function(dispatch){
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>dispatch(addCategoryes(json)))
    }
}