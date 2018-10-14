import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Box } from '../../components/base';
import SessionCard from './SessionCard';
class SessionScreen extends Component {
  state = {
    currentCardIndex: 0,
  };

  handleNext = () => {};
  render() {
    const { match } = this.props || {};
    const { params } = match || {};
    const date = params.date;
    return (
      <Box py={[4, 4, 6]}>
        <SessionCard
          title={mockData[0].title}
          description={mockData[0].description}
          subcards={mockData[0].subcards}
        />
        This is SessionScreen. for {moment(date).format('YYYY MM DD')}
      </Box>
    );
  }
}

SessionScreen.propTypes = {};

export default SessionScreen;

const mockData = [
  {
    title: 'ti tle',
    description: 'des crip tion',
    multiplier: 1.5,
    lastTransaction: '2018-10-4T16:08:18+07:00',
    note: 'note',
    subcards: [
      {
        word: 'indifference',
        phonetic: 'in-ˈdi-fərn(t)s',
        meanings: [
          'the quality, state, or fact of being indifferent',
          'absence of compulsion to or toward one thing or another',
        ],
        examples: [
          'She was amazed that some people could watch the trial with indifference.',
          'She watched them with a cool indifference.',
        ],
        synonyms: 'apathy, casualness, complacence, disinterestedness, disregard',
      },
      {
        word: 'indifferent',
        phonetic: 'in-ˈdi-fərn(t)s',
        meanings: [
          'the quality, state, or fact of being indifferent',
          'absence of compulsion to or toward one thing or another',
        ],
        examples: [
          'She was amazed that some people could watch the trial with indifference.',
          'She watched them with a cool indifference.',
        ],
        synonyms: 'apathy, casualness, complacence, disinterestedness, disregard',
      },
    ],
  },
  {
    title: 'ti tle 2',
    description: 'des crip tion 2',
    multiplier: 1.5,
    lastTransaction: '2018-10-2T16:08:18+07:00',
    note: 'note',
    subcards: [
      {
        word: 'indifference',
        phonetic: 'in-ˈdi-fərn(t)s',
        meanings: [
          'the quality, state, or fact of being indifferent',
          'absence of compulsion to or toward one thing or another',
        ],
        examples: [
          'She was amazed that some people could watch the trial with indifference.',
          'She watched them with a cool indifference.',
        ],
        synonyms: 'apathy, casualness, complacence, disinterestedness, disregard',
      },
    ],
  },
];
