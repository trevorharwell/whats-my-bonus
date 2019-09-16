/**
*
* FormField
*
*/

import styled from 'styled-components';

export const FormField = styled.div`
  clear: both;
  margin: 0em 0em 1em;
  &:last-child {
    margin-bottom: 0em;
  }
  & > label {
    display: block;
    margin: 0em 0em 0.2857rem 0em;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.9285em;
    font-weight: bold;
  }
`;


FormField.propTypes = {

};

export default FormField;
