import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { sortBy, shuffle } from 'lodash';
import { firestore } from '../../firebase';

import { Box, Text } from '../../components/base';
import SessionView from './Drill.screen.view';
class SessionScreen extends Component {
  maxCardCountPerSession = 20
  state = {
    cards: null,
  };

  componentDidMount() {
    this.getCards();
  }

  updateCards = cards => {
    this.setState({ cards })
  }

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

        // Some card does not have drill point.
        cards.forEach(c => {
          if (!('drillPoints' in c)) {
            c.drillPoints = 0
          }
        })

        cards = sortBy(shuffle(cards), ['drillPoints']).slice(0, this.maxCardCountPerSession)
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
        <SessionView cards={cards} userInfo={userInfo} history={history} updateCards={this.updateCards} />
      </Box>
    );
  }
}

SessionScreen.propTypes = {};

export default SessionScreen;
