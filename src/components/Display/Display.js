import React from 'react';
import PropTypes from 'proptypes';
import './Display.css';

const Display = ({ value }) => {
  return (<div className="display">{ value }</div>);
};

Display.propTypes = {
  value: PropTypes.string
};

Display.defaultProps = {
  value: '0'
};

export default Display;
