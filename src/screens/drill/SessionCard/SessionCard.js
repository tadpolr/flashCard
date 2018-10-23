import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { last } from 'lodash';

import { firestore } from '../../../firebase';
import SessionCardView from './SessionCard.view';
import { RESULTS } from '../../../common/const';

const getDrillPoints = recognizeRate => {
  switch (recognizeRate) {
    case RESULTS.NOT_RECOGNIZE:
      return 0;
    case RESULTS.HARDLY_RECOGNIZE:
      return 1;
    case RESULTS.EASILY_RECOGNIZE:
      return 1;
    default:
      return 1;
  }
};
class SessionCard extends Component {
  handleNext = recognizeRate => {
    const { title, transactions, userInfo } = this.props || {};
    const { uid } = userInfo;

    const today = moment().format();
    const formattedToday = moment().format('YYYYMMDD');

    const drillPoints = getDrillPoints(recognizeRate);

    const newTransaction = {
      date: today,
      formattedDate: formattedToday,
      result: recognizeRate,
    };

    const newTransactions = [...transactions, newTransaction];

    firestore
      .collection(uid)
      .doc(title)
      .set({ drillTransactions: newTransactions, drillPoints: drillPoints }, { merge: true })
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
