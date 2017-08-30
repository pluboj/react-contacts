import React from 'react';
import HeaderStats from './HeaderStats';
import PropTypes from 'prop-types';


const Header = props => {
  return (
    <div className="header">
    <HeaderStats contacts={[]} />
    	<h2>Contacts</h2>
    </div>
  );
}

Header.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Header;