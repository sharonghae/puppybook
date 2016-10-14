
import {FETCH_PUPPIES, FETCH_SINGLE_PUPPY} from './action-creators'
import {combineReducers} from 'redux'


const allPuppies = function(state = [], action) {
	console.log('state', state)
	switch(action.type) {
		case FETCH_PUPPIES:
			return action.fetchedPuppies;
		default:
			return state;
	}
}

const selectedPuppy = function(state = {}, action) {
	console.log('state', state)
	switch(action.type) {
		case FETCH_SINGLE_PUPPY:
			return action.fetchedSinglePuppy;
		default:
			return state;
	}
}

export default combineReducers({
	allPuppies,
	selectedPuppy
})
