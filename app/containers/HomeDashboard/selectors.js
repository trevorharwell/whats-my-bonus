import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { YEAR_BONUS } from './constants';

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

const TOTAL_TEAM_MEMBER_BONUS_PERCENT_OF_SALARY = 0.05;
const TOTAL_LEADER_BONUS_PERCENT_OF_SALARY = 0.1;
const TOTAL_SENIOR_LEADER_BONUS_PERCENT_OF_SALARY = 0.15;
const QUARTERLY_PERCENT_OF_BONUS = 0.0625;
const ANNUAL_PERCENT_OF_BONUS = 0.25;
export const BONUS_TAX_RATE = 0.25;

export const makeSelectHomeDashboard = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.toJS()
);

export const makeSelectSalaryValue = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.get('salaryValue')
);

export const makeSelectPositionType = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.get('positionType')
);

export const makeSelectRevenueGoalPercentValue = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.get('revenueGoalPercentValue')
);

export const makeSelectEbitdaGoalPercentValue = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.get('ebitdaGoalPercentValue')
);

export const makeSelectBonusMode = () => createSelector(
  selectHomeDashboardDomain,
  (substate) => substate.get('bonusMode')
);

export const getPayoutPercentForGoalPercent = (goalPercent) => {
  if (goalPercent <= 0.8) {
    return 0;
  } else if (goalPercent <= 0.85) {
    return 0.25;
  } else if (goalPercent <= 0.9) {
    return 0.5;
  } else if (goalPercent <= 0.95) {
    return 0.75;
  } else if (goalPercent <= 1.05) {
    return 1;
  } else if (goalPercent <= 1.1) {
    return 1.15;
  } else if (goalPercent <= 1.15) {
    return 1.3;
  } else if (goalPercent <= 1.2) {
    return 1.45;
  }
  return 1.6;
};

export const makeSelectBonusPayoutPercent = () => createSelector(
  makeSelectPositionType(),
  (positionType) => {
    if (positionType === 'LEADER') {
      return TOTAL_LEADER_BONUS_PERCENT_OF_SALARY;
    }
    if (positionType === 'SENIOR_LEADER') {
      return TOTAL_SENIOR_LEADER_BONUS_PERCENT_OF_SALARY;
    }
    return TOTAL_TEAM_MEMBER_BONUS_PERCENT_OF_SALARY;
  }
);

export const makeSelectRevenuePayoutPercent = () => createSelector(
  makeSelectRevenueGoalPercentValue(),
  (revenueGoalPercentValue) => getPayoutPercentForGoalPercent(
    Number(revenueGoalPercentValue) / 100
  ),
);

export const makeSelectRevenueBonus = () => createSelector(
  makeSelectBonusPayoutPercent(),
  makeSelectSalaryValue(),
  makeSelectRevenueGoalPercentValue(),
  makeSelectBonusMode(),
  (bonusPayoutPercent, salaryValue, revenueGoalPercentValue, bonusMode) => {
    const salaryNumber = Number(salaryValue);
    const revenueGoalPercentNumber = Number(revenueGoalPercentValue) / 100;
    const revenueBonusNumber = getPayoutPercentForGoalPercent(revenueGoalPercentNumber)
      * bonusPayoutPercent
      * (bonusMode === YEAR_BONUS ? ANNUAL_PERCENT_OF_BONUS : QUARTERLY_PERCENT_OF_BONUS)
      * salaryNumber;

    return revenueBonusNumber || 0;
  }
);

export const makeSelectEbitdaPayoutPercent = () => createSelector(
  makeSelectEbitdaGoalPercentValue(),
  (ebitdaGoalPercentValue) => getPayoutPercentForGoalPercent(
    Number(ebitdaGoalPercentValue) / 100
  ),
);

export const makeSelectEbitdaBonus = () => createSelector(
  makeSelectBonusPayoutPercent(),
  makeSelectSalaryValue(),
  makeSelectEbitdaGoalPercentValue(),
  makeSelectBonusMode(),
  (bonusPayoutPercent, salaryValue, ebitdaGoalPercentValue, bonusMode) => {
    const salaryNumber = Number(salaryValue);
    const ebitdaGoalPercentNumber = Number(ebitdaGoalPercentValue) / 100;
    const ebitdaBonusNumber = getPayoutPercentForGoalPercent(ebitdaGoalPercentNumber)
      * bonusPayoutPercent
      * (bonusMode === YEAR_BONUS ? ANNUAL_PERCENT_OF_BONUS : QUARTERLY_PERCENT_OF_BONUS)
      * salaryNumber;

    return ebitdaBonusNumber || 0;
  }
);

export const makeSelectTotalAfterTaxes = () => createSelector(
  makeSelectRevenueBonus(),
  makeSelectEbitdaBonus(),
  (revenueBonus, ebitdaBonus) => (revenueBonus + ebitdaBonus) * (1 - BONUS_TAX_RATE)
);

export default makeSelectHomeDashboard;
