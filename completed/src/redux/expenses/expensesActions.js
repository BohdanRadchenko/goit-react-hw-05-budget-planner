export const ExpensesTypes = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

export const addExpense = expense => ({
  type: ExpensesTypes.ADD_EXPENSE,
  payload: expense,
});

export const removeExpense = id => ({
  type: ExpensesTypes.REMOVE_EXPENSE,
  payload: id,
});
