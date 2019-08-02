import { ExpensesTypes } from './expensesActions';

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ExpensesTypes.ADD_EXPENSE:
      return [...state, payload];

    case ExpensesTypes.REMOVE_EXPENSE:
      return state.filter(el => el.id !== payload);

    default:
      return state;
  }
};

export default expensesReducer;
