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
  SELECT_QUARTER_BONUS_MODE_ACTION,
  SELECT_YEAR_BONUS_MODE_ACTION,
  SET_POSITION_TYPE_VALUE,
  QUARTER_BONUS,
  YEAR_BONUS,
} from './constants';

const initialState = fromJS({
  salaryValue: '',
  positionType: 'LEADER',
  revenueGoalPercentValue: '100',
  ebitdaGoalPercentValue: '100',
  bonusMode: QUARTER_BONUS,
});

function homeDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SALARY_VALUE_ACTION:
      return state.set('salaryValue', action.value);
    case CHANGE_REVENUE_GOAL_PERCENT_VALUE_ACTION:
      return state.set('revenueGoalPercentValue', action.value);
    case CHANGE_EBITDA_GOAL_PERCENT_VALUE_ACTION:
      return state.set('ebitdaGoalPercentValue', action.value);
    case SELECT_QUARTER_BONUS_MODE_ACTION:
      return state.set('bonusMode', QUARTER_BONUS);
    case SELECT_YEAR_BONUS_MODE_ACTION:
      return state.set('bonusMode', YEAR_BONUS);
    case SET_POSITION_TYPE_VALUE:
      return state.set('positionType', action.value);
    default:
      return state;
  }
}

export default homeDashboardReducer;
