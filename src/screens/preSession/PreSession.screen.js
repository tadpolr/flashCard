import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import { Button, Box, Text } from '../../components/base';

class PreSessionScreen extends Component {
  handleEnterSession = () => {
    const { history } = this.props || {};
    const today = moment().format();
    history.push(`/session/${today}`);
  };

  render() {
    return (
      <Box py={6}>
        <Text.Header mb={4}>Start today's session now?</Text.Header>
        <Button variant={'default'} colors={'primary'} onClick={this.handleEnterSession}>
          Start today session
        </Button>
      </Box>
    );
  }
}

PreSessionScreen.propTypes = {};

export default PreSessionScreen;
