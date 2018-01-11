import { getProducts } from '../services/getProducts'

// ACTIONS
export const FETCH_PRODUCTS     = 'FETCH_PRODUCTS'
export const RECEIVE_PRODUCTS   = 'RECEIVE_PRODUCTS'

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
