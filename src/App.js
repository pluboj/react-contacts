import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ContactActionCreators from './actions/contact';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import AddContactForm from './components/AddContactForm';

class App extends Component {
  static PropTypes = {
    contacts: PropTypes.array.isRequired
  };

  render() {
    const { dispatch, contacts } = this.props;
    const addContact = bindActionCreators(ContactActionCreators.addContact, dispatch);
    const removeContact = bindActionCreators(ContactActionCreators.removeContact, dispatch);

    const contactComponents = contacts.map((contact, index) => {
      return (
        <Contact
          index={index}
          name={contact.name}
          phone={contact.phone}
          key={"contact-"+index}
          removeContact={removeContact}
        />
      )
    })

    return (
      <div className="contact-list">
        <Header contacts={contacts}/>
        <div className="contacts">
          {contactComponents}
        </div>
        <AddContactForm addContact={addContact} />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
      contacts: state
  }
)

export default connect(mapStateToProps)(App);