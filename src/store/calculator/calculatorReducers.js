import { handleActions } from 'redux-actions';

const initialState = {
  display: 0,
  firstOperand: 0,
  operator: '',
  secondOperand: 0
};

const reducer = handleActions({
  UPDATE_FIRST_OPERAND: (state, action) => ({
    ...state,
    display: parseInt(`${state.firstOperand}${action.payload.number}`),
    firstOperand: parseInt(`${state.firstOperand}${action.payload.number}`)
  }),
  UPDATE_SECOND_OPERAND: (state, action) => ({
    ...state,
    display: parseInt(`${state.secondOperand}${action.payload.number}`),
    secondOperand: parseInt(`${state.secondOperand}${action.payload.number}`)
  }),
  DEFINE_OPERATOR: (state, action) => ({
    ...state,
    display: state.firstOperand,
    operator: action.payload.operator.name
  }),
  SHOW_RESULT: (state, action) => ({
    display: action.payload.result,
    firstOperand: 0,
    operator: '',
    secondOperand: 0
  }),

}, initialState);

export default reducer;
