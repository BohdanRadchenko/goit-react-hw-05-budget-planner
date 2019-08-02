import { connect } from 'react-redux';
import getExpenses from '../../redux/expenses/expensesSelectors';
import { removeExpense } from '../../redux/expenses/expensesActions';
import ExpensesTable from './ExpensesTable';

const mapStateToProps = state => ({ items: getExpenses(state) });

const mapDispatchToProps = { removeExpense };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
