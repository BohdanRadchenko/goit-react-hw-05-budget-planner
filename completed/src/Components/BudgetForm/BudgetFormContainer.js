import { connect } from 'react-redux';
import { setBalance } from '../../redux/budget/budgetActions';
import BudgetForm from './BudgetForm';

const mapDispatchToProps = { setBalance };

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
