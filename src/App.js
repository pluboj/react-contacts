import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';

export default class App extends Component {
  state = {
    contacts: [
      {
        name: 'Tim Tomtom',
        phone: '(510) 221-2556'
      },
      {
        name: 'Ronaldo Sancho Pancha',
        phone: '(514) 201-7504'
      },  
    ]
  };

  onRemoveContact = (index) => {
    const contacts = this.state.contacts.splice(index, 1);
    this.setState(contacts);
  }

  render() {
    let contacts = this.state.contacts.map((contact, index) => {
      return (
        <Contact
          name={contact.name}
          phone={contact.phone}
          key={"contact-"+index}
          onRemove={() => this.onRemoveContact(index)}
        />
      )
    })

    return (
      <div className="contact-list">
        <Header contacts={this.state.contacts}/>
        <div className="contacts">
          {contacts}
        </div>
      </div>
    );
  }
}

