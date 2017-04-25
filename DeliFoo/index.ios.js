/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { createLogger }  from 'redux-logger';
import reducer from './src/reducers';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore( reducer, initialState, enhancer);
}

const store = configureStore({});

export default class DeliFoo extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <DeliFoo />
  </Provider>
);

AppRegistry.registerComponent('DeliFoo', () => App);
