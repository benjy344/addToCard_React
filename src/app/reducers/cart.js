import {
	ADD_TO_CART,
	REMOVE_TO_CART,
	PAYD
} from '../actions/cart'

export const CART_NOT_LOADED = 0
export const CART_LOADING    = 1
export const CART_LOADED     = 2

// Defined a default state
const initialState = {
	items: [],
    totalPrice:0
}

export function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            state.items.push(action.data)
            state.totalPrice += action.data.price
        	return Object.assign({}, state)

        case REMOVE_TO_CART:
            console.log('REMOVE_TO_CARt', action)
            state.items.splice(action.data, 1)
            let price = 0
            for(let item of state.items) {
                console.log('kjbkjb', item)
                price += item.price
            }
            state.totalPrice = price
        	return Object.assign({}, state)

        case PAYD:
            console.log('PAYD', state)
	        return Object.assign({}, state, {
                cart: action.data.cart
            })
        default:
            console.log('DEFAULT', state)
            return state
    }
}