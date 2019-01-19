/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import numeral from 'numeral';

import FormField from 'components/FormField';

import {
  BONUS_TAX_RATE,
  makeSelectRevenueBonus,
  makeSelectRevenuePayoutPercent,
  makeSelectEbitdaBonus,
  makeSelectEbitdaPayoutPercent,
  makeSelectTotalAfterTaxes,
} from './selectors';

export const BonusResult = ({
  revenueBonus,
  revenuePayoutPercent,
  ebitdaBonus,
  ebitdaPayoutPercent,
  totalAfterTaxes,
}) => (
  <div>
    <FormField>
      <label>Revenue Bonus</label>
      <div>
        {numeral(revenueBonus).format('$0,0.00')}
        &nbsp;&nbsp;&nbsp;
        ({revenuePayoutPercent ? revenuePayoutPercent * 100 : 0}% payout)
      </div>
      <div></div>
    </FormField>
    <FormField>
      <label>EBITDA Bonus</label>
      <div>
        {numeral(ebitdaBonus).format('$0,0.00')}
        &nbsp;&nbsp;&nbsp;
        ({ebitdaPayoutPercent ? ebitdaPayoutPercent * 100 : 0}% payout)
      </div>
      <div></div>
    </FormField>
    <FormField>
      <label>Total Bonus</label>
      <div>{numeral(revenueBonus + ebitdaBonus).format('$0,0.00')}</div>
    </FormField>
    <hr />
    <FormField>
      <label>Total Bonus After Taxes ({BONUS_TAX_RATE * 100}%)</label>
      <div>{numeral(totalAfterTaxes).format('$0,0.00')}</div>
    </FormField>
  </div>
);

BonusResult.propTypes = {
  revenueBonus: PropTypes.number,
  revenuePayoutPercent: PropTypes.number,
  ebitdaBonus: PropTypes.number,
  ebitdaPayoutPercent: PropTypes.number,
  totalAfterTaxes: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  revenueBonus: makeSelectRevenueBonus(),
  revenuePayoutPercent: makeSelectRevenuePayoutPercent(),
  ebitdaBonus: makeSelectEbitdaBonus(),
  ebitdaPayoutPercent: makeSelectEbitdaPayoutPercent(),
  totalAfterTaxes: makeSelectTotalAfterTaxes(),
});

export default connect(mapStateToProps, null)(BonusResult);
