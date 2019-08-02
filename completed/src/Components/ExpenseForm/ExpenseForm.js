import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Form from '../Form/Form';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

class ExpenseForm extends Component {
  static propTypes = {
    addExpense: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, amount } = this.state;

    const expenseToAdd = {
      name,
      amount: Number(amount),
      id: shortid.generate(),
    };

    this.props.addExpense(expenseToAdd);

    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

export default ExpenseForm;
