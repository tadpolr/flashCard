import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { last } from 'lodash';

import { firestore } from '../../../firebase';
import SessionCardView from './SessionCard.view';
import { RESULTS, SESSION_MODE } from '../../../common/const';
class SessionCard extends Component {
  handleNext = recognizeRate => {
    const { title, transactions, reviewTransactions = [], initialMultiplier, userInfo, mode } =
      this.props || {};
    const { uid } = userInfo;

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
    const newReviewTransactions = [...reviewTransactions, newTransaction];
    const nextDate = moment()
      .add(nextInterval, 'days')
      .format();
    const formattedNextDate = moment()
      .add(nextInterval, 'days')
      .format('YYYYMMDD');

    const updateData =
      mode === SESSION_MODE.SESSION
        ? {
            transactions: newTransactions,
            nextDate: nextDate,
            formattedNextDate: formattedNextDate,
            lastDate: today,
            formattedLastDate: formattedToday,
            lastResult: recognizeRate,
          }
        : mode === SESSION_MODE.REVIEW
          ? {
              lastResult: recognizeRate,
              reviewTransaction: newReviewTransactions,
              lastDate: today,
              formattedLastDate: formattedToday,
            }
          : {};
    firestore
      .collection(uid)
      .doc(title)
      .set(updateData, { merge: true })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch(error => {
        console.error('Error writing document: ', error);
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
