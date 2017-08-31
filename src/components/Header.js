import React from 'react';
import HeaderStats from './HeaderStats';
import PropTypes from 'prop-types';
import FaGroup from 'react-icons/lib/fa/group';


const Header = props => {
  return (
    <div className="header">
    <HeaderStats contacts={props.contacts} />
    	<h2>Contacts</h2>
    	<FaGroup className="group-icon"/>
    </div>
  );
}

Header.PropTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Header;