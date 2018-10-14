import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Box, Text, Button } from '../../../components/base';

const StimulusView = ({ title, description, onClick }) => (
  <Fragment>
    <Box mb={4}>
      <Text.Header>{title}</Text.Header>
      <Text color={'secondaryLight'}>{description}</Text>
    </Box>
    <Button variant={'default'} colors={'secondaryLight'} onClick={onClick}>
      View Meanings
    </Button>
  </Fragment>
);

StimulusView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

StimulusView.defaultProps = {
  title: '',
  description: '',
};

export default StimulusView;
