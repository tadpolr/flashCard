import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Box } from '../../components/base';
import SessionCard from './SessionCard';
class SessionScreen extends Component {
  state = {
    currentCardIndex: 0,
  };
  componentDidMount() {
    if (this.props.cards.length < 1) {
      this.props.history.push('/post-session');
    }
  }
  handleNext = () => {
    const { currentCardIndex } = this.state;
    const { cards, history } = this.props;
    const cardCount = cards.length;
    if (currentCardIndex === cardCount - 1) {
      history.push('/post-session');
    } else {
      this.setState({
        currentCardIndex: this.state.currentCardIndex + 1,
      });
    }
  };
  render() {
    const { currentCardIndex } = this.state;
    const { cards, userInfo } = this.props;
    if (cards.length < 1) {
      return null;
    }
    return (
      <Box py={[4, 4, 6]}>
        <SessionCard
          userInfo={userInfo}
          title={cards[currentCardIndex].title}
          description={cards[currentCardIndex].description}
          transactions={cards[currentCardIndex].transactions}
          initialMultiplier={cards[currentCardIndex].initialMultiplier}
          subcards={cards[currentCardIndex].subcards}
          onNext={this.handleNext}
        />
      </Box>
    );
  }
}

SessionScreen.propTypes = {};

export default SessionScreen;
