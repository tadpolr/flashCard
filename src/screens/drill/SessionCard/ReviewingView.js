import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Text, Box, Divider, Flex } from '../../../components/base';

const SubcardArrComponent = ({ title, data = [] }) => (
  <Box mb={3}>
    <Text fontWeight={600}>{title}</Text>
    {data.map((datum, index) => (
      <Flex key={datum + index} pl={[3, 3, 6]}>
        <Text fontWeight={600} width={'16px'} mr={1}>{`${index}:`}</Text>
        <Text>{datum}</Text>
      </Flex>
    ))}
  </Box>
);
const Subcard = ({ word, pos, phonetic, meanings, examples, synonyms }) => (
  <Box>
    <Flex alignItems={'baseline'}>
      <Text.Subtitle fontWeight={900} mb={1} mr={1}>
        {word}
      </Text.Subtitle>
      <Text color={'secondaryLight'}>{`<${pos}>`}</Text>
    </Flex>
    <Text.Hint color={'secondaryLight'} mb={[3, 3, 4]}>
      {phonetic}
    </Text.Hint>
    <Box pl={[3, 3, 6]}>
      <SubcardArrComponent title={'Meanings'} data={meanings} />
      <SubcardArrComponent title={'Examples'} data={examples} />
      <Box>
        <Text fontWeight={600}>Synonyms</Text>
        <Text color={'secondaryLight'} pl={[3, 3, 6]}>
          {synonyms}
        </Text>
      </Box>
    </Box>
    <Divider my={[4, 4, 6]} />
  </Box>
);

const ReviewingView = ({ title, description, subcards }) => (
  <Fragment>
    <Box mb={4}>
      <Text.Header>{title}</Text.Header>
      <Text color={'secondaryLight'}>{description}</Text>
    </Box>
    <Divider my={6} />
    {subcards.map(subcard => {
      return (
        <Subcard
          key={subcard.word}
          word={subcard.word}
          pos={subcard.pos}
          phonetic={subcard.phonetic}
          meanings={subcard.meanings}
          examples={subcard.examples}
          synonyms={subcard.synonyms}
        />
      );
    })}
  </Fragment>
);

ReviewingView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  subcards: PropTypes.array,
};

ReviewingView.defaultProps = {
  title: '',
  description: '',
  subcards: [],
};

export default ReviewingView;
