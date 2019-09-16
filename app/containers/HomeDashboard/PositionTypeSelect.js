import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/FormField';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setPositionTypeValue } from './actions';
import { makeSelectPositionType } from './selectors';

function PositionTypeSelect({ positionType, onPositionTypeChange }) {
  return (
    <FormField>
      <label htmlFor="positionTypeInput">Position Type</label>
      <select id="positionTypeInput" value={positionType} onChange={onPositionTypeChange}>
        <option value="TEAM_MEMBER">Team Member</option>
        <option value="LEADER">Leader</option>
        <option value="SENIOR_LEADER">Senior Leader</option>
      </select>
    </FormField>
  );
}

PositionTypeSelect.propTypes = {
  positionType: PropTypes.string,
  onPositionTypeChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  positionType: makeSelectPositionType(),
});

const mapDispatchToProps = (dispatch) => ({
  onPositionTypeChange: (e) => dispatch(setPositionTypeValue(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionTypeSelect);
