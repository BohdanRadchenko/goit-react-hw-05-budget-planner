import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Stat from '../Stat/Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

const Values = ({ budget, expenses }) => {
  const expensesTotal = calculateTotalExpenses(expenses);
  const balanceTotal = calculateBalance(
    budget,
    calculateTotalExpenses(expenses),
  );
  return (
    <Container>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={expensesTotal} />
      <Stat
        label="Balance"
        value={balanceTotal}
        isPositive={balanceTotal >= 0}
      />
    </Container>
  );
};

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Values;
