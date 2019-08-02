import { BudgetActions } from './budgetActions';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case BudgetActions.SET_BALANCE:
      return payload;

    default:
      return state;
  }
};

export default budgetReducer;
