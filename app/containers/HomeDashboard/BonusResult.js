import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import numeral from 'numeral';

import FormField from 'components/FormField';

import { makeSelectRevenueBonus, makeSelectEbitdaBonus, makeSelectTotalAfterTaxes } from './selectors';

export const BonusResult = ({ revenueBonus, ebitdaBonus, totalAfterTaxes }) => (
  <div>
    <FormField>
      <label>Revenue Bonus</label>
      <div>{numeral(revenueBonus).format('$0,0.00')}</div>
    </FormField>
    <FormField>
      <label>EBITDA Bonus</label>
      <div>{numeral(ebitdaBonus).format('$0,0.00')}</div>
    </FormField>
    <FormField>
      <label>Total Bonus</label>
      <div>{numeral(revenueBonus + ebitdaBonus).format('$0,0.00')}</div>
    </FormField>
    <hr />
    <FormField>
      <label>Total Bonus After Taxes</label>
      <div>{numeral(totalAfterTaxes).format('$0,0.00')}</div>
    </FormField>
  </div>
);

const mapStateToProps = createStructuredSelector({
  revenueBonus: makeSelectRevenueBonus(),
  ebitdaBonus: makeSelectEbitdaBonus(),
  totalAfterTaxes: makeSelectTotalAfterTaxes(),
});

export default connect(mapStateToProps, null)(BonusResult);