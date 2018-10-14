import React from 'react';
import { Button as RButton } from 'rebass';
import styled from 'styled-components';
import { buttonStyle, colorStyle } from 'styled-system';

import { COLOR } from '../../../theme';

const Button = styled(({ condense, disabled, ...restProps }) => <RButton {...restProps} />)`
  font-size: 13px;
  font-weight: 400;
  border-radius: 3px;
  margin: 0;
  padding: ${props => (props.condense ? '6px 12px' : '12px 24px')};
  font-family: inherit;
  &:hover {
    box-shadow: none;
  }
  &:active: {
    box-shadow: none;
  }
  &:focus: {
    box-shadow: none;
  }
  ${props =>
    props.disabled &&
    `
  color: 'white',
  background-color: ${COLOR.secondaryLight},
  border-color: ${COLOR.secondaryLight},
  cursor: 'not-allowed',
  &:hover {
    color: 'white',
    background-color: ${COLOR.secondaryLight},
    border-color: ${COLOR.secondaryLight},
  },
  &:active {
    color: white;
    background-color: ${COLOR.secondaryLight};
    border-color: ${COLOR.secondaryLight};
  };
`};
  ${colorStyle};
  ${buttonStyle};
`;

export default Button;
