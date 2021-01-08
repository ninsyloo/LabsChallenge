import axios from 'axios';
import {GET_PRODUCTS, LOW_TO_HIGH, HIGH_TO_LOW, PRODUCT_CONDITION} from './types'

export function getProducts(query){
    return function(dispatch){
        axios(`http://localhost:5000/api/search?q=${query}`)
        .then(json => {
            dispatch({type: GET_PRODUCTS, payload: json.data});
        })
        .catch(err=>{console.log(err)})
    }
}

export function lowToHigh(){
    return function(dispatch){
        dispatch({type:LOW_TO_HIGH})
    }
}

export function highToLow(){
    return function(dispatch){
        dispatch({type:HIGH_TO_LOW})
    }
}

export function byCondition(condition){
    return function(dispatch){
      dispatch({type:PRODUCT_CONDITION, payload:condition})
    }
}
