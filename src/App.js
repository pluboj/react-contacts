import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';

export default class App extends Component {
  state = {
    contacts: [
      {
        name: 'Tim Tomtom',
        phone: '510-221-2556'
      },
      {
        name: 'Ronaldo Sancho Pancha',
        phone: '514-201-7504'
      },  
    ]
  }

  render() {
    let contacts = this.state.contacts.map((contact, index) => {
      return (
        <Contact
          name={contact.name}
          phone={contact.phone}
          key={"contact-"+index}
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

