import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import firebase from '../../firebase';
import { Box, Card, Button, Divider, Input, Text, Textarea } from '../../components/base';

const SubcardForm = ({
  subcard,
  subcardIndex,
  onAddSubcardDetails,
  onDeleteSubcardDetails,
  onChangeInput,
}) => {
  return (
    <Card p={6} mb={5}>
      <Text.Title mb={6}>{`Subcard ${subcardIndex + 1}`}</Text.Title>
      <Box mb={6}>
        <Input
          id={'word'}
          label={'word'}
          mb={4}
          value={subcard.word}
          onChange={e => onChangeInput(e, subcardIndex)}
        />
        <Input
          id={'pos'}
          label={'pos'}
          mb={4}
          value={subcard.pos}
          onChange={e => onChangeInput(e, subcardIndex)}
        />
        <Input
          id={'phonetic'}
          label={'phonetic'}
          mb={4}
          value={subcard.phonetic}
          onChange={e => onChangeInput(e, subcardIndex)}
        />
        <Input
          id={'synonyms'}
          label={'synonyms'}
          mb={4}
          value={subcard.synonyms}
          onChange={e => onChangeInput(e, subcardIndex)}
        />
      </Box>
      <Divider borderColor={'secondaryLighter'} my={5} />
      <MultiTextField
        data={subcard.meanings}
        dataIndex={subcardIndex}
        fieldName={'meanings'}
        onDelete={onDeleteSubcardDetails}
        onAdd={onAddSubcardDetails}
        onChange={onChangeInput}
      />
      <Divider borderColor={'secondaryLighter'} my={5} />
      <MultiTextField
        data={subcard.examples}
        dataIndex={subcardIndex}
        fieldName={'examples'}
        onDelete={onDeleteSubcardDetails}
        onAdd={onAddSubcardDetails}
        onChange={onChangeInput}
      />
    </Card>
  );
};

SubcardForm.propTypes = {
  subcard: PropTypes.object,
  subcardIndex: PropTypes.number,
  onAddSubcardDetails: PropTypes.func,
  onDeleteSubcardDetails: PropTypes.func,
  onChangeInput: PropTypes.func,
};

SubcardForm.defaultProps = {
  // subcard: {},
};
export default SubcardForm;

const MultiTextField = ({ data = [], fieldName, dataIndex, onDelete, onAdd, onChange }) => (
  <Box mb={3}>
    {data.map((datum, index) => (
      <Box mb={4} key={index}>
        <Textarea
          id={fieldName}
          label={`${fieldName} ${index + 1}`}
          rows={2}
          value={datum}
          onChange={e => onChange(e, dataIndex, index)}
        />
        <Button
          condense={true}
          variant={'outline'}
          colors={'danger'}
          onClick={() => onDelete(fieldName, dataIndex, index)}
        >
          Delete
        </Button>
      </Box>
    ))}
    <Button colors={'secondary'} variant={'outline'} onClick={() => onAdd(fieldName, dataIndex)}>
      {`Add ${fieldName}`}
    </Button>
  </Box>
);
