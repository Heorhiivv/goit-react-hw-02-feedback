import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};
Notification.defaultProps = {
  message: 'There is nothing here'
}
Notification.propTypes = {
  message: PropTypes.string.isRequired
}
export default Notification;

