import React, { Component } from 'react';

import { Input, Box, Button, Text } from '../../components/base';
import { fireAuth } from '../../firebase';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleLogin = event => {
    const { email, password } = this.state;
    event.preventDefault();
    fireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(error => alert(error.message.toString()));
  };

  handleChangeInput = e => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({
      [id]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Box>
        <Text.Header mb={6}>Login</Text.Header>
        <form onSubmit={this.handleLogin}>
          <Input
            id={'email'}
            type={'email'}
            label={'email'}
            value={email}
            mb={4}
            onChange={this.handleChangeInput}
          />
          <Input
            id={'password'}
            type={'password'}
            label={'password'}
            value={password}
            mb={4}
            onChange={this.handleChangeInput}
          />
          <Button type={'submit'} onClick={this.handleLogin}>
            Login
          </Button>
        </form>
      </Box>
    );
  }
}

export default Login;
