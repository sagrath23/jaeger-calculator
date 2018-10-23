import React from 'react';
import PropTypes from 'proptypes';
import './Button.css';

const Button = ({ label, onClick }) => {
  return (<div className="button" onClick={onClick}>{ label }</div>);
};

Button.propTypes = {
  label: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
