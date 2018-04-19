
import { fromJS } from 'immutable';
import homeDashboardReducer from '../reducer';

describe('homeDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(homeDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
