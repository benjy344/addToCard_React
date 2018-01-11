import { getProducts } from '../services/getProducts'

// ACTIONS
export const FETCH_PRODUCTS     = 'FETCH_PRODUCTS'
export const RECEIVE_PRODUCTS   = 'RECEIVE_PRODUCTS'
export const REMOVE_PRODUCT     = 'REMOVE_PRODUCT'
export const ADD_PRODUCT        = 'ADD_PRODUCT'

export function fetchProducts( dispatch ) {
    dispatch({type: FETCH_PRODUCTS})

    getProducts()
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: RECEIVE_PRODUCTS,
                data: data
            })
        })
}

export function addProduct( dispatch, data ) {
    console.log('action - addProduct -- data', data)
    dispatch(
    	{
    		type: ADD_PRODUCT,
    		data: data
    	}
    )
}

export function removeProduct( dispatch, data ) {
    dispatch(
    	{
    		type: REMOVE_PRODUCT,
    		data: data
    	}
    )
}