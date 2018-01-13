// ACTIONS
export const ADD_TO_CARD    = 'ADD_TO_CARD'
export const REMOVE_TO_CARD = 'REMOVE_TO_CARD'
export const PAYD           = 'PAYD'


export function addToCard( dispatch, data ) {
    dispatch(
    	{
    		type: ADD_TO_CARD,
    		data: data
    	}
    )
}

export function removeToCard( dispatch, data ) {
    dispatch(
    	{
    		type: REMOVE_TO_CARD,
    		data: data
    	}
    )
}