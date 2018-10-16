import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { last } from 'lodash';

import { firestore } from '../../../firebase';
import SessionCardView from './SessionCard.view';
import { RESULTS } from '../../../common/const';
class SessionCard extends Component {
  handleNext = recognizeRate => {
    const { title, transactions, initialMultiplier } = this.props;

    const today = moment().format();
    const formattedToday = moment().format('YYYYMMDD');
    const nextMultiplier = initialMultiplier; // If we want to make multiplier increased exponentially, modify this line.

    const isResultCorrect = recognizeRate === RESULTS.NOT_RECOGNIZE ? false : true;
    const lastInterval = last(transactions).nextInterval;
    const nextInterval = isResultCorrect ? Math.ceil(lastInterval * nextMultiplier) : lastInterval;

    const newTransaction = {
      date: today,
      formattedDate: formattedToday,
      result: recognizeRate,
      multiplier: nextMultiplier,
      nextInterval: nextInterval,
    };

    const newTransactions = [...transactions, newTransaction];
    const nextDate = moment()
      .add(nextInterval, 'days')
      .format();
    const formattedNextDate = moment()
      .add(nextInterval, 'days')
      .format('YYYYMMDD');

    firestore
      .collection('cards')
      .doc(title)
      .set(
        { transactions: newTransactions, nextDate: nextDate, formattedNextDate: formattedNextDate },
        { merge: true }
      )
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch(error => {
        console.error('Error writing document: ', error);
        alert('There is something error.');
      })
      .then(this.props.onNext());
  };

  render() {
    const { title, description, subcards } = this.props;
    return (
      <SessionCardView
        title={title}
        description={description}
        subcards={subcards}
        onNext={this.handleNext}
      />
    );
  }
}

SessionCard.propTypes = {};

export default SessionCard;
