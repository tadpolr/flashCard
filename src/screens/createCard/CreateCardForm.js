import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firebase from '../../firebase';
import { Box, Button, Divider, Input, Select, Textarea } from '../../components/base';
import SubcardForm from './SubcardForm';
class CreateCardForm extends Component {
  state = {
    title: '',
    description: '',
    multiplier: '',
    subcards: [],
    note: '',
  };

  handleAddCard = () => {
    console.log('add card');
  };

  handleAddSubcardDetails = (field, subcardIndex) => {
    const updatedSubcards = [...this.state.subcards];
    updatedSubcards[subcardIndex][field].push('');
    this.setState({
      subcards: [...updatedSubcards],
    });
  };

  handleDeleteSubcardDetails = (field, subcardIndex, fieldIndex) => {
    const updatedSubcards = [...this.state.subcards];
    updatedSubcards[subcardIndex][field].splice(fieldIndex, 1);
    this.setState({
      subcards: [...updatedSubcards],
    });
  };

  handleAddSubcard = () => {
    const updatedSubcards = [...this.state.subcards];

    updatedSubcards.push({
      word: '',
      phonetic: '',
      meanings: [],
      synonyms: '',
      examples: [],
    });
    this.setState({
      subcards: [...updatedSubcards],
    });
  };

  handleChangeInput = e => {
    const value = e.target.value;
    const id = e.target.id;
    this.setState({
      [id]: value,
    });
  };

  handleChangeSubcardInput = (e, subcardIndex, fieldIndex) => {
    const value = e.target.value;
    const id = e.target.id;
    const updatedSubcards = [...this.state.subcards];
    if (Number.isInteger(Number.parseInt(fieldIndex))) {
      updatedSubcards[subcardIndex][id][fieldIndex] = value;
    } else {
      updatedSubcards[subcardIndex][id] = value;
    }
    this.setState({
      subcards: updatedSubcards,
    });
  };

  render() {
    const { title, description, subcards, note, multiplier } = this.state;
    return (
      <Box>
        <Box mb={6}>
          <Input
            id={'title'}
            label={'word'}
            value={title}
            mb={4}
            onChange={this.handleChangeInput}
          />
          <Textarea
            id={'description'}
            label={'description'}
            rows={2}
            value={description}
            mb={4}
            onChange={this.handleChangeInput}
          />
          <Input
            id={'multiplier'}
            label={'initial multiplier'}
            value={multiplier}
            mb={4}
            onChange={this.handleChangeInput}
          />
        </Box>
        {subcards.map((subcard, subcardIndex) => (
          <SubcardForm
            key={subcardIndex}
            subcard={subcard}
            subcardIndex={subcardIndex}
            onAddSubcardDetails={this.handleAddSubcardDetails}
            onDeleteSubcardDetails={this.handleDeleteSubcardDetails}
            onChangeInput={this.handleChangeSubcardInput}
          />
        ))}

        <Button variant={'outline'} colors={'secondary'} onClick={this.handleAddSubcard}>
          Add Subcard
        </Button>
        <Divider />

        <Textarea
          id={'note'}
          rows={4}
          label={'note'}
          value={note}
          onChange={this.handleChangeInput}
        />
        <Divider />
        <Button onClick={this.handleAddCard}>Save</Button>
      </Box>
    );
  }
}

CreateCardForm.propTypes = {};

export default CreateCardForm;
