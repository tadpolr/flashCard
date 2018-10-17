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
    const queryDate = moment().format('YYYYMMDD');
    firestore
      .collection('cards')
      .where('formattedNextDate', '<=', queryDate.toString())
      .orderBy('formattedNextDate', 'desc')
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
