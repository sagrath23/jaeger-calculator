import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Display from './components/Display';
import NumberButton from './components/NumberButton';
import OperationButton from './components/OperationButton';
import './Calculator.css';

class Calculator extends Component {
  state = {
    operation: {
      name: '',
      symbol: '',
      isSelected: false,
    }
  };

  numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  operations = [{
    name: 'division',
    symbol: '÷'
  }, {
    name: 'multiplication',
    symbol: 'x'
  }, {
    name: 'addition',
    symbol: '+'
  }, {
    name: 'subtraction',
    symbol: '-'
  }];

  handleNumberClick = (number) => {
    const { operation: {isSelected: isOperatorSelected }} = this.state;
    const { updateFirstOperand, updateSecondOperand } = this.props;
    isOperatorSelected ? updateSecondOperand(number) : updateFirstOperand(number); 
  };

  handleOperationClick = (operation) => {
    const { operation: {isSelected: isOperatorSelected }} = this.state;
    const { defineOperator } = this.props;

    if(!isOperatorSelected) {
      this.setState({
        operation:{
          name: operation.name,
          symbol: operation.symbol,
          isSelected: true
        } 
      }, () => {defineOperator(operation)})
    }
  };

  executeOperation = () => {
    const { executeOperation } = this.props;

    this.setState({
      operation: {
      name: '',
      symbol: '',
      isSelected: false,
    }}, () =>  { executeOperation() } );
  };

  renderButtons = () => (
    <div className="keyboard">
      <div className="left-section">
        <div className="numbers">
          {this.numbers.map((number, index) => (<NumberButton key={index} number={number} onClick={this.handleNumberClick} />))}
        </div>
        <div className="equal">
          <OperationButton operation={{ symbol: '=', name: 'equal'}} onClick={this.executeOperation} />
        </div>
      </div>
      <div className="right-section">
        <div className="operations">
          {this.operations.map((value, index) => (<OperationButton key={index} operation={value} onClick={this.handleOperationClick} />))}
        </div>
      </div>
    </div>);

  render() {
    const { operation: { symbol } } = this.state;
    const { display } = this.props;

    return (
      <div className="calculator">
        <Display value={`${display} ${symbol}`} />
        { this.renderButtons() }
      </div>
    );
  }
}

Calculator.propTypes = {
  display: PropTypes.number.isRequired,
  updateFirstOperand: PropTypes.func.isRequired,
  updateSecondOperand: PropTypes.func.isRequired,
  executeOperation: PropTypes.func.isRequired
};

Calculator.defaultProps = {
  firstOperand: 0,
  secondOperand: 0
};

export default Calculator;
