import { createActions } from 'redux-actions';

export const {
  updateFirstOperand,
  updateSecondOperand,
  defineOperator,
  executeOperation,
  showResult
 } = createActions({
    UPDATE_FIRST_OPERAND: (number) => ({ number }),
    UPDATE_SECOND_OPERAND: (number) => ({ number }),
    DEFINE_OPERATOR: (operator) => ({ operator }),
    EXECUTE_OPERATION: () => ({}),
    SHOW_RESULT: (result) => ({ result })
  })
  