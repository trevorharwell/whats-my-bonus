/*
 *
 * HomeDashboard actions
 *
 */

import {
  CHANGE_SALARY_VALUE_ACTION,
  CHANGE_REVENUE_GOAL_PERCENT_VALUE_ACTION,
  CHANGE_EBITDA_GOAL_PERCENT_VALUE_ACTION,
  SELECT_QUARTER_BONUS_MODE_ACTION,
  SELECT_YEAR_BONUS_MODE_ACTION,
} from './constants';

export const changeSalaryValueAction = (value) => ({
  type: CHANGE_SALARY_VALUE_ACTION,
  value,
});

export const changeRevenueGoalPercentValueAction = (value) => ({
  type: CHANGE_REVENUE_GOAL_PERCENT_VALUE_ACTION,
  value,
});

export const changeEbitdaGoalPercentValueAction = (value) => ({
  type: CHANGE_EBITDA_GOAL_PERCENT_VALUE_ACTION,
  value,
});

export const selectQuarterBonusModeAction = () => ({
  type: SELECT_QUARTER_BONUS_MODE_ACTION,
});

export const selectYearBonusModeAction = () => ({
  type: SELECT_YEAR_BONUS_MODE_ACTION,
});
