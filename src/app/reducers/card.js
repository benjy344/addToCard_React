import {
	ADD_TO_CARD,
	REMOVE_TO_CARD,
	PAYD
} from '../actions/card'


// Defined a default state
const initialState = {
	card: []
}

export function card(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CARD:
        	return Object.assign({}, state, {
                card: action.data.card
            })

        case REMOVE_TO_CARD:
        	return Object.assign({}, state, {
                card: action.data.card
            })
        case PAYD:
	        return Object.assign({}, state, {
                card: action.data.card
            })
        default:
            return state;
    }
}