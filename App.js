import React, { Component } from 'react';
import { Root } from 'native-base';
import RootNavigator from './src/navigation/RootNavigator';
import TodoAppStore from './src/TodoAppStore';
import { Provider } from 'react-redux';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    let storeApp = TodoAppStore();
    return (
      <Provider store={storeApp}>
        <Root>
          <RootNavigator />
        </Root>
      </Provider>
    );
  }
}
