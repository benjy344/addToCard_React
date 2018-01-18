import {
	FETCH_PRODUCTS,
	RECEIVE_PRODUCTS,
	REMOVE_PRODUCT,
	ADD_PRODUCT
} from '../actions/products'

// Defined Loading state
export const PRODUCTS_NOT_LOADED = 0
export const PRODUCTS_LOADING    = 1
export const PRODUCTS_LOADED     = 2

// Defined a default state
export const initialState = {
	itemCount: 0,
	itemLoadState: 0,
	items: []
}

export function products(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
        	return Object.assign({}, state, {
                itemLoadState: PRODUCTS_LOADING
            })

        case RECEIVE_PRODUCTS:
        	return Object.assign({}, state, {
                itemCount: action.data.items.length,
                itemLoadState: PRODUCTS_LOADED,
                items: action.data.items
            })

        default:
            return state
    }
}