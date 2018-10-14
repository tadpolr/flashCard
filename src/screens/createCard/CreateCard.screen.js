import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firebase from '../../firebase';
import { Box, Button, Divider, Input, Select, Textarea } from '../../components/base';
import CreateCardForm from './CreateCardForm';

class CreateCardScreen extends Component {
  render() {
    return (
      <Box>
        <h1>This is CreateCardScreen.</h1>
        <CreateCardForm />
      </Box>
    );
  }
}

CreateCardScreen.propTypes = {};

export default CreateCardScreen;
