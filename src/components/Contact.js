import React from 'react';
import PropTypes from 'prop-types';
import FaTrash from 'react-icons/lib/fa/trash';
import FaPhone from 'react-icons/lib/fa/phone';

const Contact = props => {
	return (
		<div className="contact">
			<div className="contact-name">
				<a 
					className="remove-contact"
					onClick={ () => props.removeContact(props.index) }
				>
					<FaTrash />
				</a>
				{props.name}
			</div>
			<div className="contact-phone">
				<FaPhone style={{color: "green"}}/>
				{props.phone}
			</div>
		</div>
	)
}

Contact.PropTypes = {
	name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	phone: PropTypes.string.isRequired,
	removeContact: PropTypes.func.isRequired
}

export default Contact;



