import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Input from 'components/Input';
import FormField from 'components/FormField';

import { changeRevenueGoalPercentValueAction } from './actions';
import { makeSelectRevenueGoalPercentValue } from './selectors';

export const RevenueGoalPercentField = ({ revenueGoalPercentValue, onRevenueGoalPercentValueChange }) => (
  <FormField>
    <label htmlFor="salaryInput">Revenue Goal Percent</label>
    <Input id="salaryInput" value={revenueGoalPercentValue} onChange={onRevenueGoalPercentValueChange} />
  </FormField>
);
RevenueGoalPercentField.propTypes = {
  revenueGoalPercentValue: PropTypes.string,
  onRevenueGoalPercentValueChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  revenueGoalPercentValue: makeSelectRevenueGoalPercentValue(),
});

const mapDispatchToProps = (dispatch) => ({
  onRevenueGoalPercentValueChange: (e) => dispatch(changeRevenueGoalPercentValueAction(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(RevenueGoalPercentField);