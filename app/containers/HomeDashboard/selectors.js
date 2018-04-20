import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

/**
 * Direct selector to the homeDashboard state domain
 */
const selectHomeDashboardDomain = (state) => state.get('homeDashboard', fromJS({}));

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomeDashboard
 */

const QUARTERLY_PERCENT_OF_BONUS = 0.0625;
const BONUS_PERCENT_OF_SALARY = 0.05;
export const BONUS_TAX_RATE = 0.40;

export const makeSelectHomeDashboard = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.toJS()
);

export const makeSelectSalaryValue = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.get('salaryValue')
);

export const makeSelectRevenueGoalPercentValue = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.get('revenueGoalPercentValue')
);

export const makeSelectEbitdaGoalPercentValue = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.get('ebitdaGoalPercentValue')
);

export const makeSelectRevenueBonus = () => createSelector(
  makeSelectSalaryValue(),
  makeSelectRevenueGoalPercentValue(),
  (salaryValue, revenueGoalPercentValue) => {
    const salaryNumber = Number(salaryValue);
    const revenueGoalPercentNumber = Number(revenueGoalPercentValue) / 100;
    const revenueBonusNumber = revenueGoalPercentNumber * (QUARTERLY_PERCENT_OF_BONUS * BONUS_PERCENT_OF_SALARY) * salaryNumber;

    return revenueBonusNumber || 0;
  }
);

export const makeSelectEbitdaBonus = () => createSelector(
  makeSelectSalaryValue(),
  makeSelectEbitdaGoalPercentValue(),
  (salaryValue, ebitdaGoalPercentValue) => {
    const salaryNumber = Number(salaryValue);
    const ebitdaGoalPercentNumber = Number(ebitdaGoalPercentValue) / 100;
    const ebitdaBonusNumber = ebitdaGoalPercentNumber * (QUARTERLY_PERCENT_OF_BONUS * BONUS_PERCENT_OF_SALARY) * salaryNumber;

    return ebitdaBonusNumber || 0;
  }
);

export const makeSelectTotalAfterTaxes = () => createSelector(
  makeSelectRevenueBonus(),
  makeSelectEbitdaBonus(),
  (revenueBonus, ebitdaBonus) => (revenueBonus + ebitdaBonus) * (1 - BONUS_TAX_RATE)
);

export default makeSelectHomeDashboard;
