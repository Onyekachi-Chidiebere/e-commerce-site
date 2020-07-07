import {combineReducers,createStore} from 'redux';
import ProductList from '../components/ProductList/ProductList';

const CATEGORIZE_PRODUCT='CATEGORIZE_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART'
const DEFAULT_STATE = {ProductList,cart:[]};


const cartReducer = (state=[],action)=>{
    if(action.type === ADD_TO_CART){
        state.forEach((product)=>{
            if(product.id===action.payload.id){
                action.payload=false
                return product.quantity++
            }
        })
        if(action.payload){
            return [...state,action.payload]
        }
    }
    return state;
}
const productReducer = (state=[],action)=>{
    if(action.type === CATEGORIZE_PRODUCT){
        if(action.payload==='all'){
            return[...ProductList]
        }
        let newProducts = ProductList.filter((product)=>{
          return  product.category===action.payload
        })
        return [...newProducts]
    }
    
    return state;
}

const reducer = combineReducers({
    ProductList:productReducer,
    cart:cartReducer
})

export const categorizeProduct = category =>({
    type:CATEGORIZE_PRODUCT,
    payload:category
})
export const addToCart = product =>({
    type:ADD_TO_CART,
    payload:{...product,quantity:1}
})

const store = createStore(reducer,DEFAULT_STATE);
export default store;