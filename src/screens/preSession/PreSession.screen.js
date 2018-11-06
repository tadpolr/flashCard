import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import { Button, Box, Text, Flex } from '../../components/base';
import { SESSION_MODE } from '../../common/const';

class PreSessionScreen extends Component {
  handleEnterSession = mode => {
    const { history } = this.props || {};
    const today = moment().format();
    history.push(`/session/${today}/${mode}`);
  };

  render() {
    return (
      <Box py={6}>
        <Text.Header mb={4}>Start today's session now?</Text.Header>
        <Flex flexDirection={'column'}>
          <Button
            variant={'default'}
            colors={'primary'}
            width={'200px'}
            mb={4}
            onClick={() => this.handleEnterSession(SESSION_MODE.SESSION)}
          >
            Start today's session
          </Button>
          <Button
            variant={'outline'}
            colors={'primary'}
            width={'200px'}
            onClick={() => this.handleEnterSession(SESSION_MODE.REVIEW)}
          >
            Review today's session
          </Button>
        </Flex>
      </Box>
    );
  }
}

PreSessionScreen.propTypes = {};

export default PreSessionScreen;
