import React from 'react';
import styled from 'styled-components';
import { Label as RLabel } from 'rebass';

const Label = styled(({ variant = '', ...restProps }) => <RLabel {...restProps} />)`
  font-weight: 700;
  flex-direction: ${props => (props.variant === 'horizontal' ? 'row' : 'column')};
  align-items: ${props => (props.variant === 'horizontal' ? 'center' : 'start')};
`;

export default Label;
