import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase from './firebase';
import styled from 'styled-components';
import { Provider, Container } from 'rebass';

import { theme } from './theme';

import SessionScreen from './screens/session';
import PreSessionScreen from './screens/preSession';
import CreateCardScreen from './screens/createCard';
import SelectDeckScreen from './screens/selectDeck';

class App extends Component {
  state = {
    input: '',
    text: '',
  };
  componentDidMount() {
    firebase
      .database()
      .ref('card')
      .on('value', this.updateText);
  }
  updateText = snapshot => {
    // console.log(snapshot.val())
    this.setState({
      text: snapshot.val().description.sub,
    });
  };
  saveInput = () => {
    this.writeInputData();
  };

  handleInputChange = e => {
    this.setState({
      input: e.target.value,
    });
  };
  writeInputData = (userId, name, email, imageUrl) => {
    firebase
      .database()
      .ref('testText')
      .set({
        text: this.state.input,
      });
  };
  deleteInputData = (userId, name, email, imageUrl) => {
    firebase
      .database()
      .ref('testText')
      .remove();
  };
  render() {
    return (
      <Provider theme={theme}>
        <Router>
          <AppContainer maxWidth={['350px', '704px']}>
            {/*<div className="App">
              <textarea value={this.state.input} onChange={this.handleInputChange}/>
              <button onClick={this.saveInput}>save</button>
              <button onClick={this.deleteInput}>delete</button>
              <p>{this.state.text}</p>
    </div>*/}
            <div>
              <Link to="/select-deck" style={{ marginRight: '36px' }}>
                Word List
              </Link>
              <Link to="/pre-session" style={{ marginRight: '36px' }}>
                Session
              </Link>
              <Link to="/create-card">Create card</Link>
            </div>
            <Switch>
              <Route exact path="/" component={SelectDeckScreen} />
              <Route exact path="/select-deck" component={SelectDeckScreen} />
              <Route exact path="/pre-session" component={PreSessionScreen} />
              <Route exact path="/session/:date" component={SessionScreen} />
              <Route exact path="/create-card" component={CreateCardScreen} />
            </Switch>
          </AppContainer>
        </Router>
      </Provider>
    );
  }
}

export default App;

const AppContainer = styled(Container)``;
