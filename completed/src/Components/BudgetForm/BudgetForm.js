import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

class BudgetForm extends Component {
  static propTypes = {
    setBalance: PropTypes.func.isRequired,
  };

  state = { budget: '' };

  handleChange = ({ target: { value } }) => {
    this.setState({ budget: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const budgetToNumber = Number(this.state.budget);
    this.props.setBalance(budgetToNumber);

    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

export default BudgetForm;
