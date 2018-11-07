import request from 'superagent';

const baseUrl = 'http://localhost:3001/api/v1/do';

export const doOperation = async ({firstOperand, secondOperand, operator}) => {
    return await request.get(`${baseUrl}/?firstOperand=${firstOperand}&secondOperand=${secondOperand}&operation=${operator}`).set('Access-Control-Allow-Origin', '*');
};
