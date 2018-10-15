import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase, { firestore } from './firebase';
import styled from 'styled-components';
import { Provider, Container } from 'rebass';

import { theme } from './theme';
import { Flex } from './components/base';

import SessionScreen from './screens/session';
import PreSessionScreen from './screens/preSession';
import PostSessionScreen from './screens/postSession';
import CreateCardScreen from './screens/createCard';
import CardList from './screens/cardList';

class App extends Component {
  state = {
    input: '',
    text: '',
  };
  componentDidMount() {
    var cards = firestore
      .collection('cards')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
        });
      });
    console.log(cards);
    // this.addData();
    // firebase
    //   .database()
    //   .ref('card')
    //   .on('value', this.updateText);
  }

  // addData = () => {
  //   firestore
  //     .collection('cards')
  //     .doc('wordTest')
  //     .set(mockData)
  //     .then(function() {
  //       console.log('Document successfully written!');
  //     })
  //     .catch(function(error) {
  //       console.error('Error writing document: ', error);
  //     });
  // };
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
            <Flex p={4} width={1} alignItems={'center'}>
              <Link to="/cards" style={{ marginRight: '36px' }}>
                Word List
              </Link>
              <Link to="/pre-session" style={{ marginRight: '36px' }}>
                Session
              </Link>
              <Link to="/create-card">Create card</Link>
            </Flex>
            <Switch>
              <Route exact path="/" component={PreSessionScreen} />
              <Route exact path="/cards" component={CardList} />
              <Route exact path="/pre-session" component={PreSessionScreen} />
              <Route exact path="/post-session" component={PostSessionScreen} />
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

const mockData = {
  title: 'indifference',
  description: 'des crip tion',
  multiplier: 1.5,
  lastTransaction: '2018-10-4T16:08:18+07:00',
  note: 'note',
  subcards: [
    {
      word: 'indifference',
      pos: 'n.',
      phonetic: 'in-ˈdi-fərn(t)s',
      meanings: [
        'the quality, state, or fact of being indifferent',
        'absence of compulsion to or toward one thing or another',
      ],
      examples: [
        'She was amazed that some people could watch the trial with indifference.',
        'She watched them with a cool indifference.',
      ],
      synonyms: 'apathy, casualness, complacence, disinterestedness, disregard',
    },
    {
      word: 'indifferent',
      pos: 'adj.',
      phonetic: 'in-ˈdi-fərn(t)s',
      meanings: [
        'the quality, state, or fact of being indifferent',
        'absence of compulsion to or toward one thing or another',
      ],
      examples: [
        'She was amazed that some people could watch the trial with indifference.',
        'She watched them with a cool indifference.',
      ],
      synonyms: 'apathy, casualness, complacence, disinterestedness, disregard',
    },
  ],
};
