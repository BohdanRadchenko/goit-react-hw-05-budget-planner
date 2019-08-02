import { connect } from 'react-redux';
import { addExpense } from '../../redux/expenses/expensesActions';
import ExpenseForm from './ExpenseForm';

const mapDispatchToProps = { addExpense };

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
