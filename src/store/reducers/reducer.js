import initialState from '../states/initialState';
import {SET_PRODUCTS, SET_CATEGORYES, SET_ACTIVE_CATEGORY} from '../actions/action'
export default function reducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case SET_PRODUCTS: return {...state, products:  action.payload};
        case SET_CATEGORYES: return  {...state, categoryes:  action.payload};
        case SET_ACTIVE_CATEGORY: return {...state, category: action.payload}
        default: return state;
    }
}