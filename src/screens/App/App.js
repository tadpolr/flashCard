import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route as RouteBase,
  NavLink,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import { Provider, Container } from 'rebass';

import { theme, COLOR } from '../../theme';
import { Flex, Button, Text } from '../../components/base';
import { fireAuth, firestore } from '../../firebase';

import SessionScreen from '../session';
import DrillScreen from '../drill';
import PreSessionScreen from '../preSession';
import PostSessionScreen from '../postSession';
import CreateCardScreen from '../createCard';
import CardListScreen from '../cardList';
import SignUpScreen from '../SignUp';
import LoginScreen from '../login';

const RenderComponent = ({ component, userInfo, routeProps }) => {
  const { history, match, location } = routeProps;
  return React.createElement(component, { userInfo, history, match, location });
};

const Route = ({ userInfo, privateRoute, exact, path, component }) => {
  if (privateRoute && !userInfo) {
    return <Redirect to="/login" />;
  }
  return (
    <RouteBase
      userInfo={userInfo}
      exact={exact}
      path={path}
      component={routeProps => (
        <RenderComponent component={component} userInfo={userInfo} routeProps={routeProps} />
      )}
    />
  );
};

class App extends Component {
  state = {
    userInfo: null,
  };
  componentDidMount() {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          userInfo: {
            email: user.email,
            uid: user.uid,
          },
        });
      } else {
        this.setState({
          userInfo: null,
        });
      }
    });
  }

  // This func is used to back up database.
  // backupCards = () => {
  //   firestore
  //     .collection('0FX3B1CFkBXDH5q5H1pngKio7oI2')
  //     .get()
  //     .then(querySnapshot => {
  //       let cards = [];
  //       querySnapshot.forEach(doc => {
  //         cards.push(doc.data());
  //       });
  //       cards.map(card => {
  //         firestore.collection('0FX3B1CFkBXDH5q5H1pngKio7oI2').doc(card.title);
  //         .set({}, { merge: true });
  //       });

  //       console.log(JSON.stringify(cards));
  //     });
  // };

  handleLogout = () => {
    fireAuth
      .signOut()
      .then(() => {
        console.log('logged out');
      })
      .catch(error => alert(error.message.toString()));
  };

  render() {
    const { userInfo } = this.state;
    return (
      <Provider theme={theme}>
        <Router>
          <AppContainer maxWidth={['350px', '704px']}>
            <Flex width={1} py={4} alignItems={'center'} flexWrap={'wrap'}>
              <Flex w={1} justifyContent={'space-between'} alignItems={'center'} mb={6}>
                <Text>{userInfo ? userInfo.email : 'Oops! you are not logged in.'}</Text>
                {userInfo && (
                  <Button
                    condense={true}
                    ml={'auto'}
                    variant={'outline'}
                    colors={'warning'}
                    onClick={this.handleLogout}
                  >
                    Log out
                  </Button>
                )}
              </Flex>
              <Flex w={1} justifyContent={['space-between', 'start']}>
                <NavLink
                  to="/drill"
                  style={{ marginRight: '24px' }}
                  activeStyle={{ color: COLOR.primary, fontWeight: 'bold' }}
                >
                  Drill
                </NavLink>
                <NavLink
                  to="/pre-session"
                  style={{ marginRight: '24px' }}
                  activeStyle={{ color: COLOR.primary, fontWeight: 'bold' }}
                >
                  Session
                </NavLink>
                <NavLink
                  to="/create-card"
                  style={{ marginRight: '24px' }}
                  activeStyle={{ color: COLOR.primary, fontWeight: 'bold' }}
                >
                  Create
                </NavLink>
                <NavLink
                  to="/cards"
                  activeStyle={{ color: COLOR.primary, fontWeight: 'bold' }}
                >
                  List
                </NavLink>
              </Flex>
            </Flex>
            <Switch>
              <Route
                exact={true}
                userInfo={userInfo}
                privateRoute={true}
                path="/"
                component={PreSessionScreen}
              />
              <Route exact={true} userInfo={userInfo} path="/login" component={LoginScreen} />
              <Route exact={true} path="/sign-up-for-users" component={SignUpScreen} />
              <Route
                exact={true}
                userInfo={userInfo}
                privateRoute={true}
                path="/cards"
                component={CardListScreen}
              />
              <Route
                exact={true}
                userInfo={userInfo}
                privateRoute={true}
                path="/pre-session"
                component={PreSessionScreen}
              />
              <Route
                exact={true}
                userInfo={userInfo}
                privateRoute={true}
                path="/post-session"
                component={PostSessionScreen}
              />
              <Route
                exact={true}
                userInfo={userInfo}
                privateRoute={true}
                path="/session/:date"
                component={SessionScreen}
              />
              <Route
                exact={true}
                userInfo={userInfo}
                privateRoute={true}
                path="/drill"
                component={DrillScreen}
              />
              <Route
                exact={true}
                userInfo={userInfo}
                privateRoute={true}
                path="/create-card"
                component={CreateCardScreen}
              />
            </Switch>
          </AppContainer>
        </Router>
      </Provider>
    );
  }
}

export default App;

const AppContainer = styled(Container)``;
