import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firebase from '../../firebase';
import { Box, Text } from '../../components/base';
import CreateCardForm from './CreateCardForm';

class CreateCardScreen extends Component {
  render() {
    return (
      <Box py={6}>
        <Text.Header mb={6}>Create New Card</Text.Header>
        <CreateCardForm />
      </Box>
    );
  }
}

CreateCardScreen.propTypes = {};

export default CreateCardScreen;
