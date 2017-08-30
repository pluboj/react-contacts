import React from 'react';
import PropTypes from 'prop-types';

const HeaderStats = props => {
  const contactsCount = props.contacts.length;

  return (
    <table className="h-stats">
      <tbody>
        <tr>
          <td>Number of contacts:</td>
          <td>{contactsCount}</td>
        </tr>
      </tbody>
    </table>
  )
}

HeaderStats.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default HeaderStats;