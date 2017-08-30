import React from 'react';
import PropTypes from 'prop-types';
import FaTrash from 'react-icons/lib/fa/trash';

const Contact = props => {
	return (
		<div className="contact">
			<div className="contact-name">
				<a className="remove-contact">
					<FaTrash />
				</a>
				{props.name}
			</div>
		</div>
	)
}

Contact.PropTypes = {
	name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired
}

export default Contact;



