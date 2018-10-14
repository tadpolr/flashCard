import { Card as RCard } from 'rebass';
import styled from 'styled-components';

import { COLOR } from '../../../theme';

const Card = styled(RCard)`
  border: 1px solid ${COLOR.greyLighter};
`;

export default Card;
