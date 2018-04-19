import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Input from 'components/Input';
import FormField from 'components/FormField';

import { changeEbitdaGoalPercentValueAction } from './actions';
import { makeSelectEbitdaGoalPercentValue } from './selectors';

export const EbitdaGoalPercentField = ({ ebitdaGoalPercentValue, onEbitdaGoalPercentValueChange }) => (
  <FormField>
    <label htmlFor="salaryInput">EBITDA Goal Percent</label>
    <Input id="salaryInput" value={ebitdaGoalPercentValue} onChange={onEbitdaGoalPercentValueChange} />
  </FormField>
);
EbitdaGoalPercentField.propTypes = {
  ebitdaGoalPercentValue: PropTypes.string,
  onEbitdaGoalPercentValueChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  ebitdaGoalPercentValue: makeSelectEbitdaGoalPercentValue(),
});

const mapDispatchToProps = (dispatch) => ({
  onEbitdaGoalPercentValueChange: (e) => dispatch(changeEbitdaGoalPercentValueAction(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(EbitdaGoalPercentField);