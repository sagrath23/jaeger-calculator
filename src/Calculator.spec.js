import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  const display = 0;

  test('should call the onUpdateFirstOperand handler when one number is clicked and no operation has been selected', () => {
    const handleUpdateFirstOperandMock = jest.fn();
    const firstOperand = 2;

    const CalculatorComponent = shallow(
      <Calculator
        display={display}
        onUpdateFirstOperand={handleUpdateFirstOperandMock}
        onUpdateSecondOperand={() => {}}
        onReset={() => {}}
        onExecuteOperation={() => {}}
      />
    );

    CalculatorComponent.instance().handleNumberClick(firstOperand);

    expect(handleUpdateFirstOperandMock).toHaveBeenCalledWith(firstOperand);
  });

  test('should call the onUpdateSecondOperand handler when one number is clicked and an operation has been selected', () => {
    const handleUpdateSecondOperandMock = jest.fn();
    const secondOperand = 5;

    const CalculatorComponent = shallow(
      <Calculator
        display={display}
        onUpdateFirstOperand={() => {}}
        onUpdateSecondOperand={handleUpdateSecondOperandMock}
        onReset={() => {}}
        onExecuteOperation={() => {}}
      />
    );

    CalculatorComponent.setState({ operation: { isSelected: true } });
    CalculatorComponent.instance().handleNumberClick(secondOperand);

    expect(handleUpdateSecondOperandMock).toHaveBeenCalledWith(secondOperand);
  });

  test('should call the onExecuteOperation handler when the equal button is clicked and an operation has been selected', () => {
    const handleExecuteOperationMock = jest.fn();
    const operation = {
      name: 'addition',
      symbol: '+'
    };

    const CalculatorComponent = shallow(
      <Calculator
        display={display}
        onUpdateFirstOperand={() => {}}
        onUpdateSecondOperand={() => {}}
        onReset={() => {}}
        onExecuteOperation={handleExecuteOperationMock}
      />
    );

    CalculatorComponent.setState({ operation: { isSelected: true, ...operation } });
    CalculatorComponent.instance().executeOperation();

    expect(handleExecuteOperationMock).toHaveBeenCalledWith(operation.name);
  });

  test('should call the onReset handler when the equal button is clicked and the operation is done', () => {
    const handlerResetMock = jest.fn();
    const operation = {
      name: 'addition',
      symbol: '+'
    };

    const CalculatorComponent = shallow(
      <Calculator
        display={display}
        onUpdateFirstOperand={() => {}}
        onUpdateSecondOperand={() => {}}
        onReset={handlerResetMock}
        onExecuteOperation={() => {}}
      />
    );

    CalculatorComponent.setState({ operation: { isSelected: true, ...operation } });
    CalculatorComponent.instance().executeOperation();

    expect(handlerResetMock).toHaveBeenCalled();
  });
});
