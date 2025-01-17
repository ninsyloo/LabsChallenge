import {GET_PRODUCTS, LOW_TO_HIGH, HIGH_TO_LOW, NEW_PRODUCTS, OLD_PRODUCTS} from './types'

const initialState = {
    products:[],
}

export default function rootReducer(state = initialState, action){
    
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case NEW_PRODUCTS:
            return{
                ...state,
                products: [...state.products].sort((a,b) => a.condition > b.condition ?  1 : -1)
            }
        case OLD_PRODUCTS:
            return{
                ...state,
                products: [...state.products].sort((a,b) => a.condition < b.condition ? 1 : -1)
            }
        case LOW_TO_HIGH:
            return{
                ...state,
                products: [...state.products].sort((a,b) => a.price > b.price ? 1 : -1)
            }
        case HIGH_TO_LOW:
            return{
                ...state,
                products: [...state.products].sort((a,b) => a.price < b.price ? 1 : -1)
            }
            default:
                return state
    }
}