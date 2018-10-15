import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { firestore } from '../../firebase';

import { Box } from '../../components/base';
import SessionView from './Session.screen.view';
class SessionScreen extends Component {
  state = {
    cards: null,
  };

  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    const queryDate = moment()
      .add(3, 'days')
      .format();
    firestore
      .collection('cards')
      .where('nextDate', '<=', queryDate)
      .orderBy('nextDate', 'desc')
      .get()
      .then(querySnapshot => {
        let cards = [];
        querySnapshot.forEach(doc => {
          cards.push(doc.data());
        });
        this.setState({
          cards: cards,
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  };

  render() {
    const { cards } = this.state;
    const { match, history } = this.props || {};
    const { params } = match || {};

    if (!cards) {
      return null;
    }

    return (
      <Box py={[4, 4, 6]}>
        <SessionView cards={cards} history={history} />
      </Box>
    );
  }
}

SessionScreen.propTypes = {};

export default SessionScreen;

const mockData = [
  {
    title: 'indifference',
    description: 'des crip tion',
    multiplier: 1.5,
    lastTransaction: '2018-10-4T16:08:18+07:00',
    note: 'note',
    subcards: [
      {
        word: 'indifference',
        pos: 'n.',
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
        pos: 'adj.',
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
