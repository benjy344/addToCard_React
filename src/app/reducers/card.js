import {
	ADD_TO_CARD,
	REMOVE_TO_CARD,
	PAYD
} from '../actions/card'

export const CARD_NOT_LOADED = 0
export const CARD_LOADING    = 1
export const CARD_LOADED     = 2

// Defined a default state
const initialState = {
	items: [],
    totalPrice:0
}

export function card(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CARD:
            state.items.push(action.data)
            state.totalPrice += action.data.price
        	return Object.assign({}, state)

        case REMOVE_TO_CARD:
            console.log('REMOVE_TO_CARD', state)
        	return Object.assign({}, state, {
                card: action.data.card
            })
        case PAYD:
            console.log('PAYD', state)
	        return Object.assign({}, state, {
                card: action.data.card
            })
        default:
            console.log('DEFAULT', state)
            return state
    }
}