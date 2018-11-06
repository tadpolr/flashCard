import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { shuffle } from 'lodash';

import { SESSION_MODE } from '../../common/const';
import { firestore } from '../../firebase';

import { Box, Text } from '../../components/base';
import SessionView from './Session.screen.view';
class SessionScreen extends Component {
  state = {
    cards: null,
  };

  componentDidMount() {
    this.getCards();
  }

  getCardsFromFireStore = () => {
    const {
      userInfo: { uid },
      match: {
        params: { mode },
      },
    } = this.props || {};
    const queryDate = moment().format('YYYYMMDD');

    if (mode === SESSION_MODE.REVIEW) {
      return firestore
        .collection(uid)
        .where('formattedLastDate', '==', queryDate.toString())
        .where('lastResult', '==', 0)
        .get();
    } else {
      return firestore
        .collection(uid)
        .where('formattedNextDate', '<=', queryDate.toString())
        .get();
    }
  };

  getCards = () => {
    this.getCardsFromFireStore()
      .then(querySnapshot => {
        let cards = [];
        querySnapshot.forEach(doc => {
          cards.push(doc.data());
        });
        const shuffledCards = shuffle(cards);
        this.setState({
          cards: shuffledCards,
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  };

  render() {
    const { cards } = this.state;
    const { match, history, userInfo } = this.props || {};
    const {
      params: { mode },
    } = match || {};
    if (!cards) {
      return null;
    }

    return (
      <Box py={[4, 4, 6]}>
        <SessionView cards={cards} userInfo={userInfo} history={history} mode={mode} />
      </Box>
    );
  }
}

SessionScreen.propTypes = {};

export default SessionScreen;
