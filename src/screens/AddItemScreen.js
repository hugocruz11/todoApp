import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';
import { TodoButton, Form } from '../components';
import { validate } from '../utils/validators';

export default function AddItemScreen(props) {
  const [name, setName] = useState('');
  const [invalidMessage, setinvalidMessage] = useState('');

  const defaultValues = {
    item: '',
  };

  const FormRef = Form(defaultValues);
  const { handleSubmit, triggerValidation } = FormRef;

  save = () => {
    handleSubmit(onSubmit)().then(async () => {
      const validUserForm = await triggerValidation();
      if (!validUserForm) alert('valida los campos en rojo');
    });
  };

  const onSubmit = () => {
    let validateMessage;
    let addItem = props.navigation.getParam('addItem', null);
    let item = {};
    let valueFirsWord, valueFirsWordFinal;
    validateMessage = validate(name);
    setinvalidMessage(validateMessage);
    if (validateMessage == '') {
      if (name.charAt(0) == '$') {
        valueFirsWord = name.replace(/ .*/, '');
        valueFirsWordFinal = valueFirsWord.replace('$', '');
        item.image = valueFirsWordFinal;
        item.name = name.replace('$', '');
      } else {
        item.name = name;
      }
      addItem(item);
      props.navigation.pop(1);
    }
  };

  return (
    <View style={{ backgroundColor: '#f1f4f9', height: '100%' }}>
      <Header style={{ backgroundColor: '#FF9933' }}>
        <Left>
          <Button transparent>
            <Icon
              name='arrow-back'
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </Button>
        </Left>
        <Body>
          <Title>Añadir un item</Title>
        </Body>
      </Header>
      <View style={styles.container}>
        <Text>Ingrese el nombre:</Text>
        <TextInput
          form={FormRef}
          placeholder='Nombre del item'
          style={styles.input}
          onChangeText={(value) => setName(value)}
        />
      </View>
      <View style={styles.contentText}>
        <Text style={{ color: '#FF0033' }}>{invalidMessage}</Text>
      </View>
      <View style={styles.button}>
        <TodoButton color='#FFFFFF' title='Guardar' onPress={save} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#FF9933',
    borderColor: '#6600FF',
    borderWidth: 0.5,
    margin: 15,
    marginLeft: '20%',
    marginRight: '20%',
    height: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: '80%',
  },
});
