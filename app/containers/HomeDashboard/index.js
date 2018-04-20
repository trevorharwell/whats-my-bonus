/**
 *
 * HomeDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import RetroHeader from './RetroHeader';
import PageContainer from './PageContainer';
import SalaryField from './SalaryField';
import RevenueGoalPercentField from './RevenueGoalPercentField';
import EbitdaGoalPercentField from './EbitdaGoalPercentField';
import BonusResult from './BonusResult';
import makeSelectHomeDashboard from './selectors';
import reducer from './reducer';
import messages from './messages';

export function HomeDashboard() {
  return (
    <PageContainer>
      <Helmet>
        <title>#whatsmybonus</title>
        <meta name="description" content="Calculate your Bonus" />
      </Helmet>
      <RetroHeader>
        <FormattedMessage {...messages.header} />
      </RetroHeader>
      <SalaryField />
      <RevenueGoalPercentField />
      <EbitdaGoalPercentField />
      <BonusResult />
    </PageContainer>
  );
}

HomeDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homedashboard: makeSelectHomeDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homeDashboard', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomeDashboard);
