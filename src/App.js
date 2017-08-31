import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import AddContactForm from './components/AddContactForm';

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
  };

  onAddContact = (data) => {
    const contacts = this.state.contacts;
    contacts.push({
      name: data.name, 
      phone: this.formatPhone(data.phone)
    });
    
    this.setState(contacts);
  };

  formatPhone = (number) => {
    const area = number.slice(0, 3);
    const prefix = number.slice(3, 6);
    const line = number.slice(6, 10);
    return "("+area+") "+ prefix + "-" + line;
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
        <AddContactForm onAdd={this.onAddContact}/>
      </div>
    );
  }
}

