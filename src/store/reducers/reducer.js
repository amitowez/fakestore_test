import initialState from '../states/initialState';
import {SET_PRODUCTS} from '../actions/action'
export default function reducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case SET_PRODUCTS: return {...state, products:  action.payload};
        default: return state;
    }
}