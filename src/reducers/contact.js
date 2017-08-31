import * as ContactActionTypes from '../actiontypes/contact';

const initialState = [
	{
	    name: 'Tim Tomtom',
	    phone: '(510) 221-2556'
	},
	{
	    name: 'Ronaldo Sancho Pancha',
	    phone: '(514) 201-7504'
	},  
];

export default function Contact(state=initialState, action) {
	switch(action.type) {
		case ContactActionTypes.ADD_CONTACT:
			return [
				...state,
				{
					name: action.name,
					phone: action.phone
				}
			];

		case ContactActionTypes.REMOVE_CONTACT:
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];

		default:
			return state;
	}
}