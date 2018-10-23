import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import { Card, Button, Box, Flex } from '../../../components/base';
import { RESULTS } from '../../../common/const';

import StimulusView from './StimulusView';
import ReviewingView from './ReviewingView';
class SessionCard extends Component {
  state = {
    isReviewing: false,
  };
  handleNext = recognizeRate => {
    this.setState({
      isReviewing: false,
    });
    this.props.onNext(recognizeRate);
  };
  handleClickViewMeaning = () => {
    this.setState({
      isReviewing: true,
    });
  };
  render() {
    const { isReviewing } = this.state;
    const { title, description, subcards, onNext } = this.props;
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
          <Button
            variant={'default'}
            colors={'success'}
            mb={[4, 4, 6]}
            onClick={() => this.handleNext(RESULTS.EASILY_RECOGNIZE)}
          >
            Yeah! I know this word.
          </Button>

          <Button
            variant={'outline'}
            colors={'warning'}
            mb={[4, 4, 6]}
            onClick={() => this.handleNext(RESULTS.HARDLY_RECOGNIZE)}
          >
            Umm! Let me think first ...
          </Button>
          <Button
            variant={'outline'}
            colors={'danger'}
            mb={[4, 4, 6]}
            onClick={() => this.handleNext(RESULTS.NOT_RECOGNIZE)}
          >
            No! I don't know this word.
          </Button>
        </Flex>
      </Box>
    );
  }
}

SessionCard.propTypes = {};

export default SessionCard;
