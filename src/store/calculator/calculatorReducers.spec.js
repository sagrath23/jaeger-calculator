import * as actions from './actionTypes';
import reducers from './calculatorReducers';

describe('calculatorReducers', () => {
  const defaultState = {
    display: 0,
    firstOperand: 0,
    secondOperand: 0
  };

  test(`should handle UPDATE_FIRST_OPERAND action`, () => {
    const firstOperand = 10;
    const state = reducers(defaultState, {
      type: actions.UPDATE_FIRST_OPERAND,
      number: firstOperand
    });

    expect(state).toEqual({
      ...defaultState,
      firstOperand,
      display: firstOperand
    });
  });

  test(`should handle UPDATE_SECOND_OPERAND action`, () => {
    const secondOperand = 10;
    const state = reducers(defaultState, {
      type: actions.UPDATE_SECOND_OPERAND,
      number: secondOperand
    });

    expect(state).toEqual({
      ...defaultState,
      secondOperand,
      display: secondOperand
    });
  });

  test(`should handle EXECUTE_DIVISION action`, () => {
    const firstOperand = 6;
    const secondOperand = 2;
    const result = firstOperand / secondOperand;

    const currentState = {
      ...defaultState,
      firstOperand,
      secondOperand
    };

    const state = reducers(currentState, {
      type: actions.EXECUTE_DIVISION
    });

    expect(state).toEqual({
      firstOperand,
      secondOperand,
      display: result
    });
  });

  test(`should handle EXECUTE_MULTIPLICATION action`, () => {
    const firstOperand = 6;
    const secondOperand = 2;
    const result = firstOperand * secondOperand;

    const currentState = {
      ...defaultState,
      firstOperand,
      secondOperand
    };

    const state = reducers(currentState, {
      type: actions.EXECUTE_MULTIPLICATION
    });

    expect(state).toEqual({
      firstOperand,
      secondOperand,
      display: result
    });
  });

  test(`should handle EXECUTE_ADDITION action`, () => {
    const firstOperand = 2;
    const secondOperand = 10;
    const result = firstOperand + secondOperand;

    const currentState = {
      ...defaultState,
      firstOperand,
      secondOperand
    };

    const state = reducers(currentState, {
      type: actions.EXECUTE_ADDITION
    });

    expect(state).toEqual({
      firstOperand,
      secondOperand,
      display: result
    });
  });

  test(`should handle EXECUTE_SUBTRACTION action`, () => {
    const firstOperand = 5;
    const secondOperand = 2;
    const result = firstOperand - secondOperand;

    const currentState = {
      ...defaultState,
      firstOperand,
      secondOperand
    };

    const state = reducers(currentState, {
      type: actions.EXECUTE_SUBTRACTION
    });

    expect(state).toEqual({
      firstOperand,
      secondOperand,
      display: result
    });
  });

  test(`should handle RESET action`, () => {
    const firstOperand = 5;
    const secondOperand = 2;

    const currentState = {
      ...defaultState,
      firstOperand,
      secondOperand
    };

    const state = reducers(currentState, {
      type: actions.RESET
    });

    expect(state).toEqual({
      ...defaultState,
      firstOperand: 0,
      secondOperand: 0
    });
  });
});
