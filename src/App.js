import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
  render() {
    return (
      <Provider theme={theme}>
        <Router>
          <AppContainer maxWidth={['350px', '704px']}>
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
