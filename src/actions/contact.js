import * as ContactActionTypes from '../actiontypes/contact';

export const addContact = (name,phone) => {
	return {
		type: ContactActionTypes.ADD_CONTACT,
		name,
		phone
	};
};

export const removeContact = index => {
	return {
		type: ContactActionTypes.REMOVE_CONTACT,
		index
	};
};