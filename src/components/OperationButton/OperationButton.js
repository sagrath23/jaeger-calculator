import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const OperationButton = ({ operation, onClick }) => {
  return <Button label={operation.symbol} onClick={() => onClick(operation)} />;
};

OperationButton.propTypes = {
  operation: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default OperationButton;
