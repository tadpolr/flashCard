import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firebase from '../../firebase';
import { Box, Text } from '../../components/base';
import CreateCardForm from './CreateCardForm';

class CreateCardScreen extends Component {
  render() {
    const { history } = this.props;
    return (
      <Box py={6}>
        <Text.Header mb={6}>Create New Card</Text.Header>
        <CreateCardForm history={history} />
      </Box>
    );
  }
}

CreateCardScreen.propTypes = {};

export default CreateCardScreen;
