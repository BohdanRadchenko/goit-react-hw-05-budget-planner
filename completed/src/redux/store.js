import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import budgetReducer from './budget/budgetReducer';
import expensesReducer from './expenses/expensesReducer';

const reducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
