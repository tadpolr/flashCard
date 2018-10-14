import React from 'react';
import { Textarea as RTextarea, Box } from 'rebass';
import styled from 'styled-components';

import Label from '../Label';

const TextareaBase = styled(RTextarea)``;

const TextareaWithLabel = ({ label, mb, ...restProps }) => (
  <Box mb={mb}>
    <Label>
      {label}
      <TextareaBase mt={1} {...restProps} />
    </Label>
  </Box>
);

const Textarea = ({ label, ...restProps }) =>
  !label ? <TextareaBase {...restProps} /> : <TextareaWithLabel label={label} {...restProps} />;

export default Textarea;
