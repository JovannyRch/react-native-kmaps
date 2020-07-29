import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
import ButtonVar from '../components/ButtonVar';

export default function HomeScreen({ navigation }) {
    const [numberVariables, setNumberVariables] = useState(1);
    const [typing, setTyping] = useState(false)
    const onSetNumberVariables = (newValue) => {
        setNumberVariables(newValue);
    }

    const onContinuar = () => {
        //Pasar a otra pagina
        if (numberVariables <= 12) {
            if (numberVariables < 7) {
                //Pantalla con cuadros
                navigation.navigate('Grid');
            } else {
                //Pantalla con las tablas de verdad
                navigation.navigate('Table');
            }
        } else {
            Snackbar.show({
                text: 'Maximo 12 variables',
                duration: 3000,
                action: {
                    text: 'Ok',
                    textColor: 'white',
                    onPress: () => { },
                },
            });
            setNumberVariables(12);
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
