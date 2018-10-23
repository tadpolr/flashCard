import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { firestore } from '../../firebase';

import { Box, Text } from '../../components/base';
import SessionView from './Drill.screen.view';
class SessionScreen extends Component {
  state = {
    cards: null,
  };

  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    const { userInfo } = this.props || {};
    const { uid } = userInfo || {};
    const queryDate = moment().format('YYYYMMDD');
    firestore
      .collection(uid)
      .orderBy('drillPoints')
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
    const { match, history, userInfo } = this.props || {};
    const { params } = match || {};

    if (!cards) {
      return null;
    }

    return (
      <Box py={[4, 4, 6]}>
        <SessionView cards={cards} userInfo={userInfo} history={history} />
      </Box>
    );
  }
}

SessionScreen.propTypes = {};

export default SessionScreen;
