export const BudgetActions = {
  SET_BALANCE: 'SET_BALANCE',
};

export const setBalance = balance => ({
  type: BudgetActions.SET_BALANCE,
  payload: balance,
});
