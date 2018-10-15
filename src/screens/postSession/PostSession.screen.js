import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Box, Text } from '../../components/base';

class PostSessionScreen extends Component {
  handleExit = () => {
    const { history } = this.props || {};
    history.push(`/cards`);
  };

  render() {
    return (
      <Box py={6}>
        <Text.Header mb={4}>Congratulation! You have finished all today's words.</Text.Header>
        <Button variant={'default'} colors={'primary'} onClick={this.handleExit}>
          Exit
        </Button>
      </Box>
    );
  }
}

PostSessionScreen.propTypes = {};

export default PostSessionScreen;
