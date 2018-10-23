import React, { Component } from 'react';

import { Input, Box, Button, Text } from '../../components/base';
import { fireAuth } from '../../firebase';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  signUpWithFirebase = () => {
    const { email, password } = this.state;
    fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(error => alert(error.message.toString()));
  };
  validateData = () => {
    const { email, password, confirmPassword } = this.state;
    if (!email || !password || !confirmPassword) {
      alert('please enter all fields.');
      return false;
    }
    if (password !== confirmPassword) {
      alert('password & confirmPassword are not matched');
      return false;
    }
    return true;
  };

  handleSignUp = event => {
    event.preventDefault();
    const isDataValid = this.validateData();
    if (isDataValid) {
      this.signUpWithFirebase();
    }
  };

  handleChangeInput = e => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({
      [id]: value,
    });
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <Box>
        <Text.Header mb={6}>Sign up</Text.Header>
        <form onSubmit={this.handleSignUp}>
          <Input
            id={'email'}
            label={'email'}
            value={email}
            mb={4}
            onChange={this.handleChangeInput}
          />
          <Input
            id={'password'}
            label={'password'}
            type={'password'}
            value={password}
            mb={4}
            onChange={this.handleChangeInput}
          />
          <Input
            id={'confirmPassword'}
            label={'confirm password'}
            type={'password'}
            value={confirmPassword}
            mb={4}
            onChange={this.handleChangeInput}
          />
          <Button type={'submit'}>SignUp</Button>
        </form>
      </Box>
    );
  }
}

export default SignUp;
