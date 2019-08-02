import { connect } from 'react-redux';
import getBalance from '../../redux/budget/budgetSelectors';
import getExpenses from '../../redux/expenses/expensesSelectors';
import Values from './Values';

const mapStateToProps = state => ({
  budget: getBalance(state),
  expenses: getExpenses(state),
});

export default connect(mapStateToProps)(Values);
