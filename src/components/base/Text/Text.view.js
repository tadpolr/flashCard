import React from 'react';
import { Text as RText } from 'rebass';
import styled from 'styled-components';

const Text = styled(RText)``;
const Header = ({ ...restProps }) => <Text {...restProps} fontSize={5} fontWeight={500} />;
const Title = ({ ...restProps }) => <Text {...restProps} fontSize={4} fontWeight={500} />;
const Subtitle = ({ ...restProps }) => <Text {...restProps} fontSize={3} />;

Text.displayName = Text;
Text.Header = Header;
Text.Title = Title;
Text.Subtitle = Subtitle;

export default Text;
