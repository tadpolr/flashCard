import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import firebase from './firebase'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from './theme'

import SessionScreen from './screens/session'
import CreateCardScreen from './screens/createCard'
import SelectDeckScreen from './screens/selectDeck'

class App extends Component {
  state = {
    input: '',
    text: ''
  }
  componentDidMount() {
    firebase.database().ref('testText').on('value', this.updateText);
  }
  updateText = (snapshot) => {
    this.setState({
      text: snapshot.val().text
    })
  }
  saveInput = () => {
    this.writeInputData()
  }

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    })
  }
  writeInputData = (userId, name, email, imageUrl) => {
    firebase.database().ref('testText').set({
      text: this.state.input,
    });
  }
  deleteInputData = (userId, name, email, imageUrl) => {
    firebase.database().ref('testText').remove()
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <AppContainer>
            <div className="App">
              <textarea value={this.state.input} onChange={this.handleInputChange}/>
              <button onClick={this.saveInput}>save</button>
              <button onClick={this.deleteInput}>delete</button>
              <p>{this.state.text}</p>
            </div>
            <div>
              <Link to="/select-deck">Select deck</Link>
              <Link to="/session">Session</Link>
              <Link to="/create-card">Create card</Link>
            </div>
            <Switch>
              <Route exact path="/" component={SelectDeckScreen} />
              <Route exact path="/select-deck" component={SelectDeckScreen} />
              <Route exact path="/session" component={SessionScreen} />

              <Route exact path="/create-card" component={CreateCardScreen} />
            </Switch>
          </AppContainer>
        </Router>

      </ThemeProvider>
    );
  }
}

export default App;

const AppContainer = styled.div`

`
