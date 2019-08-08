import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const NumberButton = ({ number, onClick }) => {
  return <Button label={number} onClick={() => onClick(number)} />;
};

NumberButton.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NumberButton;
