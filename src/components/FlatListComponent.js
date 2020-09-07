import React, { Component } from 'react';
import { Icon } from 'native-base';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class FlatListComponent extends Component {
  buildItems() {
    const rows = [];
    this.props.items.forEach((item, key) => {
      rows.push(
        <View key={key} style={{ flexDirection: 'row' }}>
          <View style={{ width: '85%' }}>
            <View style={[styles.container]}>
              <View style={styles.item1}>
                <Image
                  source={{ uri: item.url }}
                  style={{ width: 35, height: 35 }}
                />
              </View>
              <View style={styles.item2}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode='tail'
                  style={styles.textItem}
                >
                  {item.sum ? item.sum + ' Sum -' : ''} {item.name}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.removeItem(key);
            }}
            style={{
              width: '15%',
              marginTop: 7,
              marginRight: 0,
              marginLeft: 0,
            }}
          >
            <Icon name='close' style={styles.iconRemove} />
          </TouchableOpacity>
        </View>
      );
    });
    return rows;
  }

  render() {
    return <>{this.buildItems()}</>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    paddingLeft: 15,
    paddingRight: 10,
    borderBottomWidth: 0.4,
    paddingVertical: 8,
  },
  item1: {
    width: '30%',
    alignItems: 'flex-start',
  },
  item2: {
    width: '70%',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  textItem: {
    fontFamily: 'Muli-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
  },
  iconRemove: {
    fontSize: 25,
    color: 'red',
    fontWeight: '700',
    paddingTop: 6,
    paddingLeft: 10,
  },
});
