import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Input from 'components/Input';
import FormField from 'components/FormField';

import { changeSalaryValueAction } from './actions';
import { makeSelectSalaryValue } from './selectors';

export const SalaryField = ({ salaryValue, onSalaryValueChange }) => (
  <FormField>
    <label htmlFor="salaryInput">Salary</label>
    <Input id="salaryInput" value={salaryValue} onChange={onSalaryValueChange} />
  </FormField>
);
SalaryField.propTypes = {
  salaryValue: PropTypes.string,
  onSalaryValueChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  salaryValue: makeSelectSalaryValue(),
});

const mapDispatchToProps = (dispatch) => ({
  onSalaryValueChange: (e) => dispatch(changeSalaryValueAction(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalaryField);
