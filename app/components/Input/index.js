/**
*
* Input
*
*/

import React from 'react';
import styled from 'styled-components';

// const InputContainer = styled.div`
//   position: relative;
//   font-weight: normal;
//   font-style: normal;
//   display: inline-flex;
// `;

const StyledInput = styled.input`
  margin: 0em;
  max-width: 100%;
  display: inline-flex;
  outline: none;
  padding: 0.78571em 1em;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  box-shadow: none;
  background: #FFFFFF;
  border-radius: 0.2857rem;
  &::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  &::-moz-placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  &::-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  &:focus {
    border-color: rgba(39, 41, 43, 0.3);
    background: #FFFFFF;
    color: rgba(0, 0, 0, 0.8);
  }
`;


export const Input = (props) => (
  <StyledInput {...props} />
);

Input.propTypes = {

};

export default Input;
