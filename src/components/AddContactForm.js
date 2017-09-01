import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddContactForm extends Component {
	static PropTypes: {
		onAdd: PropTypes.func.isRequired;
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

	onSubmit = (evt) => {
		evt.preventDefault();
		this.props.onAdd(this.state);
		this.setState({
			name: '',
			phone: ''
		});
	};

	render () {
		return (
			<div className="add-contact-form">
				<form onSubmit={this.onSubmit}>
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