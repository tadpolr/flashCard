import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortBy, reverse } from 'lodash';
import { firestore } from '../../firebase';

import { Box, Text } from '../../components/base';

const INVOLVED_TRANSACTIONS_COUNT = 3
const LEVEL_SCORE = {
  MASTERED: 5,
  REVIEWING: 2,
  SUCK: -1
}

class CardList extends Component {
  state = {
    cards: null,
  };

  componentDidMount() {
    this.getCards();
  };

  getCards = () => {
    const { userInfo } = this.props || {};
    const { uid } = userInfo || {};
    firestore
      .collection(uid)
      .get()
      .then(querySnapshot => {
        let cards = [];
        querySnapshot.forEach(doc => {
          cards.push(doc.data());
        });

        cards.forEach(c => {
          if (!('drillPoints' in c)) {
            c.drillPoints = 0
          }
        })
        cards = sortBy(cards, ['drillPoints'])
        this.setState({ cards });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  };

  countDrillPoints = (min, max=Number.MAX_VALUE) => { // min = inclusive, max = exclusive
    const { cards } = this.state
    return cards.filter(c => {
      let transactions = reverse(sortBy(c.drillTransactions, ['date']))
      transactions = transactions.length > INVOLVED_TRANSACTIONS_COUNT 
        ? transactions.slice(0, INVOLVED_TRANSACTIONS_COUNT) 
        : transactions
      const score = transactions.reduce((acc, t) => acc + t.result, 0)
      return score >= min && score < max
    }).length
  }

  render() {
    const { cards } = this.state
    if (!cards) {
      return <Text.Title>Loading ...</Text.Title>
    }

    const cardCount = cards.length
    const masteredCount = this.countDrillPoints(LEVEL_SCORE.MASTERED)
    const reviewingCount = this.countDrillPoints(LEVEL_SCORE.REVIEWING, LEVEL_SCORE.MASTERED)
    const suckCount = this.countDrillPoints(LEVEL_SCORE.SUCK, LEVEL_SCORE.REVIEWING)
    
    return <Box py={6}>
      <Text.Subtitle>{`Total: ${cardCount}`}</Text.Subtitle>
      <Text.Subtitle>{`Mastered: ${masteredCount}`}</Text.Subtitle>
      <Text.Subtitle>{`Reviewing: ${reviewingCount}`}</Text.Subtitle>
      <Text.Subtitle>{`Suck: ${suckCount}`}</Text.Subtitle>
      {/*cards.map((c, index) => {
        return <Text.Subtitle key={index}>{`${c.title}: ${c.drillPoints}`}</Text.Subtitle>
      })*/}
    </Box>
  }
}

CardList.propTypes = {};

export default CardList;
