import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddContactForm extends Component {
	static PropTypes: {
		addContact: PropTypes.func.isRequired;
	}

	state = {
		name: '',
		phone: ''
	};

	onChange = (evt) => {
		const data = this.state;
		const value = evt.target.value;
		const name = evt.target.name;
		data[name] = value;
		this.setState(data);
	};

	addContact = (evt) => {
		evt.preventDefault();
		this.props.addContact(
			this.state.name, 
			this.formatPhone(this.state.phone)
		);
		this.setState({
			name: '',
			phone: ''
		});
	};

	formatPhone = (number) => {
	    const area = number.slice(0, 3);
	    const prefix = number.slice(3, 6);
	    const line = number.slice(6, 10);
	    return "("+area+") "+ prefix + "-" + line;
	}

	render () {
		return (
			<div className="add-contact-form">
				<form onSubmit={this.addContact}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={this.state.name}
						onChange={this.onChange}
						maxLength={30}
					/>
					<input
						type="text"
						name="phone"
						placeholder="Phone #"
						value={this.state.phone}
						onChange={this.onChange}
						maxLength={10}
					/>
					<input
						type="submit"
						value="Add Contact"
					/>
				</form>
			</div>
		)
	}
}