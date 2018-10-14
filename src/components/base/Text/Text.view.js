import React from 'react';
import { Text as RText } from 'rebass';
import styled from 'styled-components';
import { width, display } from 'styled-system';

const Text = styled(({ ...restProps }) => <RText fontSize={[1, 1, 2]} {...restProps} />)`
  ${width};
  ${display};
`;
const Header = ({ ...restProps }) => <Text fontSize={5} fontWeight={700} {...restProps} />;
const Title = ({ ...restProps }) => <Text fontSize={4} fontWeight={700} {...restProps} />;
const Subtitle = ({ ...restProps }) => <Text fontSize={3} fontWeight={700} {...restProps} />;
const Hint = ({ ...restProps }) => <Text fontSize={0} {...restProps} />;

Text.displayName = Text;
Text.Header = Header;
Text.Title = Title;
Text.Subtitle = Subtitle;
Text.Hint = Hint;

export default Text;
