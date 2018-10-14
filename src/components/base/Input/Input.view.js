import React from 'react';
import { Input as RInput, Box } from 'rebass';
import styled from 'styled-components';

import Label from '../Label';

const InputBase = styled(RInput)``;

const InputWithLabel = ({ label, mb, ...restProps }) => (
  <Box mb={mb}>
    <Label>
      {label}
      <InputBase mt={1} {...restProps} />
    </Label>
  </Box>
);

const Input = ({ label, ...restProps }) =>
  !label ? <InputBase {...restProps} /> : <InputWithLabel label={label} {...restProps} />;

export default Input;
