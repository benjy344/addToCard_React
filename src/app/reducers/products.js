import _ from 'underscore'
import {
	FETCH_PRODUCTS,
	RECEIVE_PRODUCTS,
	REMOVE_PRODUCT,
	UPDATE_PRODUCTS
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

        case UPDATE_PRODUCTS:
            let tempItems = state.items
            let productToUpdate = _.findWhere(tempItems, {id:action.data.id})
            productToUpdate.available = true
            return Object.assign({}, state, {items:tempItems, timetemp: new Date()})

        default:
            return state
    }
}