import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import { firestore } from '../../../firebase';
import SessionCardView from './SessionCard.view';
import { RESULTS } from '../../../common/const';
class SessionCard extends Component {
  handleNext = recognizeRate => {
    const { title, transactions, initialMultiplier } = this.props;
    const today = moment().format();
    const multiplier = initialMultiplier;
    const lastDuration = transactions[transactions.length - 1].durationToNext;
    const nextDuration =
      recognizeRate === RESULTS.NOT_RECOGNIZE
        ? lastDuration
        : Math.ceil(parseInt(lastDuration * multiplier), 10);
    let newTransactions = [...transactions];
    newTransactions.push({
      date: today,
      result: recognizeRate,
      multiplier: multiplier,
      durationToNext: nextDuration,
    });

    const nextDate = moment()
      .add(nextDuration, 'days')
      .format();

    firestore
      .collection('cards')
      .doc(title)
      .set({ transactions: newTransactions, nextDate: nextDate }, { merge: true })
      .then(data => {
        console.log('Document successfully written!');
      })
      .catch(function(error) {
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
