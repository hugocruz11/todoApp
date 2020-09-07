import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text, Icon } from 'native-base';
import { PropTypes } from 'prop-types';

export default class TodoButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    let { color } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View>
          <Text style={{ color: color }}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
