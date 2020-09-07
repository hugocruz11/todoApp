import React, { Component } from 'react';
import TodoAppScreen from './screens/TodoAppScreen';

export default class Index extends Component {
  render() {
    return <TodoAppScreen navigation={this.props.navigation} />;
  }
}
