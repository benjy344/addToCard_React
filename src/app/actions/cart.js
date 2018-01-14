// ACTIONS
export const ADD_TO_CART    = 'ADD_TO_CART'
export const REMOVE_TO_CART = 'REMOVE_TO_CART'
export const PAYD           = 'PAYD'


export function addToCart( dispatch, data ) {
    dispatch(
    	{
    		type: ADD_TO_CART,
    		data: data
    	}
    )
}

export function removeToCart( dispatch, data ) {
    dispatch(
    	{
    		type: REMOVE_TO_CART,
    		data: data
    	}
    )
}