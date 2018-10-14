import React, { Component, PropTypes } from 'react';
import moment from 'moment';
class SessionScreen extends Component {
  render() {
    console.log(this.props);
    const { match } = this.props || {};
    const { params } = match || {};
    const date = params.date;
    return <div>This is SessionScreen. for {moment(date).format('YYYY MM DD')}</div>;
  }
}

SessionScreen.propTypes = {};

export default SessionScreen;
