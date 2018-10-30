import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { shuffle } from 'lodash';

import { Box } from '../../components/base';
import SessionCard from './SessionCard';
import { RESULTS } from '../../common/const';

class SessionScreen extends Component {
  componentDidMount() {
    if (this.props.cards.length <= 0) {
      this.props.history.push('/post-session');
    }
  }
  handleNext = recognizeRate => {
    const { cards, history, updateCards } = this.props;

    let updatedCards = [...cards]

    if (recognizeRate === RESULTS.NOT_RECOGNIZE) {
      updatedCards = shuffle(updatedCards) 
    } else {
      updatedCards.splice(0, 1)
    }
    
    if (updatedCards.length === 0) {
      history.push('/post-session');
    } else {
      updateCards(updatedCards);
    }
  };

  render() {
    const { cards, userInfo } = this.props;
    if (cards.length < 1) {
      return null;
    }
    return (
      <Box py={[4, 4, 6]}>
        <SessionCard
          userInfo={userInfo}
          title={cards[0].title}
          description={cards[0].description}
          transactions={cards[0].transactions}
          initialMultiplier={cards[0].initialMultiplier}
          subcards={cards[0].subcards}
          currentDrillPoint={cards[0].drillPoints}
          onNext={this.handleNext}
        />
      </Box>
    );
  }
}

SessionScreen.propTypes = {};

export default SessionScreen;
