import React, { Component } from 'react';
import { Container, Header, Left, Body, Title } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { TodoButton, FlatListComponent } from '../components';
import { ImageTodoAppServices } from '../services';
import { addItem } from '../actions/TodoAppActions';
import { connect } from 'react-redux';

class TodoAppScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      immage: '',
      todoItemsReal: [],
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }
  render() {
    return (
      <View style={{ backgroundColor: '#f1f4f9', height: '100%' }}>
        <Header style={{ backgroundColor: '#FF9933' }}>
          <Left />
          <Body>
            <Title>Todo App</Title>
          </Body>
        </Header>
        <View style={styles.buttonStyle}>
          <TodoButton
            color='#FFFFFF'
            title='Añadir un item'
            onPress={() => {
              this.props.navigation.navigate('AddItemScreen', {
                addItem: this.onAddItem,
                getArtist: this.getArtist,
              });
            }}
          />
        </View>
        <FlatListComponent
          items={this.state.todoItems}
          removeItem={this.onRemoveItem}
        />
        <View style={styles.buttonStyle}>
          <TodoButton
            color='#FFFFFF'
            title='Nerd Style'
            onPress={() => {
              this.nerdStyle();
            }}
          />
        </View>
        <View style={styles.contentButtons}>
          <TodoButton
            color='#FFFFFF'
            title='Normal Style'
            onPress={() => {
              this.normalStyle();
            }}
          />
        </View>
        <View style={styles.contentButtons}>
          <TodoButton
            color='#FFFFFF'
            title='Orden Alfabetico'
            onPress={() => {
              this.alphabeticalOrder();
            }}
          />
        </View>
      </View>
    );
  }

  alphabeticalOrder() {
    let todoItemsAux = this.state.todoItems;
    todoItemsAux.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      todoItems: todoItemsAux,
    });
  }

  nerdStyle() {
    let { todoItems } = this.state;
    let nerdStyle = todoItems.map((item) => {
      let nameTransfort = item.name
        .replace(/o/gi, 0)
        .replace(/i/gi, 1)
        .replace(/e/gi, 3)
        .replace(/a/gi, 4);
      let sumTotal = this.sunNum(nameTransfort);
      return {
        name: nameTransfort,
        sum: sumTotal.sumatoria,
        url: item.url,
      };
    });
    this.setState({
      todoItems: nerdStyle,
    });
  }

  sunNum(data) {
    let numeros = data.match(/(\d+)/g);
    var numberInt = numeros.map(function (item) {
      return parseInt(item, 10);
    });
    let sumatoria = numberInt.reduce((a, b) => a + b);
    return {
      sumatoria,
    };
  }

  normalStyle() {
    let { todoItemsReal } = this.state;
    this.setState({
      todoItems: todoItemsReal,
    });
  }

  async getArtist(data) {
    await ImageTodoAppServices.getImage(data.image)
      .then((response) => {
        let imageFinal = response[0].logo;
        let item = {};
        item.url = imageFinal;
        item.name = data.name;
        let items = [...this.state.todoItems, item];
        this.setState({
          todoItems: items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onAddItem(item) {
    if (item.image) {
      this.getArtist(item);
    } else {
      let items = [...this.state.todoItems, item];
      this.setState({
        todoItems: items,
        todoItemsReal: items,
      });
    }
  }

  onRemoveItem(Key) {
    let itemAux = [...this.state.todoItems];
    itemAux.splice(Key, 1);
    this.setState({
      todoItems: itemAux,
    });
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 50,
    backgroundColor: '#FF9933',
    borderColor: '#6600FF',
    borderWidth: 0.5,
    margin: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentButtons: {
    marginTop: 10,
    backgroundColor: '#FF9933',
    borderColor: '#6600FF',
    borderWidth: 0.5,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(TodoAppScreen);
