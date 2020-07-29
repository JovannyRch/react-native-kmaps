
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonVar from './src/components/ButtonVar';
import { TextInput } from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';

export default function App() {
  const [numberVariables, setNumberVariables] = useState(1);
  const [typing, setTyping] = useState(false)
  const onSetNumberVariables = (newValue) => {
    setNumberVariables(newValue);
  }

  const onContinuar = () => {
    //Pasar a otra pagina
    if (numberVariables <= 12) {

    } else {
      Snackbar.show({
        text: 'Hello world',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'UNDO',
          textColor: 'green',
          onPress: () => { /* Do something. */ },
        },
      });
    }
  }

  const onTyping = (newValue) => {
    setTyping(true);
    setNumberVariables(newValue);

  }


  const variables = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elige la cantidad de variables ({numberVariables})</Text>
      {
        variables.map((n) => {
          return <ButtonVar key={n} text={n} onPress={() => onSetNumberVariables(n)} />
        })
      }
      <Text>O escribe la cantidad</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onTyping(text)}
        placeholder="Escribe aqui la cantidad de variables"
        keyboardType={'numeric'}
        value={numberVariables.toString()}
      />
      {
        typing && <View style={styles.button} >
          <Button title="Continuar" onPress={onContinuar} />
        </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 15,
  }
});
