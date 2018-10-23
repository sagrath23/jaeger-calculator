import * as actions from './calculatorActions';
import {
  UPDATE_FIRST_OPERAND,
  UPDATE_SECOND_OPERAND,
  EXECUTE_DIVISION,
  EXECUTE_MULTIPLICATION,
  EXECUTE_ADDITION,
  EXECUTE_SUBTRACTION,
  RESET
} from './actionTypes';

describe('calculatorActions', () => {
  test('should expose an action to update the first operand', () => {
    const firstOperand = 10;
    const expectedAction = {
      type: UPDATE_FIRST_OPERAND,
      number: firstOperand
    };

    expect(actions.updateFirstOperand(firstOperand)).toEqual(expectedAction);
  });

  test('should expose an action to update the second operand', () => {
    const secondOperand = 10;
    const expectedAction = {
      type: UPDATE_SECOND_OPERAND,
      number: secondOperand
    };

    expect(actions.updateSecondOperand(secondOperand)).toEqual(expectedAction);
  });

  test('should expose an action to execute the division operation', () => {
    const expectedAction = {
      type: EXECUTE_DIVISION
    };

    expect(actions.executeDivision()).toEqual(expectedAction);
  });

  test('should expose an action to execute the multiplication operation', () => {
    const expectedAction = {
      type: EXECUTE_MULTIPLICATION
    };

    expect(actions.executeMultiplication()).toEqual(expectedAction);
  });

  test('should expose an action to execute the addition operation', () => {
    const expectedAction = {
      type: EXECUTE_ADDITION
    };

    expect(actions.executeAddition()).toEqual(expectedAction);
  });

  test('should expose an action to execute the subtraction operation', () => {
    const expectedAction = {
      type: EXECUTE_SUBTRACTION
    };

    expect(actions.executeSubtraction()).toEqual(expectedAction);
  });

  test('should expose an action to execute the reset operation', () => {
    const expectedAction = {
      type: RESET
    };

    expect(actions.reset()).toEqual(expectedAction);
  });
});
