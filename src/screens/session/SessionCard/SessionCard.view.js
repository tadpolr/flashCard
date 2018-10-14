import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import { Card, Button, Box, Flex } from '../../../components/base';

import StimulusView from './StimulusView';
import ReviewingView from './ReviewingView';
class SessionCard extends Component {
  state = {
    isReviewing: false,
  };

  handleClickViewMeaning = () => {
    this.setState({
      isReviewing: true,
    });
  };
  render() {
    const { isReviewing } = this.state;
    const { title, description, subcards } = this.props;
    return (
      <Box>
        <Card mb={7} p={[4, 4, 6]}>
          {isReviewing ? (
            <ReviewingView title={title} description={description} subcards={subcards} />
          ) : (
            <StimulusView
              title={title}
              description={description}
              onClick={this.handleClickViewMeaning}
            />
          )}
        </Card>
        <Flex flexDirection={'column'}>
          <Button variant={'default'} colors={'success'} mb={[4, 4, 6]}>
            I can easily recognize this word.
          </Button>
          <Button variant={'outline'} colors={'warning'} mb={[4, 4, 6]}>
            I can hardly recognize this word.
          </Button>
          <Button variant={'outline'} colors={'danger'} mb={[4, 4, 6]}>
            I can cannot recognize this word.
          </Button>
        </Flex>
      </Box>
    );
  }
}

SessionCard.propTypes = {};

export default SessionCard;
