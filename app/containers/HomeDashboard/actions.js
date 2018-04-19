/*
 *
 * HomeDashboard actions
 *
 */

import {
  CHANGE_SALARY_VALUE_ACTION,
  CHANGE_REVENUE_GOAL_PERCENT_VALUE_ACTION,
  CHANGE_EBITDA_GOAL_PERCENT_VALUE_ACTION,
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