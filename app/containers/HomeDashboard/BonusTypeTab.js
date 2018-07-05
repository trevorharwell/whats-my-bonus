import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import {
  QUARTER_BONUS,
  YEAR_BONUS,
} from './constants';
import {
  makeSelectBonusMode,
} from './selectors';
import {
  selectQuarterBonusModeAction,
  selectYearBonusModeAction,
} from './actions';

export const TabContainer = styled.div`
  position: relative;
  margin-bottom: 2em;
  &:after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 1px;
    background: #aaa;
    z-index: 1;
  }
`;

export const Tab = styled.div`
  position: relative;
  padding: 0.5em 1em;
  border-bottom: 1px solid transparent;
  display: inline-block;
  z-index: 2;
  ${({ active }) => active && `
    font-weight: bold;
    border-color: black;
  `}
  ${({ active }) => !active && `
    cursor: pointer;
  `}
`;

export const BonusTypeTab = ({
  bonusMode,
  onClickQuarterBonusTab,
  onClickYearBonusTab,
}) => (
  <TabContainer>
    <Tab active={bonusMode === QUARTER_BONUS} onClick={onClickQuarterBonusTab}>Quarter Bonus</Tab>
    <Tab active={bonusMode === YEAR_BONUS} onClick={onClickYearBonusTab}>Year Bonus</Tab>
  </TabContainer>
);
BonusTypeTab.propTypes = {
  bonusMode: PropTypes.string,
  onClickQuarterBonusTab: PropTypes.func,
  onClickYearBonusTab: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  bonusMode: makeSelectBonusMode(),
});

const mapDispatchToProps = {
  onClickQuarterBonusTab: selectQuarterBonusModeAction,
  onClickYearBonusTab: selectYearBonusModeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(BonusTypeTab);
