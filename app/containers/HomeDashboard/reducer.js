/*
 *
 * HomeDashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SALARY_VALUE_ACTION,
  CHANGE_REVENUE_GOAL_PERCENT_VALUE_ACTION,
  CHANGE_EBITDA_GOAL_PERCENT_VALUE_ACTION,
} from './constants';

const initialState = fromJS({
  salaryValue: '',
  revenueGoalPercentValue: '100',
  ebitdaGoalPercentValue: '160',
});

function homeDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SALARY_VALUE_ACTION:
      return state.set('salaryValue', action.value);
    case CHANGE_REVENUE_GOAL_PERCENT_VALUE_ACTION:
      return state.set('revenueGoalPercentValue', action.value);
    case CHANGE_EBITDA_GOAL_PERCENT_VALUE_ACTION:
      return state.set('ebitdaGoalPercentValue', action.value);
    default:
      return state;
  }
}

export default homeDashboardReducer;
